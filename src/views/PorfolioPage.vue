<template>
    <div class="portfolio">
        <h1>🚧 {{ t('wip_information') }}</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';


export default defineComponent({
        name: 'PortfolioPage',
        setup() {
            const { t } = useI18n();
        return {
            t
        };
    },
})
</script>

<style>
    .portfolio {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        padding: 20px;
        color: #fff;
        text-align: center;
        font-family: 'Arial', sans-serif;
    }

    h1 {
        font-size: 2rem;
        margin: 0;
    }
</style>