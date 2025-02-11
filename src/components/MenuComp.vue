<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import MessageComp from './MessageComp.vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'MenuComp',
  components: {
    MessageComp,
  },
  setup() {
    const { locale, t } = useI18n();

    const showModal = ref(false);
    const menuVisible = ref(true);
    const mobileMenuOpen = ref(false);
    const isMobile = ref(window.innerWidth < 768);

    const changeLanguage = (lang: string) => {
      locale.value = lang;
    };

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value;
    };

    const handleResize = () => {
      isMobile.value = window.innerWidth < 768;
      if (!isMobile.value) {
        mobileMenuOpen.value = false;
      }
    };

    const closeMobileMenuOnLinkClick = () => {
      if (isMobile.value) {
        mobileMenuOpen.value = false;
      }
    };

    onMounted(() => {
      handleResize();
      window.addEventListener('resize', handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
    });

    return {
      showModal,
      menuVisible,
      mobileMenuOpen,
      isMobile,
      changeLanguage,
      toggleMobileMenu,
      handleResize,
      closeMobileMenuOnLinkClick,
      t,
    };
  },
});
</script>

<template>
  <div class="menu" :class="{ hidden: !menuVisible }">
    <img src="../assets/logo.png" class="logo-img">

    <button class="mobile-menu-toggle" @click="toggleMobileMenu" v-if="isMobile">☰</button>

    <nav :class="{ open: mobileMenuOpen || !isMobile }">
      <ul>
        <li>
          <router-link class="menu-item" to="/" @click="closeMobileMenuOnLinkClick">{{ t('home') }}</router-link>
        </li>
        <li>
          <router-link class="menu-item" to="/about" @click="closeMobileMenuOnLinkClick">{{ t('about') }}</router-link>
        </li>
        <li>
          <router-link class="menu-item" to="/services" @click="closeMobileMenuOnLinkClick">{{ t('services') }}</router-link>
        </li>
        <li>
          <router-link class="menu-item" to="/portfolio" @click="closeMobileMenuOnLinkClick">{{ t('portfolio') }}</router-link>
        </li>
      </ul>
    </nav>
    <div>
      <button class="contact-btn" @click="showModal = true">{{ t('contact') }}</button>
    </div>
  </div>

  <Teleport to="body">
    <MessageComp :show="showModal" @close="showModal = false"/>
  </Teleport>
</template>

<style>
/* Base Menu Styles */
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  transition: top 0.4s ease;
  z-index: 1000;
  box-sizing: border-box;
}

.menu.hidden {
  top: -100px;
}

.logo-img {
  width: 60px;
}

nav {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin: 0 15px;
}

.menu-item {
  padding: 10px;
  text-decoration: none;
  color: #fff;
}

.menu-item:hover {
  color: #fffa76;
  border-bottom: 2px solid #fffa76;
}

/* Contact Button */
.contact-btn {
  padding: 10px 20px;
  color: #000;
  border: none;
  border-radius: 5px;
  background: #fffa76;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-btn:hover {
  transform: scale(1.1);
}

/* Mobile Menu */
.mobile-menu-toggle {
  display: none; /* Hidden by default (only visible on mobile) */
  background: none;
  border: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: block;
  }

  nav {
    transition: max-height 0.3s ease-in-out;
    max-height: 0;
    overflow: hidden;
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: #000;
    z-index: 1000;
  }

  nav.open {
    display: flex;
    max-height: 300px;
  }

  nav ul {
    flex-direction: column;
    padding: 10px;
  }

  nav ul li {
    margin: 10px 0;
  }
}

</style>
