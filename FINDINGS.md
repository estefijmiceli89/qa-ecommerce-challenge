# Usability & Functional Improvement Suggestions

This document highlights key areas for enhancement based on observed behaviors and user flow limitations during testing.

---

### 1. CVV Field Accepts Letters

- **Issue**: The CVV input field allows users to type letters, even though the validation expects digits only.
- **Impact**: This may confuse users or result in failed form submissions.
- **Suggestion**: Add input restrictions (`inputMode="numeric"`, pattern enforcement, or character filtering) to prevent non-digit characters at the input level.

---

### 2. No User Feedback on Successful Profile Save

- **Issue**: After updating and saving profile details, there is no toast, modal, or message confirming success.
- **Impact**: Users may be unsure whether their changes were successfully saved.
- **Suggestion**: Add a confirmation message (e.g., toast notification) after saving to reassure the user and improve UX.

---

### 3. Local Storage Data Not Persisted

- **Issue**: When the user refreshes or reopens the app, all in-progress data (cart, address, profile) is lost.
- **Impact**: Users must restart the entire purchase process, which is frustrating and inefficient.
- **Suggestion**: Persist cart and form data to `localStorage` or `sessionStorage`, and load it automatically if available on app init.
