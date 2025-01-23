<script setup>
document.addEventListener('DOMContentLoaded', () => {
    let lastScrollY = window.scrollY; // Initial scroll position
    const menu = document.querySelector('.menu');

    if (menu) { // Check if menu exists
        menu.classList.add('visible');

        window.addEventListener('scroll', () => {
            if (window.scrollY < lastScrollY) {
                // Scrolling up
                menu.classList.add('visible');
            } else {
                // Scrolling down
                menu.classList.remove('visible');
            }
            lastScrollY = window.scrollY; // Update the last scroll position
        });
    } else {
        console.error("Menu element not found");
    }
});
</script>
<template>
    <div class="menu">
        <img src="../assets/logo.png" class="logo-img">
        <nav>
            <ul>
                <li><a class="menu-item" href="#home-header">Home</a></li>
                <li><a class="menu-item" href="#about">About</a></li>
                <li><a class="menu-item" href="#services-section">Services</a></li>
                <li><a class="menu-item" href="#portfolio">Portfolio</a></li>
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
    top: -100px; 
    width: 100%;
    transition: top 0.4s ease;
    box-sizing: border-box;
}

.menu.visible {
    top: 0;
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