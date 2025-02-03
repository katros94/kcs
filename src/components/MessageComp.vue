<template>
    <Transition name="modal">
      <div v-if="show" class="modal-mask">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
                <h3>Kontakt</h3>
            </slot>
          </div>
  
          <div class="modal-body">
            <slot name="body">
            <div class="form-group">
                <input v-model="firstname" class="form-input" placeholder="Firstname" />
            </div>
            <div class="form-group">
                <input v-model="lastname" class="form-input" placeholder="Lastname" />
            </div>
            <div class="form-group">
                <input v-model="email" class="form-input" placeholder="E-mail" />
            </div>
            <div class="form-group">
                <input v-model="phoneNumber" class="form-input" placeholder="Phone number" />
            </div>

            <textarea v-model="message" class="form-textarea" placeholder="Add multiple lines"></textarea>
            </slot>
        </div>
  
          <div class="modal-footer">
            <slot name="footer">
              <button
                class="modal-default-button"
                @click="$emit('close')"
              >OK</button>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
</template>

<script>
export default {
    props: {
        show: Boolean
    }
}
</script>

<style>
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
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

.modal-body {
    padding-right: 5%;
}

.form-group {
    margin-bottom: 20px;
}

.form-input,
.form-textarea {
    width: 100%;
    padding: 12px;
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

.modal-footer {
    display: flex;
    justify-content: flex-end;
}

.modal-default-button {
    padding: 10px 20px;
    background-color: #fffa76; /* Light yellow */
    color: #000; /* Black text */
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s; /* Added transform for modern effect */
    outline: none; /* Remove default outline */
}

/* Ensure a better contrast ratio */
.modal-default-button:focus {
    outline: 3px solid #ffcc00; /* Add a focus outline for accessibility */
}

/* Change background color on hover */
.modal-default-button:hover {
    background-color: #ffeb3b; /* Darker yellow for better hover effect */
    transform: scale(1.05); /* Slightly enlarge button */
}

/* Add a focus style for keyboard users */
.modal-default-button:focus {
    background-color: #ffd600; /* Change background on focus */
    box-shadow: 0 0 0 3px rgba(255, 204, 0, 0.5); /* Add a shadow for visibility */
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
