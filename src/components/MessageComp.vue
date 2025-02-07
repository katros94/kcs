<template>
  <Transition name="modal">
    <form @submit.prevent="handleSubmit" novalidate>
      <div v-if="show" class="modal-mask">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
                <h3>Let's Build Something Great</h3>
                <p class="modal-description">
                  Thanks for visiting! I’m a dedicated solo developer ready to bring your ideas to life. 
                  If you have a project in mind, fill out the form below, and I’ll get back to you soon. 
                  Let’s make something great together!
                </p>
            </slot>
          </div>
          <div class="modal-body">
              <slot name="body">
                <div class="flex-container">
                  <div class="flex-item">
                      <label for="firstname" class="contactform-label">First name</label>
                      <input 
                          id="firstname" 
                          v-model="firstname" 
                          class="form-input" 
                          type="text" 
                          placeholder="Enter your first name" 
                          required 
                          @input="clearError('firstname')"
                      />
                      <p v-if="errors.firstname" class="error-message">{{ errors.firstname }}</p>
                  </div>
                  <div class="flex-item">
                      <label for="lastname" class="contactform-label">Last name</label>
                      <input 
                          id="lastname" 
                          v-model="lastname" 
                          class="form-input" 
                          type="text" 
                          placeholder="Enter your last name" 
                          required
                          @input="clearError('lastname')"
                      />
                      <p v-if="errors.lastname" class="error-message">{{ errors.lastname }}</p>
                  </div>
              </div>
              <div class="form-group">
                  <label for="email" class="contactform-label">Email</label>
                  <input 
                      id="email" 
                      v-model="email" 
                      class="form-input" 
                      type="email" 
                      placeholder="Email adress" 
                      required
                      @input="clearError('email')"
                  />
                  <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
              </div>
              <div class="form-group">
                  <label for="message" class="contactform-label">Message</label>
                  <textarea 
                      id="message" 
                      v-model="message" 
                      class="form-textarea" 
                      placeholder="Write your message" 
                      required
                      @input="clearError('message')"
                  ></textarea>
                  <p v-if="errors.message" class="error-message">{{ errors.message }}</p>
              </div>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="closeModal">Cancel</button>

              <button
                class="modal-default-button"
                type="submit"
              >Send</button>
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

export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  emits: ['submit', 'update:show', close],
  data() {
      return {
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: '',
        message: '',
        errors: {},
        loading: false,
        successMessage: ''
      };
  },
  methods: {
      async handleSubmit() {
      this.errors = {};
      this.loading = true;

      if (!this.firstname || this.firstname.length < 2) {
      this.errors.firstname = "First Name must be at least 2 characters long.";
      }
      if (!this.lastname || this.lastname.length < 2) {
        this.errors.lastname = "Last Name must be at least 2 characters long.";
      }
      if (!this.email) {
        this.errors.email = "Email is required.";
      } else {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(this.email)) {
            this.errors.email = "Please enter a valid email address.";
          }
      }
      if (!this.message || this.message.length < 10) {
        this.errors.message = "Message must be at least 10 characters long.";
      }

      if (Object.keys(this.errors).length > 0) {
        return;
      }

      const formData = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        message: this.message,
      };

      await fetch('https://formspree.io/f/xbldkjyw', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      })
      .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
        this.resetForm();
        this.closeModal()
        toast.success("Your message has been sent successfully!", {
          autoClose: 5000,
          position: toast.POSITION.TOP_LEFT,
        });
      })
      .catch(error => {
        this.errors.submit = "There was a problem sending your message: " + error.message;
      });
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
      this.phoneNumber = '';
      this.message = '';
      this.errors = {};
    }
  }
}
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
  position: fixed;
  z-index: 9998;
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
</style>
