const about = document.getElementById("about");
const abouts = document.getElementById("abouts");
const back = document.getElementById("back");

about.addEventListener('click', () => {
    abouts.style.display = "block"; // Show the section
    setTimeout(() => {
        abouts.classList.add('show'); // Add class to trigger transition
    }, 10); // Delay to ensure display is set before transition
});

back.addEventListener('click', () => {
    abouts.classList.remove('show'); // Remove class to move it out of view
    setTimeout(() => {
        abouts.style.display = "none"; // Hide after transition
    }, 500); // Match with the duration of the transition
});

const historyButton = document.getElementById("history");
const historys = document.getElementById("historys");

historyButton.addEventListener('click', () => {
    historys.style.display = "block"; // Show the section
    setTimeout(() => {
        historys.classList.add('show'); // Add class to trigger transition
    }, 10); // Delay to ensure display is set before transition
});

// Handle closing the section
const closeHistory = document.getElementById("closeHistory");

closeHistory.addEventListener('click', () => {
    historys.classList.remove('show'); // Remove class to move it out of view
    setTimeout(() => {
        historys.style.display = "none"; // Hide after transition
    }, 500); // Match with the duration of the transition
});
const achievementsButton = document.getElementById("ho");
const achievements = document.getElementById("achievements");

achievementsButton.addEventListener('click', () => {
    achievements.style.display = "block"; // Show the section
    setTimeout(() => {
        achievements.classList.add('show'); // Add class to trigger transition
    }, 10); // Delay to ensure display is set before transition
});

// Handle closing the achievements section
const closeAchievements = document.getElementById("closeAchievements");

closeAchievements.addEventListener('click', () => {
    achievements.classList.remove('show'); // Remove class to move it out of view
    setTimeout(() => {
        achievements.style.display = "none"; // Hide after transition
    }, 500); // Match with the duration of the transition
});
const contactButton = document.getElementById("contact");
const contacts = document.getElementById("contacts");

contactButton.addEventListener('click', () => {
    contacts.style.display = "block"; // Show the section
    setTimeout(() => {
        contacts.classList.add('show'); // Add class to trigger transition
    }, 10); // Delay to ensure display is set before transition
});

// Handle closing the contact section
const closeContact = document.getElementById("closeContact");

closeContact.addEventListener('click', () => {
    contacts.classList.remove('show'); // Remove class to move it out of view
    setTimeout(() => {
        contacts.style.display = "none"; // Hide after transition
    }, 500); // Match with the duration of the transition
});
