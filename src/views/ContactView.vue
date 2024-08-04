<template>
  <div class="contact-page">
    <header class="contact-header">
      <h1>Contactez Amande Tarterie</h1>
      <p>Chez Amande, votre avis compte. Si vous avez des suggestions, des envies ou des propositions de produits à tester, laissez-nous un message.</p>
    </header>
    <section class="contact-details">
      <h2>Informations de contact</h2>
      <div class="details-grid">
        <div class="details-item">
          <h3>Horaires</h3>
          <p>Mar - Ven: 10h - 18h</p>
          <p>Sam: 10h - 13h</p>
          <p>Fermeture: Dimanche</p>
        </div>
        <div class="details-item">
          <h3>Adresse</h3>
          <p>123 Rue de la Tartelette, 33000 Bordeaux, France</p>
          <div class="iframe-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.760992263128!2d-0.5786712841552974!3d44.83778997909807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527bf39b9eb77%3A0x406651748184850!2sPlace%20de%20la%20Bourse%2C%2033000%20Bordeaux!5e0!3m2!1sen!2sfr!4v1614873334900!5m2!1sen!2sfr"
              frameborder="0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    <section class="contact-socials">
      <h2>Suivez-nous</h2>
      <p>Restez connecté avec nous sur les réseaux sociaux :</p>
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
    </section>
    <section class="contact-form">
      <h2>Contactez-nous</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Nom</label>
          <input type="text" id="name" v-model="form.name" required placeholder="Entrez votre nom" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required placeholder="Entrez votre email" />
        </div>
        <div class="form-group">
          <label for="tel">Téléphone</label>
          <input type="tel" id="tel" v-model="form.tel" pattern="[0-9]{10}" placeholder="0123456789" />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            maxlength="300"
            required
            placeholder="Entrez votre message (300 caractères max)"
          ></textarea>
        </div>
        <button type="submit" class="btn-submit">Envoyer</button>
      </form>
      <router-link to="/" class="btn-home">Retour à l'accueil</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        tel: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      this.$router.push({ name: 'UnderConstruction' });
    }
  }
};
</script>

<style scoped>
@import '@/assets/styles/variables.css';

.contact-page {
  padding: 2rem;
  text-align: center;
}

.contact-header {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 2rem;
  border-radius: var(--button-border-radius);
  margin-bottom: 2rem;
}

.contact-header h1 {
  font-family: var(--font-family-title);
  color: var(--accent-color);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.contact-header p {
  font-family: var(--font-family-text);
  color: var(--secondary-color);
  font-size: 1.2rem;
}

.contact-details, .contact-socials, .contact-form {
  margin-bottom: 2rem;
}

.contact-details h2, .contact-socials h2, .contact-form h2 {
  font-family: var(--font-family-title);
  color: var(--accent-color);
  font-size: 2rem;
  margin-bottom: 1rem;
}

.details-grid {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  background-color: #f1e7dd;
  padding: 2rem;
  border-radius: var(--button-border-radius);
}

.details-item {
  flex: 1;
  max-width: 45%;
  text-align: left;
}

.details-item h3 {
  font-family: var(--font-family-title);
  color: var(--accent-color);
  margin-bottom: 0.5rem;
}

.details-item p {
  font-family: var(--font-family-text);
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin-top: 1rem;
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.contact-socials p {
  font-family: var(--font-family-text);
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.contact-socials .social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-icon {
  font-size: 2rem;
  color: var(--primary-color);
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: var(--accent-color);
}

.contact-form {
  background-color: #f1e7dd;
  color: var(--primary-color);
  padding: 2rem;
  border-radius: var(--button-border-radius);
  box-shadow: var(--box-shadow);
  margin: 0 auto;
  max-width: 600px;
}

.contact-form .form-group {
  margin-bottom: 1rem;
  text-align: left;
}

.contact-form label {
  display: block;
  margin-bottom: 0.5rem;
  font-family: var(--font-family-text);
  color: var(--primary-color);
}

.contact-form input, .contact-form textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--accent-color);
  border-radius: var(--button-border-radius);
  font-family: var(--font-family-text);
  font-size: 1rem;
  box-sizing: border-box;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  transition: border-color 0.3s ease;
}

.contact-form input:focus, .contact-form textarea:focus {
  border-color: #90aeb0;
}

.contact-form textarea {
  resize: vertical;
}

.contact-form button, .btn-home {
  padding: 0.75rem 1.5rem;
  background-color: #90aeb0;
  color: var(--secondary-color);
  border: 2px solid #90aeb0;
  border-radius: var(--button-border-radius);
  cursor: pointer;
  font-family: var(--font-family-text);
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 1rem;
  display: inline-block;
  margin-top: 1rem;
  text-decoration: none;
}

.contact-form button:hover, .btn-home:hover {
  background-color: #fff;
  color: #90aeb0;
}

@media (max-width: 768px) {
  .details-grid {
    flex-direction: column;
  }

  .details-item {
    max-width: 100%;
  }

  .social-icons {
    flex-direction: column;
  }

  .iframe-container {
    padding-bottom: 75%; 
  }
}
</style>
