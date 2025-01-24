<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      lastScrollTop: 0,
      menuVisible: true,
      scrollListeners: [] as Array<() => void>,
    };
  },
  methods: {
    handleScroll() {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.menuVisible = currentScrollTop <= this.lastScrollTop;
      this.lastScrollTop = Math.max(currentScrollTop, 0);
    },
    setupSmoothScrolling() {
      const links = document.querySelectorAll<HTMLAnchorElement>('nav ul li a');
      if (!links.length) {
        console.warn('No navigation links found for smooth scrolling.');
        return;
      }
    }
  },
  mounted() {
    this.setupSmoothScrolling();
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    this.scrollListeners.forEach((cleanup) => cleanup());
  },
});
</script>

<template>
  <div class="menu" :class="{ hidden: !menuVisible }">
    <img src="../assets/logo.png" class="logo-img">
    <nav>
      <ul>
        <li><router-link class="menu-item" to="/">Home</router-link></li>
        <li><router-link class="menu-item" to="/about">About</router-link></li>
        <li><router-link class="menu-item" to="/services">Services</router-link></li>
        <li><router-link class="menu-item" to="/portfolio">Portfolio</router-link></li>
      </ul>
    </nav>
    <div>
      <button class="contact-btn">Contact</button>
    </div>
  </div>
</template>

<style>
.menu {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  position: fixed;
  top: 0px; 
  width: 100%;
  transition: top 0.4s ease;
  box-sizing: border-box;
}

.menu.hidden {
  top: -100px; /* Adjust this value according to your menu height */
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

.logo-img {
  width: 60px;
}

nav {
  flex-grow: 1;
  text-align: center;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin: 0 15px;
}

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
</style>
