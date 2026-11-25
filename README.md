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

**FR-01: Manage Clean-Up Schedules**

Barangay clean-up organizers can add a clean-up schedule containing the activity name, date, time, location, and description.

## 5. Acceptance Criteria

1. The user can add a clean-up schedule by entering the activity name, date, time, location, and description.
2. The system rejects submissions with required fields left blank.
3. The system rejects invalid schedule data, including past dates.
4. Successfully added schedules appear on the dashboard.
5. Schedules remain saved after refreshing the browser using localStorage.

### FR-02: Search Clean-Up Schedules

1. Users can search schedules by activity name or location.
2. The displayed schedules update as the user types, without changing saved data.
3. Clearing the search restores the full schedule list.

## 6. Objectives

- Organize barangay clean-up activities.
- Make scheduled cleaning activities easier to view and manage.
- Encourage community involvement in maintaining a clean environment.
- Provide a simple and user-friendly interface.

## 7. Features

- Dashboard for viewing clean-up schedules.
- Adding new clean-up activities.
- Editing and updating schedules.
- Deleting schedules.
- Displaying schedule statistics and counts.
- Navigation between application sections.
- Searching schedules by activity name or location.
- Saving schedule data using browser localStorage.

## 8. Technologies Used

- HTML5 – webpage structure
- CSS3 – design and layout
- JavaScript – app functionality
- localStorage – browser-based data storage
- Git – version control
- GitHub – source code hosting
- GitHub Pages – website deployment

## 9. How to Run

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` using a web browser.
4. Use the dashboard to manage clean-up schedules.

## 10. Live Website

https://jericacabalida347-creator.github.io/Barangay-Clean-Up-Schedule/

## 11. GitHub Repository

https://github.com/jericacabalida347-creator/Barangay-Clean-Up-Schedule

## 12. Testing

Functional testing was performed on the application.

Tested functions include:

- Adding a clean-up schedule
- Displaying schedules
- Editing schedules
- Deleting schedules
- Dashboard statistics
- Navigation and buttons

The reported test results were all passed.

## 13. Privacy and Test Data

This project uses made-up sample data for testing. No real personal information is needed. Schedule data is stored locally in the browser using localStorage.

## 14. Developer

Jerica Cabalida