# Barangay Clean-Up Schedule

## 1. Project Overview

**App Name:** Barangay Clean-Up Schedule  
**Community:** Barangay Community  
**Target Users:** Barangay residents and clean-up organizers

Barangay Clean-Up Schedule is a small community web application designed to help organize and keep track of community clean-up activities. It provides a simple dashboard where organizers can manage schedules and residents can easily view upcoming clean-up activities.

The application is built as a single-page web app using HTML, CSS, and JavaScript. It uses browser localStorage to save schedule information without requiring a server, login system, or database.

## 2. Community Problem

In our barangay community, residents and clean-up organizers struggle to keep track of scheduled community clean-up activities because announcements may be shared through different informal channels, making schedules easy to miss or forget.

A web page where barangay organizers can manage clean-up schedules and residents can view upcoming activities would help make community clean-up events easier to organize, track, and participate in.

## 3. Problem Statement

In our barangay community, residents and clean-up organizers struggle to keep track of scheduled community clean-up activities because announcements may be shared through different informal channels, making the schedules easy to miss or forget.

A web page where organizers can add and manage clean-up schedules and residents can view the activities would help improve community awareness and participation.

## 4. Functional Requirement (FR-01)

### FR-01: Manage Clean-Up Schedules

Barangay clean-up organizers can add a clean-up schedule containing the following information:

- Activity name
- Date
- Time
- Location
- Description

## 5. Acceptance Criteria

The FR-01 feature is considered successful when:

1. The user can add a clean-up schedule by entering the activity name, date, time, location, and description.
2. The system rejects submissions with required fields left blank.
3. The system rejects invalid schedule data, including past dates.
4. Successfully added schedules appear on the dashboard.
5. Schedules remain saved after refreshing the browser using localStorage.

## 6. Functional Requirement (FR-02)

### FR-02: Search Clean-Up Schedules

Users can search for clean-up schedules using the activity name or location.

Acceptance criteria:

1. Users can search schedules by activity name or location.
2. The displayed schedules update as the user types.
3. Searching does not modify or delete saved schedule data.
4. Clearing the search field restores the full schedule list.

## 7. Objectives

- Organize barangay clean-up activities.
- Make scheduled cleaning activities easier to view and manage.
- Encourage community involvement in maintaining a clean environment.
- Provide a simple and user-friendly interface.
- Help residents find relevant clean-up schedules quickly.

## 8. Features

- Dashboard for viewing clean-up schedules.
- Adding new clean-up activities.
- Editing and updating schedules.
- Deleting schedules.
- Displaying schedule statistics and counts.
- Navigation between application sections.
- Searching schedules by activity name or location.
- Saving schedule data using browser localStorage.

## 9. Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Webpage structure |
| CSS3 | Design and layout |
| JavaScript | Application functionality |
| localStorage | Browser-based data storage |
| Git | Version control |
| GitHub | Source code hosting |
| GitHub Pages | Website deployment |

## 10. How to Run

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` using a web browser.
4. Use the dashboard to manage clean-up schedules.

## 11. Live Website

[Barangay Clean-Up Schedule – Live Website](https://jericacabalida347-creator.github.io/Barangay-Clean-Up-Schedule/)

## 12. GitHub Repository

[Barangay Clean-Up Schedule – GitHub Repository](https://github.com/jericacabalida347-creator/Barangay-Clean-Up-Schedule)

## 13. Testing

Functional testing was performed on the application.

### FR-01: Manage Clean-Up Schedules

The following functions were tested:

- Adding a clean-up schedule
- Displaying schedules
- Editing schedules
- Deleting schedules
- Dashboard statistics
- Navigation and buttons

### FR-02: Search Clean-Up Schedules

The following search scenarios were tested:

- Searching by activity name
- Searching by location
- Searching using partial words
- Checking search results when no match is found
- Clearing the search field to restore all schedules
- Searching for newly added schedules

The developer reported that all listed tests passed.

## 14. Privacy and Test Data

This project uses made-up sample data for testing. No real personal information is needed. Schedule data is stored locally in the browser using localStorage.

## 15. Developer

**Developer:** Jerica Cabalida

**Project:** Barangay Clean-Up Schedule

**Version:** v0.1.0