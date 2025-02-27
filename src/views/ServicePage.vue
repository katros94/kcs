<template>
  <div>
    <main>
      <section class="services-description">
        <h1>{{ t('service_title') }}</h1>
        <div class="service-intro">
          <p v-for="(line, index) in $tm('service_intro')" :key="index">{{ line }}</p>
        </div>
      </section>

      <section class="services">
        <h2>{{ t('services_we_offer') }}</h2>
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item 
            v-for="(item, index) in serviceItems" 
            :key="index" 
            :title="t(item.titleKey)" 
            :name="item.name"
            :aria-label="t(item.titleKey)"
          >
            <div>
              <h3>{{ t(item.descKey) }}</h3>
              <h4>{{ t(item.offerTitleKey) }}</h4>
              <div class="details-list">
                <p v-for="(detail, index) in $tm(item.detailsKey)" 
                    :key="index" 
                    class="detail-item">
                  {{ detail }}
                </p>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </section>

      <section class="workflow">
            <h2>{{ t('workflow_title') }}</h2>
            <el-tabs v-model="activeTab" class="custom-tabs">
              <el-tab-pane
                v-for="(step, index) in workflowSteps"
                :key="index"
                :label="t(step.titleKey)"
                :name="String(index)"
              >
                <p class="step-description" v-for="(line, i) in $tm(step.descKey)" :key="i">{{ line }}</p>
              </el-tab-pane>
            </el-tabs>
      </section>

    </main>
  </div>
</template>

  
  <script lang="ts">
  import { computed, defineComponent, ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  export default defineComponent({
    name: 'ServicePage',
    setup() {
      const { t } = useI18n();
      const activeTab = ref('0'); 
      const activeNames = ref('0'); 

      const workflowSteps = computed(() => [
        { titleKey: 'steps.contact.title', descKey: 'steps.contact.description' },
        { titleKey: 'steps.consultation.title', descKey: 'steps.consultation.description' },
        { titleKey: 'steps.planning.title', descKey: 'steps.planning.description' },
        { titleKey: 'steps.design.title', descKey: 'steps.design.description' },
        { titleKey: 'steps.development.title', descKey: 'steps.development.description' },
        { titleKey: 'steps.testing.title', descKey: 'steps.testing.description' },
        { titleKey: 'steps.launch.title', descKey: 'steps.launch.description' },
        { titleKey: 'steps.maintenance.title', descKey: 'steps.maintenance.description' }
      ]);

  
      const serviceItems = [
        { 
          name: '1',
          titleKey: 'professional_web_development',
          descKey: 'web_dev_desc',
          offerTitleKey: 'why_choose_us',
          detailsKey: 'web_dev_details'
        },
        {
          name: '2',
          titleKey: 'custom_ecommerce_solutions',
          descKey: 'ecommerce_desc',
          offerTitleKey: 'what_we_offer',
          detailsKey: 'ecommerce_details'
        },
        {
          name: '3',
          titleKey: 'innovative_uiux_design',
          descKey: 'uiux_desc',
          offerTitleKey: 'design_principles',
          detailsKey: 'uiux_details'
        },
        {
          name: '4',
          titleKey: 'reliable_website_maintenance',
          descKey: 'maintenance_desc',
          offerTitleKey: 'maintenance_includes',
          detailsKey: 'maintenance_details'
        }
      ];
  
      return {
        t,
        activeTab,
        activeNames,
        serviceItems,
        workflowSteps
      };
    },
  });
  </script>
  
  
<style>
:root {
  --background-dark: #252525;
  --text-primary: #fff;
  --accent-yellow: #fffa76;
}

.el-tabs {
    --el-tabs-header-height: 40px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-wrap: wrap;
}

.el-tabs--top {
  flex-direction: column-reverse !important;
}

.el-tabs__header {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
}

.el-tabs__nav {
  display: flex;
}

.el-tabs__nav .el-tabs__item {
  white-space: nowrap;
}

.el-tabs__content {
  line-break: auto;
  width: 100%;
}

.el-tab-pane {
  min-width: 100%;
  display: block;
}

.services h2 {
  padding-left: 2em;
  text-align: left;
  font-weight: 700;
  color: #333;
  margin-top: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Arial', sans-serif;
}

.workflow {
  padding: 2rem;
  background: #f0f4f8;
  border-radius: 12px;
  color: #333;
  color: white;
  border-radius: 2em;
  text-align: center;
  margin-left: 3rem;
  margin-right: 3rem;
}

.workflow h2 {
  text-align: left;
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Arial', sans-serif;
}

.workflow-step {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  margin-bottom: 1.5rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  opacity: 0.9;
}

.workflow-step:hover {
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

.step-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.step-number {
  font-size: 2em;
  color: #000;
  font-weight: bold;
  padding: 0.5em;
}

.step-number:hover {
  border-radius: 100%;
  background-color: #FFFA76;
}

.step h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  margin: 0;
  line-height: 1.4;
}

.step-description {
  font-size: 1rem;
  color: #555;
  margin-top: 0.8rem;
  line-height: 1.5;
  font-weight: 400;
  text-align: left;
}

.custom-tabs {
  width: 100%;
}

.service-intro p {
  margin-bottom: 1.2rem;
  line-height: 1.6;
  font-size: 1rem;
  text-align: center;
}

.details-list {
  margin-top: 1rem;
}

.detail-item {
  padding: 0.5rem 0;
  font-size: 1rem;
}

.detail-item:last-child {
  border-bottom: none;
}

.services {
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: #F0F4F8;
  font-family: 'Arial', sans-serif;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-bottom: 5rem;
  padding-bottom: 2rem;
  border-radius: 2em;
}

.el-collapse {
  width: 100% !important;
  border: none !important;
}

.el-collapse-item {
  background-color: #000 !important;
  color: #000 !important;
}

.el-collapse-item__header {
  background-color: #F0F4F8 !important;
  padding: 2em !important;
  color: #000 !important;
  font-size: 1.5em !important;
  border-bottom: none !important;
}

.el-collapse-item__content {
  transition: all 0.3s ease-in-out;
  background-color: #fff !important;
  color: #000 !important;
  text-align: left;
  padding-left: 3em;
  padding-right: 3em;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1em !important;
  border-top: 3px solid #fff !important;
  border-bottom: 3px solid #fff !important;
}

h1 {
  font-size: 2rem;
  color: #fff;
  font-weight: 500;
  font-family: Arial;
  text-align: center;
}

.services-description {
  padding: 2em;
  color: #fff;
  text-align: center;
  max-width: 90%;
  margin: auto;
}

@media (max-width: 768px) {
  .services {
    width: 100%;
    margin-left: 1em;
  }
  .el-collapse-item__header {
    font-size: 1em !important;
  }
  .workflow {
    width: 85%;
    margin-left: 1em;
  }

  .workflow h2 {
    font-size: 1.3rem;
  }

  .el-collapse-item__header {
    font-size: 1.2em;
    padding: 0.8em;
  }

  .el-collapse-item__content {
    padding: 0.8em;
    font-size: 0.9em;
  }

  .services-description {
    padding: 1.5em;
  }

  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  .el-tabs {
    display: block;
  }

  .el-tab-pane {
    width: 100%;
    display: block;
  }

  .el-tabs__header {
    flex-direction: row;
  }

  .el-tabs__header .el-tabs__item {
    flex-shrink: 0;
  }
}

  </style>