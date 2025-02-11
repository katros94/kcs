<template>
    <MenuComp />
    <section id="home-header">
        <div class="slogan-container">
            <div class="slogan-text">
                <h1>
                    <span class="highlight">&lt;p&gt;</span>
                    {{ t('turning') }} <b>{{ t('visions') }}</b> {{ t('into_virtual') }} <b>{{ t('reality') }}</b>
                    <span class="highlight">&lt;/p&gt;</span>
                </h1>
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
                            <i class="fa fa-youtube"></i>
                        </div>
                        <span>YouTube</span>
                    </a>
                    <a href="https://www.facebook.com/groups/118348288371722/" class="button">
                        <div class="icon">
                            <i class="fa fa-facebook"></i>
                        </div>
                        <span>Facebook</span>
                    </a>
                </div>
            </div>
            <div>
                <img :src="headerImg" class="slogan-image" alt="Header image" />
            </div>
        </div>
    </section>

    <section id="services-section">
        <div class="services-overview">
            <div class="service-card" v-for="(service, index) in services" :key="index">
                <h2>{{ service.title }}</h2>
                <p>{{ service.description }}</p>
            </div>
        </div>
        <div class="services-container">
            <div class="services-info">
                <h1>{{ t('customized_web_solutions') }}</h1>
                <div class="text-info">
                    <p>{{ t('customized_web_solutions_service1') }}</p>
                    <p>{{ t('customized_web_solutions_service2') }}</p>
                    <button class="contact-btn" @click="showModal = true">{{ t('schedule_a_meeting_with_me') }}</button>
                </div>
            </div>
        </div>
    </section>

    <Teleport to="body">
        <MessageComp :show="showModal" @close="showModal = false" />
    </Teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MessageComp from '../components/MessageComp.vue';
import MenuComp from '@/components/MenuComp.vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    name: 'AboutMe',
    components: {
        MessageComp,
        MenuComp
    },
    setup() {
        const { t, locale } = useI18n();
        const showModal = ref(false);
        const headerImg = process.env.BASE_URL + 'img/images/13.png';
        
        const changeLanguage = (lang: string) => {
            locale.value = lang;
        };

        return {
            t,
            showModal,
            headerImg,
            changeLanguage
        };
    },
    data() {
        const services = [
            {
                title: this.t('professional') + ' ' + this.t('web_development'),
                description: this.t('web_information_service'),
            },
            {
                title: this.t('custom') + ' ' + this.t('ecommerce_solutions'),
                description: this.t('ecommerce_service'),
            },
            {
                title: this.t('innovative') + ' ' + this.t('ui/ux_design'),
                description: this.t('design_service'),
            },
            {
                title: this.t('reliable') + ' ' + this.t('website_maintenance'),
                description: this.t('website_maintenance_service'),
            },
        ];

        return {services}
    }
});
</script>

<style>
#home-header {
    background-color: #000;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.highlight {
    color: rgb(90, 90, 255);
    font-weight: bold;
}

.slogan-image {
    height: 600px;
}

.slogan-container {
    display: flex;
    flex-direction: row;
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

.header-social {
    display: flex;
    flex-direction:row;
    align-items: flex-start;
    margin-top: 5%;
}

.header-social .button {
    display: inline-block;
    height: 30px;
    width: 30px;
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
    flex-direction: row;
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

@media (max-width: 600px) {
    .slogan-container {
        padding: 10;
        margin-top: 10%;
        display: flex;
        flex-direction: column;
    }
    .slogan-text {
        font-size: 1em;
    }
    .header-social {
        margin-top: 10%;
        margin-bottom: 10%;
    }
    .header-social .button .icon {
        font-size: 25px;
        padding: 2%;
    }

    .services-overview {
        margin: 5%;
    }

    .services-info {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .services-info h1 {
        font-size: 40px;
        border-right: none;
        margin-right: 0;
    }

    .text-info {
        margin-left: 0;
    }

    .services-container {
        flex-direction: column;
        align-items: center;
        margin: 10px;
        padding: 10px;
    }

    .service-card {
        width: 100%;
        margin: 10px 0;
    }

    .slogan-image {
        height: 300px;
        background-size: cover;
    }
}

</style>