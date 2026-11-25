# Prompt Log — Barangay Clean-Up Schedule

## Prompt 1 — FR-01: Manage Clean-Up Schedules

**Tool:** GitHub Copilot Agent Mode (VS Code)

**Purpose:** Implement the main clean-up schedule management functionality.

**Prompt:**
I am building a community web app called Barangay Clean-Up Schedule for our barangay residents and clean-up organizers. The app should allow organizers to add clean-up activities with an activity name, date, time, location, and description. Users should be able to view the schedules on the dashboard. Required fields must not be empty, invalid or past dates should be rejected, and schedules should be saved in localStorage so they remain after refreshing the page. Please review my existing project files first, make only the necessary changes, and explain how I can test the feature.

**Result:** The existing application provides clean-up schedule management functionality.

---

## Prompt 2 — FR-02: Search Clean-Up Schedules

**Tool:** GitHub Copilot Agent Mode (VS Code)

**Purpose:** Add a search feature to the existing application.

**Prompt:**
I am working on my Lab 1 community web app called Barangay Clean-Up Schedule. It is built using HTML, CSS, JavaScript, and localStorage.

I already have a working application with features to add, display, edit, and delete clean-up schedules.

I want to add my second feature, FR-02: Search Clean-Up Schedules.

Allow users to search schedules by activity name or location. The search should update the displayed schedules as the user types. Do not delete or modify existing schedule data in localStorage. Keep the existing design and functionality.

Review my existing files first. Make only the necessary changes. After implementing the feature, explain which files you modified and how I can test the search functionality. Do not rebuild the application or add unnecessary features.

**Result:** A search feature was added to allow users to find clean-up schedules by activity name or location. The feature was tested using activity-name search, location search, partial-word search, no-match search, clearing the search, and searching for newly added schedules.