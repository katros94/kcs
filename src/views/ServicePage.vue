<template>
    <div class="services-description">
        <h1>Skapa din drömwebbplats med en erfaren utvecklare</h1>
        <p>Professionella webbtjänster för ditt företag? <br>
        Letar du efter en utvecklare som kan förverkliga din vision och ta din digitala närvaro till nästa nivå?<br><br>
        Oavsett om du behöver en helt ny webbplats, en skräddarsydd e-handelslösning eller en sömlös användarupplevelse, är jag här för att hjälpa dig. <br><br>
        Här är några av de tjänster jag erbjuder:</p>
    </div>
    <div class="services">
    <el-collapse v-model="activeNames" accordion>
      <el-collapse-item :title="t('professional') +' '+ t('web_development')" name="1">
        <div>
          <h3>Vi skapar professionella, moderna och skräddarsydda webbplatser som hjälper ditt företag att växa online. Oavsett om du behöver en helt ny webbplats eller en uppgradering av din befintliga, bygger vi lösningar som är snabba, säkra och enkla att hantera. Med responsiv design ser din webbplats fantastisk ut på både mobil och dator.</h3>
          <h4>Varför välja oss?</h4>
          <p>✅ Skräddarsydda lösningar för din verksamhet
             ✅ SEO-optimerad och snabb prestanda
             ✅ Mobilvänlig och lätt att underhålla
            </p>
        </div>
        </el-collapse-item>
        <el-collapse-item :title="t('custom') +  ' ' + t('ecommerce_solutions')" name="2">
        <div>
            <h3>Vill du sälja dina produkter eller tjänster online? Vi bygger kraftfulla och användarvänliga e-handelslösningar anpassade efter dina behov. Oavsett om du startar en ny webbshop eller behöver förbättra en befintlig, hjälper vi dig att skapa en smidig köpupplevelse som ökar din försäljning.</h3>
            <h4>Vad vi erbjuder:</h4>
            <p>🛒 Skräddarsydda webbutiker (WooCommerce, Shopify, Magento m.fl.)
                🔒 Säkra betalningslösningar och användarvänlig checkout
                📈 SEO-optimerad för bättre synlighet på Google
            </p>
        </div>
      </el-collapse-item>
    <el-collapse-item :title="t('innovative') + ' ' + t('ui/ux_design')" name="3">
        <div>
            <h3>En snygg och användarvänlig design är avgörande för att skapa en positiv upplevelse för dina besökare. Vi designar webbplatser och appar som är intuitiva, engagerande och optimerade för konverteringar. Vår designprocess utgår från både användarens behov och affärsmålen för att skapa en webbplats som både ser bra ut och fungerar sömlöst.</h3>
            <h4>Våra designprinciper:</h4>
            <p>🎨 Attraktiv och modern design
                🧭 Enkel navigering och tydlig struktur
                📊 Optimerad för att öka konverteringar</p>
        </div>
      </el-collapse-item>
      <el-collapse-item :title="t('reliable') + ' ' + t('website_maintenance')" name="4">
        <div>
            <h3>Att ha en hemsida är bara början – den behöver också hållas uppdaterad och säker. Vi erbjuder pålitliga underhållstjänster som ser till att din webbplats alltid fungerar felfritt. Från säkerhetsuppdateringar och backup till prestandaoptimering och innehållsuppdateringar – vi tar hand om det tekniska så att du kan fokusera på din verksamhet.</h3>
            <h4>Vad ingår i vår underhållsservice?</h4>
            <p>🔄 Regelbundna uppdateringar och säkerhetskontroller
                📂 Backup och återställning vid behov
                ⚡ Optimering för snabbare laddningstider
            </p>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
        name: 'ServicePage',
        setup() {
        const { t } = useI18n();
        const activeNames = ref(['0'])

        return {
            t,
            activeNames,
        };
    },
})
</script>

<style>
    .services {
        display: flex;
        justify-content: center;
        align-items: center;
        color: hsl(0, 0%, 100%);
        height: auto;
        margin-bottom: 10em;
        background-color: black;
        text-align: center;
        font-family: 'Arial', sans-serif;
    }

    .el-collapse {
    background-color: #252525 !important;
    width: 93% !important;
    border: none !important;
    border-radius: 1em;
    }

    .el-collapse-item {
        background-color: #252525 !important;
        color: white !important;
    }

    .el-collapse-item__header {
        background-color: #252525 !important;
        padding: 1em !important;
        color: white !important;
        font-size: 2em !important;
        margin-top: 1em;
        margin-bottom: 1em;
        border-bottom: none !important;
    }

    .el-icon svg {
        font-size: medium;
    }

    .el-collapse-item__arrow {
        border: 1px solid #fff !important;
        border-radius: 100% !important;
        align-items: center;
    }

    .el-collapse-item__arrow.is-active {
        color: #fffa76;
    }

    .el-collapse-item__content {
        background-color: #252525 !important;
        color: white !important;
        text-align: left;
        padding-bottom: 5em !important;
        padding-top: 1em !important;
        padding-left: 5em !important;
        padding-right: 5em !important;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 1em !important;

    }

    h1 {
        font-size: 2rem;
        color: #fff;
        font-weight: 500;
        font-family: Arial;
    }

    .services-description {
        padding: 5em;
        color: #fff;
    }
</style>