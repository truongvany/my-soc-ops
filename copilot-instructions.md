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

## 🎨 Design System — Minimalist Mono (Current)

### Aesthetic Philosophy
- **B&W Monochrome:** Pure black (#000), white (#FFF), gray accents only
- **Monospace Typography:** Courier Prime + Roboto Mono fonts exclusively
- **Minimal & Purposeful:** Clean grid system, no decoration, high contrast
- **Professional:** Accessible, readable, distinctive without being flashy

### Color Palette
```
--color-black: #000000       (pure black text, backgrounds, borders)
--color-white: #FFFFFF       (pure white backgrounds)
--color-gray-light: #F5F5F5  (free space, subtle accents)
--color-gray-dark: #333333   (secondary text)
```
**No gradients, no shadows, no blur effects — only solid colors**

### Typography
- **Headings:** Courier Prime, bold, letter-spacing: 4px
  - StartScreen "SOC OPS": 48px (desktop) / 36px (mobile)
  - Modal "BINGO!": 80px, bold
- **Body:** Roboto Mono, regular
  - Descriptions: 20px, line-height: 1.5
  - Questions/labels: 14px

### Key Components

#### StartScreen
- Centered container (max-width: 600px)  
- SVG grid preview (5x5, white/gray squares)
- "SOC OPS" heading (large, bold, monospace)
- Description text (clear, 1-2 sentences)
- "START GAME" CTA button (black border, inverts on hover)
- Animation: Fade in on load (0.6s ease-in-out)

#### BingoBoard
- 5x5 grid, gap: 12px, border: 4px solid black
- BingoSquare: 60px × 60px (desktop), 50px (mobile)
- States:
  - **Unmarked:** white bg, black text, 1px black border
  - **Marked:** black bg, white text (inverted)
  - **Free:** #F5F5F5 gray bg, black text, "FREE" label
- Interactions:
  - Hover: scale 1.05 (0.1s)
  - Click: toggle black/white
  - Focus: 2px dashed black outline

#### BingoModal (on 5-in-a-row)
- Overlay: semi-transparent black (opacity 0.5)
- Modal box: white bg, 4px black border, centered
- "BINGO!" text: 80px Courier Prime, bold, centered
- "PLAY AGAIN" button: same style as START
- Animation: Pop scale (0.7→1.0, 0.5s cubic-bezier)

### Spacing System (Grid-based)
```
--spacing-xs: 8px    (small gaps)
--spacing-sm: 12px   (grid gaps)
--spacing-md: 16px   (padding)
--spacing-lg: 24px   (sections)
--spacing-xl: 32px   (large padding)
```

### Animations (Subtle, Professional)
- **Page Load:** Fade in opacity (0→1), 0.6s ease-in-out
- **Button Hover:** Invert colors (white↔black), 0.2s
- **Button Click:** Scale 0.98, 0.1s
- **Modal Pop:** Scale 0.7→1.0, 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)
- **Square Hover:** Scale 1.02, 0.1s

### Responsive Breakpoints
- **Desktop (≥1024px):** Full-size buttons, 32px padding, 48px heading
- **Tablet (768px–1023px):** Medium sizing, 24px padding
- **Mobile (<768px):** Compact, 16px padding, smaller fonts (-2px reduction)

### Accessibility
- ARIA labels on all buttons: `aria-label="Start Game"`
- BingoSquare: `aria-pressed={marked}`
- Modal: `aria-modal="true"`, `role="dialog"`
- Focus outlines: 2px dashed black (WCAG AA+ contrast)
- Keyboard navigation: Tab through controls, Enter to activate
- No color-only information (shapes/text provide meaning)

### Constraints (Must Enforce)
✗ No colors except black/white/gray  
✗ No gradients or color transitions  
✗ No shadows or blur effects  
✗ Monospace fonts ONLY  
✗ Grid-based layout, no absolute positioning  
✗ Minimal animations (fade, scale, simple transforms)  

---

## 📝 Code Generation Standards

### Components
```typescript
import type { BingoSquareData } from "../types";

type Props = { board: BingoSquareData[]; onSquareClick: (id: number) => void };

export function BingoBoard({ board, onSquareClick }: Props) {
  return (
    <div className="inline-block">
      <div className="grid grid-cols-5 gap-3 p-4 border-4 border-black">
        {board.map((s) => <BingoSquare key={s.id} square={s} />)}
      </div>
    </div>
  );
}
```

### Tests
```typescript
describe("functionName", () => {
  it("should [expected] when [condition]", () => {
    const result = functionUnderTest(setupData());
    expect(result).toBe(expectedValue);
  });
});
```

### Styling
- **Tailwind ONLY** — no inline styles  
- Use CSS variables for theme (defined in index.css)
- Dark mode via `dark:` prefix if needed
- Responsive via `sm:` `md:` `lg:` breakpoints

---

## 🤖 Working with Agents

| Agent | Use When |
|-------|----------|
| **tdd** | Implementing game logic with tests |
| **pixel-jam** | UI redesigns & new themes |
| **quiz-master** | Adding quiz content |
| **ui-review** | Code review before merge |

---

## ✅ Validation Checklist

Before suggesting code:
- [ ] No `any` types
- [ ] `npm run lint` passes
- [ ] Tests written & passing
- [ ] `npm run build` succeeds
- [ ] Tailwind only, no inline styles critical (unless CSS vars)
- [ ] Accessibility: ARIA labels, keyboard nav
- [ ] Not generic/sloppy design — cohesive theme
- [ ] Matches current design system (Minimalist Mono)

---

## 🚫 Anti-Patterns

❌ Mutable state | ❌ Mixed UI/logic | ❌ `any` types  
❌ Inline styles | ❌ Class components | ❌ Generic aesthetics  
❌ Gradients/shadows | ❌ Multiple color sources | ❌ Inconsistent fonts

---

## 📖 References

- `.instructions.md` — Full workspace guide
- `src/utils/bingoLogic.ts` — Pure game logic
- `src/index.css` — CSS variables + animations (Minimalist Mono theme)
- `.github/instructions/frontend-design.instructions.md` — Design philosophy
- `.github/instructions/tailwind-4.instructions.md` — Tailwind v4

---

**Goal:** Exemplary AI-first development with polished, distinctive design and robust, tested code.

**Current Theme:** Minimalist Mono (B&W monospace, clean, professional, accessible)
