# Chess Click Tracker

A Vue 3 application that tracks and displays clicks on a chessboard, showing the history of clicked squares in algebraic notation.

Below are some technical decisions I made during development, where I had to choose between different approaches or interpret requirements.

## Installation and Setup

1. Extract the zip file

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at `http://localhost:5173`

## Running the Application

Start development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Running Tests

Run all tests:
```bash
npm run test:unit
```

Run tests with UI:
```bash
npm run test:unit:ui
```

## Technical Decisions

### Features & Functionality

**Only the last clicked square is highlighted**  
When requirement #7 mentioned showing the history in a component, I interpreted this as keeping the board clean. Highlighting all clicked squares with their order numbers would clutter the board visually, so only the most recent click is emphasized while the full history appears in the sidebar.

**Same square can be clicked multiple times**  
Since the requirements didn't specify this behavior, I allowed repeated clicks on the same square to be recorded in the history.

**Auto-scroll in history table**  
Implemented automatic scrolling to keep the latest clicked square visible in the history list, improving user experience without requiring manual scrolling.

**Reset button added**  
Included a reset button to clear the click history without needing to reload the page.

**Header with instructions**  
Added a simple header explaining how to use the application, even though it wasn't explicitly required, to improve first-time user experience.

### Architecture & State Management

**No Pinia store used**  
The application state is simple and localized to a single view. Using composables provides sufficient state management without the overhead of a global store, keeping the solution lightweight and appropriate for the project's scope.

**Composables for reusable logic**  
Extracted logic into composables even when used in a single component. This centralizes business logic, improves testability, and makes future refactoring easier if components need to be split or reused.

**View layer separation**  
Even though the app is simple, I used a dedicated view component instead of putting everything in the app entry point. This keeps the SPA clean and makes it easier to add routes or additional views in the future.

**Atomic component design**  
Components are kept small and focused on a single responsibility, following the atomic design principle for better maintainability and reusability.

**Constants folder for static data**  
Created a dedicated constants folder for immutable values like the chessboard squares array. This separates configuration from logic and improves code organization.

### Performance Optimizations

**Static chessboard data**  
The chessboard squares array is computed once and exported as a constant. This prevents unnecessary recalculations on every render, improving performance.

### Testing

**Unit tests for business logic**  
Although not required, I added unit tests for composables and utilities using Vitest. This ensures the core logic (click history management, auto-scroll, coordinate conversion) works correctly and prevents regressions.

**Tests organized in dedicated folders**  
Test files are separated into dedicated folders alongside the code they test, keeping a clear distinction between source and test code.

### Styling

**SCSS with BEM methodology**  
Used SCSS for styling with BEM (Block Element Modifier) naming convention to maintain consistent, scalable, and maintainable CSS architecture.

## Built With

- Vue 3
- TypeScript
- Vite
- Vitest
- SCSS

---

**Developed by:** Mattia Giacchini  
**January 2026**