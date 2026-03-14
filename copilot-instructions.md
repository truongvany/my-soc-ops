---
name: Copilot Project Instructions
description: Guidance for GitHub Copilot working on Soc Ops project
---

# Copilot Instructions for Soc Ops

You are assisting developers on the **Soc Ops** Social Bingo game lab project. Apply these guidelines when generating code, reviewing PRs, or working with agents.

## 🎯 Project Context

- **What:** Social Bingo game for mixers (find people matching questions, get 5-in-a-row to win)
- **Tech Stack:** TypeScript, React 19, Vite, Tailwind CSS v4, Vitest
- **Audience:** GitHub Copilot Agent Lab participants learning AI-first development
- **Quality:** Full test coverage on core logic, strict TypeScript, accessible UI

## 📋 Core Principles

### 1. Favor Functional, Immutable Patterns
- Use functional React components only
- Avoid state mutations — return new objects/arrays
- Example: `[...board].map(s => s.id === id ? {...s, marked: !s.marked} : s)`

### 2. Pure Functions for Logic
- Game logic (`bingoLogic.ts`) must be side-effect free
- Separate UI from business logic
- Test pure functions thoroughly before UI integration

### 3. Type Safety First
- Enable strict TypeScript mode
- Avoid `any` types — use explicit interfaces
- Export types alongside implementations
- Example: `type Props = { board: Square[]; onSquareClick: (id: number) => void; }`

### 4. Test-Driven Development (TDD)
- Write failing tests first (Red phase)
- Implement minimal code to pass (Green phase)
- Refactor with tests as safety net (Refactor phase)
- Prioritize unit tests for core logic over integration tests

### 5. Design-First, Not AI-Generic
- Avoid generic "AI slop" aesthetics (purple gradients on white)
- Use distinctive typography, color palettes, animations
- Reference design instructions: `.github/instructions/frontend-design.instructions.md`
- Create one cohesive aesthetic per component, not scattered effects

## 🛠️ Code Generation Standards

### Component Structure
```typescript
// 1. Type imports
import { Square } from '../types';

// 2. Props interface (exported for testing)
type Props = {
  board: Square[];
  onSquareClick: (id: number) => void;
};

// 3. Component implementation
export function BingoBoard({ board, onSquareClick }: Props) {
  return (
    <div className="..."> {/* Only Tailwind, no inline styles */}
      {board.map((s) => (
        <BingoSquare key={s.id} {...} /
      ))}
    </div>
  );
}
```

### Test Structure
```typescript
describe('functionName', () => {
  it('should [expected behavior] when [condition]', () => {
    // Arrange
    const input = setupTestData();
    
    // Act
    const result = functionUnderTest(input);
    
    // Assert
    expect(result).toBe(expectedValue);
  });
});
```

### Styling Rules
- **Tailwind ONLY** — no CSS modules, styled-components, or inline styles
- **CSS variables** for theme persistence (colors, spacing)
- **Dark mode support** with `dark:` prefix utilities
- **Responsive design** with `sm:`, `md:`, `lg:` breakpoints
- **Animations:** Use `@keyframes` for complex motion, `animate-` classes for simple effects
- Review **[tailwind-4.instructions.md](.github/instructions/tailwind-4.instructions.md)** before styling

## 🤖 Working with Agents

### Agent Roles
| Agent | When to Use | Constraint |
|-------|------------|-----------|
| **tdd** | Implementing new game logic or features | Write tests first, red → green → refactor |
| **pixel-jam** | UI redesigns, themes, new components | Don't change functionality, focus on aesthetics |
| **quiz-master** | Adding new quiz themes, questions, content | Check `data/questions.ts` format |
| **ui-review** | Code review before merge | Validate accessibility, performance, consistency |

### Agent Communication
- **Be specific:** "/tdd Implement game reset with tests" (not "add reset")
- **Reference code:** "Like the toggleSquare function in bingoLogic.ts"
- **Link standards:** "Follow the component structure in BingoBoard.tsx"
- **Accept criteria:** "Must pass all tests and ESLint"

## ✅ Validation Checklist

Before suggesting code, verify:

- [ ] **Type Safety** — No `any` types, strict TypeScript passes
- [ ] **Linting** — Code passes `npm run lint` (ESLint rules)
- [ ] **Testing** — New logic has unit tests, all pass `npm run test`
- [ ] **Build** — `npm run build` succeeds without warnings
- [ ] **Styling** — Uses only Tailwind, no inline styles
- [ ] **Accessibility** — Buttons/modals have ARIA labels, keyboard navigation
- [ ] **Design** — Not generic/AI-sloppy, cohesive aesthetic if UI change
- [ ] **Components** — Follows functional component pattern with Props interface

## 🚫 Anti-Patterns (Don't Do This)

❌ Mutable state updates  
❌ Component logic mixed with UI rendering  
❌ `any` types in TypeScript  
❌ Tests without descriptive names  
❌ Inline styles or CSS modules (use Tailwind)  
❌ Class components (use functional only)  
❌ Generic AI aesthetics (beige gradients, overused fonts)  
❌ Large component files (split into smaller components)  

## 📚 Standard Patterns to Follow

### Game State Hook
```typescript
// useBingoGame manages game orchestration
const [gameState, setGameState] = useState<'start' | 'playing' | 'bingo'>('start');
const [board, setBoard] = useState(generateBoard());

// Pure functions called by hook
const result = checkBingo(board);
```

### Components Always Accept Props, Pass Down
```typescript
// Don't: fetch data inside component
// Do: accept as prop or from hook

export function GameScreen({ board, onSquareClick, hasBingo }: Props) {
  return (
    <div>
      <BingoBoard board={board} onSquareClick={onSquareClick} />
      {hasBingo && <BingoModal />}
    </div>
  );
}
```

### Test Coverage Targets
- **Game logic** (`bingoLogic.ts`): 100% coverage required
- **Components**: Happy path for UI + accessibility
- **Hooks**: State transitions and effect timing

## 🎨 Design Philosophy

This project emphasizes **design excellence**, not generic outputs:

- **Typography:** Use distinctive fonts (Georgia, Charter, Cascadia Code)
- **Color:** Commit to a cohesive palette (not "all colors equally")
- **Motion:** High-impact page load, subtle micro-interactions
- **Spacing:** Precise, intentional (not random distributed gaps)

When redesigning, study the context and create something that **feels designed for this project**, not for a generic website.

## 📖 Key Files for Reference

- **.instructions.md** — Full project guide
- **src/utils/bingoLogic.ts** — All game logic (pure functions, no side effects)
- **src/utils/bingoLogic.test.ts** — Test patterns (21 tests, all passing)
- **src/hooks/useBingoGame.ts** — Game state orchestration
- **src/components/BingoBoard.tsx** — Component structure example
- **.github/instructions/frontend-design.instructions.md** — Design guidelines
- **.github/instructions/tailwind-4.instructions.md** — Tailwind v4 features

## 🔗 External Standards

- **TypeScript:** Strict mode, no implicit `any`
- **ESLint Config:** `eslint.config.js` (React, Hooks, TypeScript rules)
- **Tailwind v4:** Read before styling anything
- **React 19:** Latest patterns (no legacy Context workarounds)
- **Vitest:** Configuration in `vitest.config.ts`

---

**Goal:** Build an exemplary AI-first development workflow with polished, distinctive design and robust, tested code.
