
/* =========================
   LOAD SAVED DATA
========================= */
let activities = JSON.parse(localStorage.getItem("cleanUpActivities")) || [];

const activityForm = document.getElementById("activityForm");
const activitiesList = document.getElementById("activitiesList");
const upcomingList = document.getElementById("upcomingList");
const activitySearch = document.getElementById("activitySearch");

/* =========================
   SAVE DATA
========================= */
function saveActivities() {
    localStorage.setItem("cleanUpActivities", JSON.stringify(activities));
}

/* =========================
   ESCAPE HTML
========================= */
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function(char) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char];
    });
}

/* =========================
   DATE HELPERS
========================= */

// Get today's date in YYYY-MM-DD format
function getToday() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

// Format date for display
function formatDate(dateString) {
    const parts = dateString.split("-");

    const date = new Date(
        Number(parts[0]),
        Number(parts[1]) - 1,
        Number(parts[2])
    );

    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}

// Get month name
function getMonth(dateString) {
    const parts = dateString.split("-");
    const date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));

    return date.toLocaleDateString("en-US", {
        month: "short"
    });
}

// Get day number
function getDay(dateString) {
    return date.split("-")[2];
}

// Format time
function formatTime(timeString) {
    const parts = timeString.split(":");
    const date = new Date();
    date.setHours(Number(parts[0]), Number(parts[1]), 0, 0);

    return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit"
    });
}

/* =========================
   UPDATE DASHBOARD COUNTERS
========================= */
function updateCounters() {
    const today = getToday();

    const upcoming = activities.filter(function(activity) {
        return activity.date >= today;
    });

    const past = activities.filter(function(activity) {
        return activity.date < today;
    });

    document.getElementById("totalActivities").textContent = activities.length;
    document.getElementById("upcomingActivities").textContent = upcoming.length;
    document.getElementById("pastActivities").textContent = past.length;

    document.getElementById("activityCount").textContent =
        activities.length + (activities.length === 1
            ? " activity"
            : " activities");
}

/* =========================
   DISPLAY UPCOMING ACTIVITIES
========================= */
function displayUpcoming() {
    upcomingList.innerHTML = "";

    const today = getToday();

    const upcoming = activities
        .filter(activity => activity.date >= today)
        .sort(function(a, b) {
            return (a.date + a.time).localeCompare(b.date + b.time);
        });

    if (upcoming.length === 0) {
        upcomingList.innerHTML = `
            <p class="empty-message">
                No upcoming clean-up activities.
                Add a new activity to get started!
            </p>
        `;
        return;
    }

    // Show only the first 6 upcoming activities
    upcoming.slice(0, 6).forEach(function(activity) {
        const card = document.createElement("div");
        card.className = "upcoming-card";

        card.innerHTML = `
            <h3>${escapeHTML(activity.name)}</h3>

            <div class="date-badge">
                <div class="date-box">
                    <span class="day">${escapeHTML(getDay(activity.date))}</span>
                    <span class="month">${escapeHTML(getMonth(activity.date))}</span>
                </div>

                <div class="date-info">
                    ${escapeHTML(formatDate(activity.date))}<br>
                    ${escapeHTML(formatTime(activity.time))}
                </div>
            </div>

            <div class="upcoming-details">
                <p>📍 ${escapeHTML(activity.location)}</p>
            </div>

            <p class="upcoming-description">
                ${escapeHTML(activity.description)}
            </p>
        `;

        upcomingList.appendChild(card);
    });
}

/* =========================
   DISPLAY ALL ACTIVITIES
========================= */
function displayActivities() {
    activitiesList.innerHTML = "";

    const searchTerm = activitySearch.value.trim().toLowerCase();
    const sortedActivities = [...activities]
        .filter(function(activity) {
            return activity.name.toLowerCase().includes(searchTerm) ||
                activity.location.toLowerCase().includes(searchTerm);
        })
        .sort(function(a, b) {
            return (a.date + a.time).localeCompare(b.date + b.time);
        });

    if (sortedActivities.length === 0) {
        activitiesList.innerHTML = activities.length === 0
            ? `
                <p class="empty-message">
                    No activities added yet. Create your first clean-up schedule!
                </p>
            `
            : `
                <p class="empty-message">
                    No activities match your search.
                </p>
            `;
        updateCounters();
        displayUpcoming();
        return;
    }

    sortedActivities.forEach(function(activity) {
        const card = document.createElement("div");
        card.className = "activity-card";

        card.innerHTML = `
            <h3>${escapeHTML(activity.name)}</h3>

            <p><strong>📍 Location:</strong> ${escapeHTML(activity.location)}</p>
            <p><strong>📅 Date:</strong> ${escapeHTML(formatDate(activity.date))}</p>
            <p><strong>⏰ Time:</strong> ${escapeHTML(formatTime(activity.time))}</p>
            <p><strong>📝 Description:</strong> ${escapeHTML(activity.description)}</p>

            <div class="activity-actions">
                <button class="edit-btn" onclick="editActivity('${activity.id}')">
                    Edit
                </button>

                <button class="delete-btn" onclick="deleteActivity('${activity.id}')">
                    Delete
                </button>
            </div>
        `;

        activitiesList.appendChild(card);
    });

    updateCounters();
    displayUpcoming();
}

activitySearch.addEventListener("input", displayActivities);

/* =========================
   ADD OR UPDATE ACTIVITY
========================= */
activityForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const editId = document.getElementById("editId").value;

    const activity = {
        id: editId || Date.now().toString(),
        name: document.getElementById("activityName").value.trim(),
        location: document.getElementById("location").value.trim(),
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        description: document.getElementById("description").value.trim()
    };

    if (editId) {
        // Update existing activity
        activities = activities.map(function(item) {
            return item.id === editId ? activity : item;
        });
    } else {
        // Add new activity
        activities.push(activity);
    }

    saveActivities();
    displayActivities();
    resetForm();

    // Scroll to activities after saving
    document.getElementById("upcoming").scrollIntoView({
        behavior: "smooth"
    });
});

/* =========================
   EDIT ACTIVITY
========================= */
function editActivity(id) {
    const activity = activities.find(function(item) {
        return item.id === id;
    });

    if (!activity) return;

    document.getElementById("editId").value = activity.id;
    document.getElementById("activityName").value = activity.name;
    document.getElementById("location").value = activity.location;
    document.getElementById("date").value = activity.date;
    document.getElementById("time").value = activity.time;
    document.getElementById("description").value = activity.description;

    document.getElementById("formTitle").textContent = "Edit Clean-Up Activity";
    document.getElementById("submitBtn").textContent = "Update Activity";
    document.getElementById("cancelBtn").hidden = false;

    document.getElementById("manage").scrollIntoView({
        behavior: "smooth"
    });
}

/* =========================
   DELETE ACTIVITY
========================= */
function deleteActivity(id) {
    const confirmed = confirm("Are you sure you want to delete this activity?");

    if (!confirmed) return;

    activities = activities.filter(function(item) {
        return item.id !== id;
    });

    saveActivities();
    displayActivities();
}

/* =========================
   RESET FORM
========================= */
function resetForm() {
    activityForm.reset();

    document.getElementById("editId").value = "";
    document.getElementById("formTitle").textContent = "Add Clean-Up Activity";
    document.getElementById("submitBtn").textContent = "＋ Add Activity";
    document.getElementById("cancelBtn").hidden = true;
}

/* CANCEL EDIT */
document.getElementById("cancelBtn").addEventListener("click", resetForm);

/* =========================
   INITIAL LOAD
========================= */
displayActivities();
