<script lang="ts">
import { defineComponent, ref } from 'vue';
import MessageComp from './MessageComp.vue';

export default defineComponent({
  data() {
    return {
      showModal: ref(false),
      lastScrollTop: 0,
      menuVisible: true,
      mobileMenuOpen: false,
      isMobile: window.innerWidth < 768, // Detect initial screen size
    };
  },
  components: {
    MessageComp,
  },
  methods: {
    handleScroll() {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.menuVisible = currentScrollTop <= this.lastScrollTop;
      this.lastScrollTop = Math.max(currentScrollTop, 0);
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    handleResize() {
      this.isMobile = window.innerWidth < 768;
      if (!this.isMobile) {
        this.mobileMenuOpen = false;
      }
    },
    closeMobileMenuOnLinkClick() {
      if (this.isMobile) {
        this.mobileMenuOpen = false;
      }
    },
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  },
});
</script>


<template>
  <div class="menu" :class="{ hidden: !menuVisible }">
    <img src="../assets/logo.png" class="logo-img">

    <button class="mobile-menu-toggle" @click="toggleMobileMenu" v-if="isMobile">☰</button>

    <nav :class="{ open: mobileMenuOpen || !isMobile }">
      <ul>
        <li><router-link class="menu-item" to="/">Home</router-link></li>
        <li><router-link class="menu-item" to="/about">About</router-link></li>
        <li><router-link class="menu-item" to="/services">Services</router-link></li>
        <li><router-link class="menu-item" to="/portfolio">Portfolio</router-link></li>
      </ul>
    </nav>
    <div>
      <button class="contact-btn" @click="showModal = true">Contact</button>
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
