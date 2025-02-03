<template>
  <div id="app">
    <MessageComponent 
      message="This is a success message!" 
      type="success" 
      :closable="true" 
    />
    <MessageComponent 
      message="This is an error message!" 
      type="error" 
      :closable="true" 
    />
    <MessageComponent 
      message="This is an info message!" 
      type="info" 
    />
  </div>
  <section id="about" class="about-me-section">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2 class="section-title">About Me</h2>
          <p>
            Hello, I’m <span class="highlight">Katrina Rosales</span>, a passionate and experienced web developer with over six years of expertise in crafting seamless and user-focused applications. I specialize in building robust backend systems with .NET and creating dynamic frontend experiences using React and Angular.
          </p>
          <p>
            I’m committed to turning innovative ideas into functional, modern solutions that provide real value to businesses. My approach is methodical, focused, and collaborative—ensuring that every project delivers a superior user experience.
          </p>
          <ul class="skills-list">
            <li><strong>Technical Mastery:</strong> .NET Core, REST APIs, ReactJS, Angular, VueJS, TypeScript, SQL databases.</li>
            <li><strong>UX/UI Expertise:</strong> Adobe XD, Figma, and creating intuitive user-friendly designs.</li>
            <li><strong>Agile Collaboration:</strong> Thrives in teamwork and continuous learning environments.</li>
            <li><strong>DevOps & Accessibility:</strong> Skilled in Azure DevOps, Docker, and WCAG 2.0 compliance.</li>
          </ul>
          <p>
            Let’s create something innovative together! I’m always excited to work with clients who value quality and cutting-edge technology.
          </p>
        </div>
        <div class="about-image">
          <img :src="profileImage" alt="Katrina Rosales" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutMe',
  data() {
    return {
      profileImage: process.env.BASE_URL + 'img/images/profileImg.jpg'
    };
  }
});
</script>

<style scoped>
.about-me-section {
  padding: 80px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.about-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
}

.about-text {
  flex: 1;
  text-align: left;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fff;
}

p {
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #555;
}

.highlight {
  color: #0077ff;
  font-weight: bold;
}

.skills-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.skills-list li {
  font-size: 1rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.skills-list li::before {
  content: "✔";
  color: #0077ff;
  font-weight: bold;
}

.about-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Ensures that any overflow is hidden */
  border-radius: 15px; /* Slightly larger border radius for a softer look */
  padding: 20px; /* Add some padding around the image */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Softer shadow for depth */
}

.about-image img {
  max-width: 50%;
  border-radius: 15px; /* Match the border radius of the container */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Softer shadow */
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out; /* Add filter transition */
}

.about-image img:hover {
  transform: scale(1.05);
  filter: brightness(1.1); /* Slightly brighten the image on hover */
}

@media (max-width: 768px) {
  .about-image {
    padding: 10px; /* Reduce padding on smaller screens */
  }
  .about-content {
    flex-direction: column;
    text-align: center;
  }

  .about-text {
    text-align: center;
  }
}
</style>
