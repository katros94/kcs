<template>
  <Transition name="modal">
    <form @submit.prevent="handleSubmit" novalidate>
      <div v-if="show" class="modal-mask">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h3>{{ t('lets_build_something_great') }}</h3>
              <p class="modal-description">{{ t('modal_description') }}</p>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <div class="flex-container">
                <div class="flex-item">
                  <label for="firstname" class="contactform-label">{{ t('firstname') }}</label>
                  <input
                    id="firstname"
                    v-model="firstname"
                    class="form-input"
                    type="text"
                    :placeholder="t('placeholder_firstname')"
                    required
                    @input="clearError('firstname')"
                  />
                  <p v-if="errors.firstname" class="error-message">{{ errors.firstname }}</p>
                </div>
                <div class="flex-item">
                  <label for="lastname" class="contactform-label">{{ t('lastname') }}</label>
                  <input
                    id="lastname"
                    v-model="lastname"
                    class="form-input"
                    type="text"
                    :placeholder="t('placeholder_lastname')"
                    required
                    @input="clearError('lastname')"
                  />
                  <p v-if="errors.lastname" class="error-message">{{ errors.lastname }}</p>
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="contactform-label">{{ t('email') }}</label>
                <input
                  id="email"
                  v-model="email"
                  class="form-input"
                  type="email"
                  :placeholder="t('placeholder_email')"
                  required
                  @input="clearError('email')"
                />
                <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
              </div>
              <div class="form-group">
                <label for="subject" class="contactform-label">{{ t('subject') }}</label>
                <input
                  id="subject"
                  v-model="subject"
                  class="form-input"
                  type="text"
                  :placeholder="t('placeholder_subject')"
                  required
                  @input="clearError('subject')"
                />
                <p v-if="errors.subject" class="error-message">{{ errors.subject }}</p>
              </div>
              <div class="form-group">
                <label for="message" class="contactform-label">{{ t('message') }}</label>
                <textarea
                  id="message"
                  v-model="message"
                  class="form-textarea"
                  :placeholder="t('placeholder_message')"
                  required
                  @input="clearError('message')"
                ></textarea>
                <p v-if="errors.message" class="error-message">{{ errors.message }}</p>
              </div>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="closeModal">{{ t('cancel') }}</button>
              <button class="modal-default-button" type="submit">{{ t('send') }}</button>
            </slot>
          </div>
        </div>
      </div>
    </form>
  </Transition>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useI18n } from 'vue-i18n';

export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['submit', 'update:show', 'close'], // Add 'close' to emits
  setup() {
    const { t } = useI18n();
    return { t };
  },
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      subject: '',
      message: '',
      errors: {},
      loading: false,
      successMessage: '',
    };
  },
  methods: {
    async handleSubmit() {
      this.errors = {};
      this.loading = true;

      if (!this.firstname || this.firstname.length < 2) {
        this.errors.firstname = this.t('error_firstname');
      }
      if (!this.lastname || this.lastname.length < 2) {
        this.errors.lastname = this.t('error_lastname');
      }
      if (!this.email) {
        this.errors.email = this.t('error_email_required');
      } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(this.email)) {
          this.errors.email = this.t('error_email_invalid');
        }
      }
      if (!this.subject || this.subject.length < 5) {
        this.errors.subject = this.t('error_subject');
      }
      if (!this.message || this.message.length < 10) {
        this.errors.message = this.t('error_message');
      }

      if (Object.keys(this.errors).length > 0) {
        this.loading = false;
        return;
      }

      const formData = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        subject: this.subject,
        message: this.message,
      };

      try {
        const response = await fetch('https://formspree.io/f/xbldkjyw', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error(this.t('error_network'));
        }

        this.resetForm();
        this.closeModal();
        toast.success(this.t('success_message_sent'), {
          autoClose: 5000,
          position: toast.POSITION.TOP_LEFT,
        });
      } catch (error) {
        this.errors.submit = this.t('error_submit') + error.message;
      } finally {
        this.loading = false;
      }
    },
    clearError(field) {
      if (this.errors[field]) {
        delete this.errors[field];
      }
    },
    closeModal() {
      this.$emit('update:show', false);
      this.$emit('close');
    },
    resetForm() {
      this.firstname = '';
      this.lastname = '';
      this.email = '';
      this.subject = '';
      this.message = '';
      this.errors = {};
    },
  },
};
</script>

<style>
.flex-container {
  display: flex;
  justify-content: space-between;
}

.flex-item {
  flex: 1;
  margin-right: 10%;
}

.flex-item:last-child {
  margin-right: 0;
}

.form-group {
  margin-bottom: 1rem;
}

.form-input, .form-textarea {
  width: 100%;
}

.modal-mask {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 400px;
  padding: 20px;
  background-color: #ffffff;
  color: #333;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.modal-header {
  margin-bottom: 20px;
}

.modal-header h3 {
  margin: 0;
  color: #2c2c2c;
  font-size: 1.5em;
}

.modal-description {
  font-size: 0.8rem;
  color: #6c757d;
  line-height: 1.5;
  margin-top: 2%;
  letter-spacing: 0.03em;
}

.modal-body {
  padding-right: 5%;
}

.contactform-label {
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 0.1em;
}

.form-group {
  margin-bottom: 20px;
  margin-top: 5%;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px;
  margin-top: 5px;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  font-size: 1em;
  transition: border-color 0.3s;
}

.form-input:focus,
.form-textarea:focus {
  border-color: #555555;
  outline: none;
}

.form-textarea {
  height: 100px;
  resize: none;
}

.error-message {
  color: red;
  font-size: 0.9em;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
}


.modal-default-button {
  padding: 10px 20px;
  background-color: #fffa76;
  color: #333;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  outline: none;
}

.modal-default-button:focus {
  outline: 2px solid #ffcc00;
}

.modal-default-button:hover {
  background-color: #ffeb3b;
  color: #000;
}

.modal-default-button:focus {
  background-color: #ffd600;
  box-shadow: 0 0 0 3px rgba(255, 204, 0, 0.5);
}


.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.9);
}

@media (max-width: 600px) {

  .modal-container {
    width: 95%;
  }
}
</style>
