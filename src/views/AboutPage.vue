<template>
  <section id="about" class="about-me-section">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2 class="section-title">{{ $t('about_me') }}</h2>
          <p>{{ t('about_me_information_1') }}</p>
          <p>{{ t('about_me_information_2') }}</p>
          <p>{{ t('about_me_information_3') }}</p>
        </div>
        <div class="about-image">
          <img :src="profileImage" alt="Katrina Rosales" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'AboutMe',
  setup() {
    const { t } = useI18n();

    const profileImage = ref(process.env.BASE_URL + 'img/images/profileImg.jpg');

    return {
      t,
      profileImage,
    };
  },
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
  overflow: hidden;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.about-image img {
  max-width: 50%;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
}

.about-image img:hover {
  transform: scale(1.05);
  filter: brightness(1.1);
}

@media (max-width: 768px) {
  .about-image {
    padding: 10px;
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
