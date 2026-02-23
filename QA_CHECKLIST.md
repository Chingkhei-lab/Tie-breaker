# PRE-SUBMISSION QA CHECKLIST
*Do not submit until all boxes are checked.*

## 1. Requirement Verification
- [ ] **Task List Audit:** Have we implemented EVERY task from the 6 PM list? (Even the small ones?)
- [ ] **Responsiveness:** Open Chrome DevTools (F12) -> Toggle Device Toolbar. Does the site look good on:
    - [ ] iPhone SE (Small mobile)
    - [ ] iPad Air (Tablet)
    - [ ] Desktop (1920x1080)
- [ ] **Console Errors:** Open Console. Are there any red errors? (Fix distinct `key` props and `class` vs `className`).

## 2. Build Verification
- [ ] **Production Build:** Run `npm run build` in the terminal.
    - *Success:* "Compiled successfully"
    - *Failure:* Fix any TypeScript/Linting errors immediately.
- [ ] **Start Production:** Run `npm start`. Click through every page to ensure it works in production mode (not just dev).

## 3. Submission Artifacts
- [ ] **Cleanup:** Remove `SYSTEM_PROMPT.md`, `QA_CHECKLIST.md`, and `node_modules` before zipping (if zipping).
- [ ] **README:** Create a `README.md` containing:
    - Project Name
    - "Top Submission for HaXplore'26 Tie-Breaker"
    - Setup Instructions (`npm install && npm run dev`)
    - List of Features Implemented
- [ ] **Hosting (If required):** specific URL (e.g. Vercel) is accessible in Incognito mode.
