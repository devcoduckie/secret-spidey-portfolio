let element = document.body;
const toggleButton = document.querySelector("#toggle-button");
const defaultMode = "light-mode";

const peterParkerContent = {
  hero: `
    <h5>Hey, I'm</h5>
    <h1>Peter Parker</h1>
    <p>Scientist</p>
    <div id="hero__animation">
        <div id="hero__animation__img"></div>
    </div>
`,
  about: `
        <div class="cards">
            <div class="cards__content">
                <article>
                    <img src="./assets/icons/experience.png" alt="Experience" class="icon" />
                    <h2>Experience</h2>
                    <p>
                        5+ Years <br />
                        Lab
                        Experience
                    </p>
                </article>
                <p class="cards__content__text">
                    Currently working as a Research Assistant at Octavius Industries.
                </p>
            </div>
            <div class="cards__content">
                <article>
                    <img src="./assets/icons/education.png" alt="Education Icon" class="icon" />
                    <h2>Education</h2>
                    <p>BSc. Biophysics <br />Empire State University</p>
                </article>
                <p class="cards__content__text">
                    When I'm not at the lab, I'm a freelance photographer for the Daily Bugle! Check out my photos bottom left!
                </p>
            </div>
        </div>
    `,
  experience: `          <div class="cards experience">
  <article class="experience__skill">
    <h2>Lab Skills</h2>
    <div>
      <img
        src="./assets/icons/checkmark.png"
        alt="Checkmark icon"
        class="icon"
      />
      <div>
        <h2>Molecular Biology</h2>
        <p>Experienced</p>
      </div>
    </div>
    <div>
      <img
        src="./assets/icons/checkmark.png"
        alt="Checkmark icon"
        class="icon"
      />
      <div>
        <h2>Data Collection</h2>
        <p>Experienced</p>
      </div>
    </div>
    <div>
      <img
        src="./assets/icons/checkmark.png"
        alt="Checkmark icon"
        class="icon"
      />
      <div>
        <h2>Data Analysis</h2>
        <p>Experienced</p>
      </div>
    </div>
    <div>
      <img
        src="./assets/icons/checkmark.png"
        alt="Checkmark icon"
        class="icon"
      />
      <div>
        <h2>Lab Equipment</h2>
        <p>Familiar</p>
      </div>
    </div>
  </article>
  <article class="experience__skill">
    <h2>Photography</h2>
    <div>
      <img
        src="./assets/icons/checkmark.png"
        alt="Checkmark icon"
        class="icon"
      />
      <div>
        <h2>Photoshop</h2>
        <p>Intermediate</p>
      </div>
    </div>
    <div>
      <img
        src="./assets/icons/checkmark.png"
        alt="Checkmark icon"
        class="icon"
      />
      <div>
        <h2>Lightroom</h2>
        <p>Advanced</p>
      </div>
    </div>
    <div>
      <img
        src="./assets/icons/checkmark.png"
        alt="Checkmark icon"
        class="icon"
      />
      <div>
        <h2>Framing</h2>
        <p>Intermediate</p>
      </div>
    </div>
    <div>
      <img
        src="./assets/icons/checkmark.png"
        alt="Checkmark icon"
        class="icon"
      />
      <div>
        <h2>Action Photography</h2>
        <p>Experienced</p>
      </div>
    </div>
  </article>
</div>`,
  projects: `<div id="grid__bl__content__projects">
  <div class="project p-1">
    <img
    src="assets/photos/photo-1.png"
      alt="Project 1"
      class="project__img project-1"
    />
    <h2 class="project__title">Jan.18 Front Page</h2>
    <button
      class="btn"
      onclick="window.location.href=#"
    >
      Link
    </button>
    <button
      class="btn"
      onclick="window.location.href=#"
    >
      Daily Bugle
    </button>
  </div>
  <div class="project p-2">
    <img
      src="assets/photos/photo-2.png"
      alt="Project 2"
      class="project__img project-2"
    />
    <h2 class="project__title">Feb.15 Front Page</h2>
    <button
      class="btn"
      onclick="window.location.href=#"
    >
      Link
    </button>
    <button
      class="btn"
      onclick="window.location.href=#"
    >
      Daily Bugle
    </button>
  </div>
  <div class="project p-3">
    <img
      src="assets/photos/photo-3.png"
      alt="Project 3"
      class="project__img project-3"
    />
    <h2 class="project__title">Apr.25 Front Page</h2>
    <button
      class="btn"
      onclick="window.location.href=#"
    >
      Link
    </button>
    <button
      class="btn"
      onclick="window.location.href=#"
    >
      Daily Bugle
    </button>
  </div>
  <button class="arrow" onclick="navigateProject(-1)">
    &#10094;
  </button>
  <button class="arrow" onclick="navigateProject(1)">&#10095;</button>
</div>`,
  contact: `          <h5 class="contact-text">Get In Touch</h5>
  <h2 class="contact-text">Contact Me</h2>
  <div>
    <button
      class="btn btn-contact"
      onclick="window.location.href=#"
    >
      Email
    </button>
    <button
      class="btn btn-contact"
      onclick="window.location.href='#'"
    >
      LinkedIn
    </button>
  </div>`,
};

