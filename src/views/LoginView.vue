<template>
    <div class="login-container" :class="{ 'mobile': isMobile }">
      <div class="login-form">
        <div class="header">
          <button @click="goBack" class="back-button">
            <i class="fas fa-arrow-left"></i>
          </button>
          <div class="toggle-buttons">
            <button :class="{ active: isRegistered }" @click="toggleForm(true)">Connexion</button>
            <button :class="{ active: !isRegistered }" @click="toggleForm(false)">Inscription</button>
          </div>
        </div>
        <h2 v-if="isRegistered">Connexion</h2>
        <h2 v-else>Inscription</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group" v-if="!isRegistered">
            <input type="text" id="firstName" v-model="firstName" required placeholder="Prénom" />
          </div>
          <div class="form-group">
            <input type="text" id="lastName" v-model="lastName" required placeholder="Nom" />
          </div>
          <div class="form-group">
            <input type="email" id="email" v-model="email" required placeholder="Email" />
          </div>
          <div class="form-group" v-if="!isRegistered">
            <input type="tel" id="phone" v-model="phone" required placeholder="Téléphone" />
          </div>
          <button type="submit" class="submit-button">{{ isRegistered ? 'Se connecter' : 'S\'inscrire' }}</button>
        </form>
  
        <!-- Bouton pour supprimer le compte -->
        <div v-if="isRegistered" class="delete-account">
          <button @click="confirmDeleteAccount" class="delete-button">Supprimer le compte</button>
        </div>
  
        <!-- Confirmation de la suppression -->
        <div v-if="showConfirm" class="confirm-dialog">
          <div class="dialog-content">
            <p>Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.</p>
            <div class="dialog-actions">
              <button @click="deleteAccount" class="confirm-button">Oui, supprimer</button>
              <button @click="cancelDelete" class="cancel-button">Annuler</button>
            </div>
          </div>
        </div>
  
        <!-- Message de confirmation de suppression -->
        <div v-if="showDeleteMessage" class="delete-message">
          <p>Votre compte a bien été supprimé.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginView',
    data() {
      return {
        isRegistered: true, // Par défaut, afficher la connexion
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        isMobile: window.innerWidth <= 768,
        showConfirm: false, // Pour afficher la confirmation de suppression
        showDeleteMessage: false // Pour afficher le message de suppression
      };
    },
    methods: {
      handleSubmit() {
        if (this.isRegistered) {
          // Logique de connexion
          console.log('Connexion avec:', this.lastName, this.email);
        } else {
          // Logique d'inscription
          console.log('Inscription avec:', this.firstName, this.lastName, this.email, this.phone);
        }
      },
      goBack() {
        this.$router.go(-1);
      },
      toggleForm(isRegistered) {
        this.isRegistered = isRegistered;
        if (this.isMobile) {
          this.$emit('closeMenu'); // Fermer le menu burger
        }
      },
      handleResize() {
        this.isMobile = window.innerWidth <= 768;
      },
      confirmDeleteAccount() {
        this.showConfirm = true;
      },
      cancelDelete() {
        this.showConfirm = false;
      },
      async deleteAccount() {
        try {
          // Simuler l'appel à l'API pour supprimer le compte
          console.log('Suppression du compte');
          // Afficher le message de confirmation de suppression
          this.showDeleteMessage = true;
          // Cacher le message après 3 secondes
          setTimeout(() => {
            this.showDeleteMessage = false;
            // Rediriger l'utilisateur après suppression du compte
            this.$router.push('/');
          }, 3000);
        } catch (error) {
          console.error('Erreur lors de la suppression du compte:', error);
        }
      }
    },
    mounted() {
      window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  };
  </script>
  
  <style scoped>
  @import '@/assets/styles/variables.css';
  @import '@fortawesome/fontawesome-free/css/all.css';
  
  .login-container {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end; /* Centré à droite par défaut */
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); /* semi-transparent background */
  }
  
  .login-container.mobile {
    justify-content: center; /* Centré horizontalement en mobile */
  }
  
  .login-form {
    width: 30%;
    height: auto;
    padding: 2rem;
    background-color: var(--secondary-color);
    border-radius: var(--button-border-radius);
    position: relative;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  .back-button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--primary-color);
  }
  
  .toggle-buttons {
    display: flex;
    gap: 0.5rem;
  }
  
  .toggle-buttons button {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    color: var(--primary-color);
    font-weight: bold;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s ease, color 0.3s ease;
  }
  
  .toggle-buttons button.active {
    border-color: var(--accent-color);
    color: var(--accent-color);
  }
  
  h2 {
    font-family: var(--font-family-title);
    color: var(--primary-color);
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
    position: relative;
  }
  
  input {
    width: 100%;
    padding: 0.75rem 0;
    border: none;
    border-bottom: 2px solid var(--primary-color);
    background: transparent;
    font-family: var(--font-family-text);
    color: var(--primary-color);
    transition: border-color 0.3s ease;
  }
  
  input::placeholder {
    color: var(--primary-color);
  }
  
  input:focus {
    border-color: var(--accent-color);
    outline: none;
  }
  
  .submit-button {
    width: 100%;
    margin-top: 1.5rem;
    background-color: var(--accent-color);
    color: var(--secondary-color);
    border: none;
    padding: 0.75rem;
    border-radius: var(--button-border-radius);
    cursor: pointer;
    font-family: var(--font-family-text);
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: var(--accent-color-light);
    transform: translateY(-2px);
  }
  
  /* Styles pour le bouton de suppression de compte */
  .delete-account {
    margin-top: 1rem;
  }
  
  .delete-button {
    width: 100%;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border: none;
    padding: 0.75rem;
    border-radius: var(--button-border-radius);
    cursor: pointer;
    font-family: var(--font-family-text);
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .delete-button:hover {
    background-color: var(--accent-color);
    transform: translateY(-2px);
  }
  
  /* Styles pour la confirmation de suppression */
  .confirm-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); /* semi-transparent background */
    z-index: 1000;
  }
  
  .dialog-content {
    background-color: var(--secondary-color);
    padding: 2rem;
    border-radius: var(--button-border-radius);
    border: 2px solid var(--primary-color); /* Ajout du contour clair */
    text-align: center;
    width: 90%;
    max-width: 500px;
  }
  
  .dialog-content p {
    margin-bottom: 1.5rem;
    font-family: var(--font-family-text);
    color: var(--primary-color);
  }
  
  .dialog-actions {
    display: flex;
    justify-content: space-between;
  }
  
  .confirm-button {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: var(--button-border-radius);
    cursor: pointer;
    flex-grow: 1;
    margin-right: 0.5rem;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .confirm-button:hover {
    background-color: var(--accent-color);
    transform: translateY(-2px);
  }
  
  .cancel-button {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    padding: 0.5rem 1rem;
    border-radius: var(--button-border-radius);
    cursor: pointer;
    flex-grow: 1;
    margin-left: 0.5rem;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .cancel-button:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    transform: translateY(-2px);
  }
  
  /* Message de confirmation de suppression */
  .delete-message {
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--primary-color);
    color: var(--secondary-color);
    padding: 1rem 2rem;
    border-radius: var(--button-border-radius);
    border: 2px solid var(--primary-color); /* Ajout du contour clair */
    text-align: center;
    z-index: 1000;
  }
  
  /* Styles pour mobile */
  @media (max-width: 768px) {
    .login-form {
      width: 90%;
      padding: 1rem;
    }
  
    .back-button {
      font-size: 1.2rem;
    }
  
    .toggle-buttons button {
      font-size: 1rem;
      padding: 0.25rem 0.5rem;
    }
  
    h2 {
      font-size: 1.5rem;
    }
  
    input {
      padding: 0.5rem 0;
    }
  
    .submit-button, .delete-button {
      margin-top: 1rem;
      padding: 0.5rem;
    }
  
    .confirm-dialog {
      height: 100%; /* Ajustement de la hauteur pour qu'il prenne toute la place */
    }
  
    .dialog-content {
      width: 100%;
      max-width: none;
    }
  
    .dialog-actions {
      flex-direction: column;
    }
  
    .confirm-button, .cancel-button {
      width: 100%;
      margin: 0.5rem 0;
    }
  
    .delete-message {
      width: 90%;
    }
  }
  </style>
  