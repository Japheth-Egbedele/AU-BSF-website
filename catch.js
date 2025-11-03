const profiles = document.querySelectorAll(".profile");
const nameBox = document.getElementById("name");
const quoteBox = document.getElementById("quote");

profiles.forEach(profile => {
  profile.addEventListener("click", () => {
    
    // Remove active border from all
    profiles.forEach(p => p.classList.remove("active"));
    
    // Add to selected
    profile.classList.add("active");

    // Update text
    nameBox.textContent = profile.dataset.name;
    quoteBox.textContent = `"${profile.dataset.quote}"`;
  });
});
