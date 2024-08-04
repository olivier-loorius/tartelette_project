<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <router-link to="/">
          <img src="@/assets/images/LogoBlanc.png" alt="Logo d'Amande Tarterie" />
        </router-link>
      </div>
      <div class="footer-section">
        <h3>Horaires</h3>
        <p>Mar - Ven: 10h - 18h</p>
        <p>Sam: 10h - 13h</p>
        <p>Fermeture: Dimanche</p>
      </div>
      <div class="footer-section">
        <h3>Suivez-nous</h3>
        <div class="social-icons">
          <a href="#" target="_blank" class="social-icon">
            <i class="fab fa-tiktok"></i>
          </a>
          <a href="#" target="_blank" class="social-icon">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="#" target="_blank" class="social-icon">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" target="_blank" class="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="footer-section">
        <h3>Inscription à la Newsletter</h3>
        <form @submit.prevent="subscribe" class="newsletter-form">
          <input type="email" v-model="email" placeholder="Votre email" autocomplete="off" required />
          <button type="submit" class="newsletter-button">S'inscrire</button>
        </form>
      </div>
      <div class="footer-section">
        <h3>Liens Utiles</h3>
        <ul class="footer-links">
          <li><router-link to="/cgu">CGU</router-link></li>
          <li><router-link to="/mentions-legales">Mentions Légales</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/autres">Autres</router-link></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      email: ''
    };
  },
  methods: {
    subscribe() {
      this.email = '';
      this.$router.push({ name: 'UnderConstruction' });
    }
  }
};
</script>

<style scoped>
@import '@/assets/styles/variables.css';

.footer {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 2rem;
  font-family: var(--font-family-text);
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}

.footer-logo {
  flex: 0 0 150px;
  order: -1;
  margin-bottom: 1rem;
}

.footer-logo img {
  max-width: 100%;
  border-radius: 50%;
}

.footer-section {
  flex: 1;
  padding: 0 1rem;
  margin-bottom: 1rem;
  text-align: left;
}

.footer h3 {
  font-family: var(--font-family-title);
  color: var(--accent-color);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer p {
  font-family: var(--font-family-text);
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  font-size: 1.5rem;
  color: var(--secondary-color);
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: var(--accent-color);
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: var(--secondary-color);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--accent-color);
  text-decoration: underline;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.newsletter-form input {
  padding: 0.75rem 1rem;
  border: 1px solid var(--accent-color);
  border-radius: var(--button-border-radius);
  font-family: var(--font-family-text);
  background-color: var(--secondary-color);
  font-size: 0.9rem;
}

.newsletter-button {
  padding: 0.75rem 1rem;
  background-color: #90aeb0;
  color: var(--secondary-color);
  border: 2px solid #90aeb0;
  border-radius: var(--button-border-radius);
  cursor: pointer;
  font-family: var(--font-family-text);
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 0.9rem;
}

.newsletter-button:hover {
  background-color: #fff;
  color: #90aeb0;
}

@media (max-width: 1024px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .footer-logo {
    order: 0;
    margin-bottom: 1rem;
  }

  .footer-logo img {
    max-width: 80px;
  }

  .footer-section {
    margin-bottom: 2rem;
    text-align: center;
  }

  .social-icons {
    flex-direction: column;
    align-items: center;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-links li {
    text-align: center;
  }
}
</style>
