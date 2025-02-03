<template>
    <section id="home-header">
            <div class="slogan-container">
                <div class="slogan-text">
                    <h1><span style="color: #38b6ff;">&lt;p&gt;</span>Turning <b>visions</b> into virtual <b>reality</b><span style="color: #38b6ff;">&lt;/p&gt;</span></h1>
                    <div class="header-social">
                        <a href="https://www.linkedin.com/in/katrina-rosales-3baa00bb/" class="button">
                            <div class="icon">
                                <i class="fa fa-linkedin"></i>
                            </div>
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://www.instagram.com/katrinarosales.dev/" class="button">
                            <div class="icon">
                                <i class="fa fa-instagram"></i>
                            </div>
                            <span>Instagram</span>
                        </a>
                        <a href="https://www.youtube.com/@Cutiiepaii" class="button">
                            <div class="icon">
                                <li class="fa fa-youtube"></li>
                            </div>
                            <span>Youtube</span>
                        </a>
                        <a href="https://www.facebook.com/groups/118348288371722/" class="button">
                            <div class="icon">
                                <li class="fa fa-facebook"></li>
                            </div>
                            <span>Facebook</span>
                        </a>
                    </div>
                </div>
                <div class="slogan-image"></div>
            </div>
        </section>

        <section id="services-section">
            <div class="services-overview">
                <div class="service-card">
                    <h2>Professional<br>Web Development</h2>
                    <p>Create fast, responsive, and user-friendly websites using cutting-edge technologies to elevate your online presence.</p>
                </div>
                <div class="service-card">
                    <h2>Custom<br>E-commerce Solutions</h2>
                    <p>Build scalable online stores with seamless payment integrations and advanced features to boost your sales and customer engagement.</p>
                </div>
                <div class="service-card">
                    <h2>Innovative<br>UI/UX Design</h2>
                    <p>Deliver exceptional user experiences with visually stunning designs crafted using Figma, Adobe XD, and intuitive prototyping tools.</p>
                </div>
                <div class="service-card">
                    <h2>Reliable<br>Website Maintenance</h2>
                    <p>Keep your website secure, up-to-date, and optimized for peak performance with our dedicated maintenance and support services.</p>
                </div>                
            </div>
            <div class="services-container">
                <div class="services-info">
                    <h1>Customized Web Solutions</h1>
                    <div class="text-info">
                        <p>Transform your ideas into stunning, functional websites that achieve measurable results. From concept to completion, I deliver customized solutions that align with your goals.</p>
                        <p>Contact me for exceptional service that brings your ideas to life and takes your online presence to the next level.</p>
                        <button class="contact-btn" @click="showModal = true">Schedule a meeting with me</button>
                    </div>
                </div>
            </div>
        </section>

        <Teleport to="body">
            <MessageComp :show="showModal" @close="showModal = false"/>
        </Teleport>
</template>
<script setup>
import MessageComp from '../components/MessageComp.vue'
import { ref } from 'vue'

const showModal = ref(false);
</script>

<style>
#home-header {
    background-color: #000;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.slogan-image {
    flex: 1;
    background-image: url('/public/img/images/13.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; 
    justify-content: space-between;
    align-items: center;
    height: 600px;
}

.slogan-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: calc(100% - 35%);
    height: 100%;
}

.slogan-text {
    flex: 1;
    text-align: left;
    color: white;
}

.slogan-text h1 {
    font-size: 3.5rem;
    font-weight: normal;
}

.slogan-text .hire-btn {
    background-color: #38b6ff;
    color: #fff;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.6s ease, transform 0.5s ease;
}

.slogan-text .hire-btn:hover {
    background-color: #fffa76;
    color:#000;
    transform: scale(1.05);
}

.slogan-text .hire-btn:active {
    background-color: #fffa76;
    transform: scale(0.95);
}

.slogan-text .hire-btn:focus {
    outline: none;
    background-color: #fffa76;
    color: #000;
}

.header-social {
    display: flex;
    flex-direction:row;
    align-items: flex-start;
}

.header-social .button {
    display: inline-block;
    height: 30px;
    width: 30px;
    float: left;
    text-decoration: none;
    margin: 0 5px;
    overflow: hidden;
    background: #fff;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-out;
}

.header-social .button:hover {
    width: 130px;
    transform: scale(1.1);

}
.header-social .button .icon {
    display: inline-block;
    height: 30px;
    width: 30px;
    color: #000;
    text-align: center;
    border-radius: 25px;
    box-sizing: border-box;
    line-height: 30px;
    transition: all 0.3s ease-out;
}

.services-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 13%;
    margin-right: 13%;
}

.services-overview {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
}
.service-card {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    width: 300px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
}
.service-card h2 {
    
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #000;
}
.service-card p {
    font-size: 1em;
    color: #000;
}

.services-info {
    color: #fff;
    text-align: start;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.services-info h1{
    font-size: 100px;
    white-space: break-spaces;
    border-right: 1px solid #fff;
    margin-right: 10px;
}

.text-info {
    margin-left: 25px;
}

.fade-in-image {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.fade-in-image.visible {
    opacity: 1;
    transform: translateY(0);
}
</style>