const spidermanContent = {
  hero: `
    <h5>Your friendly neighborhood</h5>
    <h1>Spider-Man</h1>
    <p>Superhero</p>
    <div id="hero__animation">
        <div id="hero__animation__img"></div>
    </div>
`,
  about: `
        <div class="cards">
            <div class="cards__content">
                <article>
                    <img src="./assets/icons/experience.png" alt="Experience" class="icon" />
                    <h2>Experience</h2>
                    <p>
                        6+ Years <br />
                        Crime-fighting <br />
                        Experience
                    </p>
                </article>
                <p class="cards__content__text">
                    Fighting bad guys by night. <br /> Helping grandmas cross the street by day.
                </p>
            </div>
            <div class="cards__content">
                <article>
                    <img src="./assets/icons/education.png" alt="Education Icon" class="icon" />
                    <h2>Education</h2>
                    <p>The streets of <br />NEW YORK CITY</p>
                </article>
                <p class="cards__content__text">
                  All in a days work...
                </p>
            </div>
        </div>
    `,
  experience: `          <div class="cards experience">
  <article class="experience__skill">
    <h2>Crimefighting Skills</h2>
    <div>
      <img
        src="./assets/icons/checkmark.png"
        alt="Checkmark icon"
        class="icon"
      />
      <div>
        <h2>Acrobatics</h2>
        <p>Experienced</p>
      </div>
    </div>
    <div>
      <img
        src="./assets/icons/checkmark.png"
        alt="Checkmark icon"
        class="icon"
      />
      <div>
        <h2>Punching</h2>
        <p>Experienced</p>
      </div>
    </div>
    <div>
      <img
        src="./assets/icons/checkmark.png"
        alt="Checkmark icon"
        class="icon"
      />
      <div>
        <h2>Reflexes</h2>
        <p>Legendary</p>
      </div>
    </div>
    <div>
      <img
        src="./assets/icons/checkmark.png"
        alt="Checkmark icon"
        class="icon"
      />
      <div>
        <h2>Web-Shooting</h2>
        <p>Intermediate</p>
      </div>
    </div>
  </article>
  <article class="experience__skill">
    <h2>Villians Defeated</h2>
    <div>
      <img
        src="./assets/icons/checkmark.png"
        alt="Checkmark icon"
        class="icon"
      />
      <div>
        <h2>Rhino</h2>
        <p>Back to the zoo he goes!</p>
      </div>
    </div>
    <div>
      <img
        src="./assets/icons/checkmark.png"
        alt="Checkmark icon"
        class="icon"
      />
      <div>
        <h2>Kingpin</h2>
        <p>Bye bye!</p>
      </div>
    </div>
    <div>
      <img
        src="./assets/icons/checkmark.png"
        alt="Checkmark icon"
        class="icon"
      />
      <div>
        <h2>Mister Negative</h2>
        <p>You know it!</p>
      </div>
    </div>
    <div>
      <img
        src="./assets/icons/checkmark.png"
        alt="Checkmark icon"
        class="icon"
      />
      <div>
        <h2>Scorpion</h2>
        <p>Squashed!</p>
      </div>
    </div>
  </article>
</div>`,
  projects: `<div id="grid__bl__content__projects">
  <div class="project p-1">
    <img
    src="assets/photos/photo-1.png"
      alt="Project 1"
      class="project__img project-1"
    />
    <h2 class="project__title">Jan.18 Front Page</h2>
    <button
      class="btn"
      onclick="window.location.href=#"
    >
      Link
    </button>
    <button
      class="btn"
      onclick="window.location.href=#"
    >
      Daily Bugle
    </button>
  </div>
  <div class="project p-2">
    <img
      src="assets/photos/photo-2.png"
      alt="Project 2"
      class="project__img project-2"
    />
    <h2 class="project__title">Feb.15 Front Page</h2>
    <button
      class="btn"
      onclick="window.location.href=#"
    >
      Link
    </button>
    <button
      class="btn"
      onclick="window.location.href=#"
    >
      Daily Bugle
    </button>
  </div>
  <div class="project p-3">
    <img
      src="assets/photos/photo-3.png"
      alt="Project 3"
      class="project__img project-3"
    />
    <h2 class="project__title">Apr.25 Front Page</h2>
    <button
      class="btn"
      onclick="window.location.href=#"
    >
      Link
    </button>
    <button
      class="btn"
      onclick="window.location.href=#"
    >
      Daily Bugle
    </button>
  </div>
  <button class="arrow" onclick="navigateProject(-1)">
    &#10094;
  </button>
  <button class="arrow" onclick="navigateProject(1)">&#10095;</button>
</div>`,
  contact: `          <h5 class="contact-text">Contact me?</h5>
  <h2 class="contact-text">Nice Try...</h2>
  <div>
    <button
      class="btn btn-contact"
      onclick="window.location.href=#"
    >
      Email
    </button>
    <button
      class="btn btn-contact"
      onclick="window.location.href=#"
    >
      LinkedIn
    </button>
  </div>`,
};

