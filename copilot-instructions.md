---
name: Copilot Project Instructions
description: Guidelines for GitHub Copilot working on Soc Ops
---

# Copilot Instructions — Soc Ops

You assist on the **Soc Ops** Social Bingo game lab. Apply these principles when generating code.

## 🎯 Core Principles

### 1. Functional, Immutable Patterns
- Functional React components only
- Avoid mutations: `[...board].map(s => s.id === id ? {...s, marked: !s.marked} : s)`

### 2. Pure Functions for Logic
- `bingoLogic.ts` must be side-effect free
- Separate UI from business logic
- Test thoroughly before UI integration

### 3. Type Safety Always
- Strict TypeScript mode
- No `any` types — use explicit interfaces
- Export types alongside implementations

### 4. Test-Driven Development (TDD)
- Red → write failing test
- Green → implement minimal code
- Refactor → improve with tests as safety net

### 5. Design-First, Not Generic
- Avoid generic "AI slop" (purple gradients, Inter font)
- Create distinctive typography, color, motion
- Reference: `.github/instructions/frontend-design.instructions.md`

---

## 📝 Code Generation Standards

### Components
```typescript
type Props = { board: Square[]; onSquareClick: (id: number) => void };

export function BingoBoard({ board, onSquareClick }: Props) {
  return (
    <div className="..."> {/* Tailwind only */}
      {board.map((s) => <BingoSquare key={s.id} {...} />)}
    </div>
  );
}
```

### Tests
```typescript
describe('functionName', () => {
  it('should [expected] when [condition]', () => {
    const result = functionUnderTest(setupData());
    expect(result).toBe(expectedValue);
  });
});
```

### Styling
- **Tailwind ONLY** — no inline styles
- CSS variables for theme
- Dark mode via `dark:` prefix
- Responsive via `sm:` `md:` `lg:`

---

## 🤖 Working with Agents

| Agent | Use When |
|-------|----------|
| **tdd** | Implementing game logic with tests |
| **pixel-jam** | UI redesigns & themes |
| **quiz-master** | Adding quiz content |
| **ui-review** | Code review before merge |

---

## ✅ Validation Checklist

Before suggesting code:
- [ ] No `any` types
- [ ] `npm run lint` passes
- [ ] Tests written & passing
- [ ] `npm run build` succeeds
- [ ] Tailwind only, no inline styles
- [ ] Accessibility: ARIA labels, keyboard nav
- [ ] Not generic/sloppy design

---

## 🚫 Anti-Patterns

❌ Mutable state | ❌ Mixed UI/logic | ❌ `any` types
❌ Inline styles | ❌ Class components | ❌ Generic aesthetics

---

## 📖 References

- `.instructions.md` — Full workspace guide
- `src/utils/bingoLogic.ts` — Pure game logic
- `src/hooks/useBingoGame.ts` — State orchestration
- `.github/instructions/frontend-design.instructions.md` — Design philosophy
- `.github/instructions/tailwind-4.instructions.md` — Tailwind v4

---

**Goal:** Exemplary AI-first development with polished, distinctive design and robust, tested code.