// Load light mode as default
function loadLightMode() {
  element.classList.add(defaultMode);
  updateToggleButton();

  switchToPeterParkerMode();
}

loadLightMode();

// Updating current mode selected
function saveToggleMode() {
  const currentMode = element.classList.contains("spidey-mode")
    ? "light-mode"
    : "spidey-mode";
  element.classList.remove("light-mode", "spidey-mode");
  element.classList.add(currentMode);
  updateToggleButton();

  if (currentMode === "spidey-mode") {
    switchToSpidermanMode();
  } else {
    switchToPeterParkerMode();
  }
}

function updateToggleButton() {
  if (element.classList.contains("spidey-mode")) {
    toggleButton.style.backgroundImage = "var(--spidey-icon)";
  } else {
    toggleButton.style.backgroundImage = "var(--sun)";
  }
}

function switchToPeterParkerMode() {
  const heroSection = document.getElementById("hero");
  heroSection.innerHTML = peterParkerContent.hero;
  const aboutSection = document.getElementById("grid__tl__content");
  aboutSection.innerHTML = peterParkerContent.about;
  const experienceSection = document.getElementById("grid__tr__content");
  experienceSection.innerHTML = peterParkerContent.experience;
  const projectsSection = document.getElementById("grid__bl__content");
  projectsSection.innerHTML = peterParkerContent.projects;
  const contactSection = document.getElementById("grid__br__content");
  contactSection.innerHTML = peterParkerContent.contact;
}

function switchToSpidermanMode() {
  const heroSection = document.getElementById("hero");
  heroSection.innerHTML = spidermanContent.hero;
  const aboutSection = document.getElementById("grid__tl__content");
  aboutSection.innerHTML = spidermanContent.about;
  const experienceSection = document.getElementById("grid__tr__content");
  experienceSection.innerHTML = spidermanContent.experience;
  const projectsSection = document.getElementById("grid__bl__content");
  projectsSection.innerHTML = spidermanContent.projects;
  const contactSection = document.getElementById("grid__br__content");
  contactSection.innerHTML = spidermanContent.contact;
}
