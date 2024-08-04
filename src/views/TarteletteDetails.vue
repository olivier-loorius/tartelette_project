<template>
    <div class="tartelette-details">
      <div class="tartelette-card">
        <button @click="goBack" class="btn-back">
          <i class="fas fa-arrow-left"></i>
        </button>
        <img :src="tartelette.image" :alt="tartelette.title" class="tartelette-image" />
        <div class="tartelette-info">
          <h1>{{ tartelette.title }}</h1>
          <p>{{ tartelette.description }}</p>
          <p class="price">{{ tartelette.price.toFixed(2) }} €</p>
          <div class="allergenes">
            <h3>Allergènes</h3>
            <p>{{ tartelette.allergenes }}</p>
          </div>
          <div class="actions">
            <input type="number" v-model.number="quantity" min="1" class="quantity-input" />
            <button @click="addToCart" class="btn-action">Ajouter au panier</button>
          </div>
          <div class="share">
            <h3>Partager</h3>
            <div class="share-icons">
              <a :href="whatsappLink" target="_blank" class="share-icon">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a :href="instagramLink" target="_blank" class="share-icon">
                <i class="fab fa-instagram"></i>
              </a>
              <a :href="mailtoLink" class="share-icon">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TarteletteDetails',
    data() {
      return {
        tartelette: {
          id: this.$route.params.id,
          image: require('@/assets/images/tarteletteFraises.jpeg'),
          title: 'Tartelette aux Fraises',
          description: 'Délicieuse tartelette garnie de fraises fraîches et de crème pâtissière.',
          price: 6.50,
          allergenes: 'Gluten, Lait, Œufs'
        },
        quantity: 1
      };
    },
    computed: {
      whatsappLink() {
        return `https://wa.me/?text=${encodeURIComponent(`Découvrez cette tartelette: ${this.tartelette.title} - ${this.tartelette.description}`)}`;
      },
      instagramLink() {
        return `https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}`;
      },
      mailtoLink() {
        return `mailto:?subject=${encodeURIComponent(`Découvrez cette tartelette: ${this.tartelette.title}`)}&body=${encodeURIComponent(this.tartelette.description)}`;
      }
    },
    methods: {
      addToCart() {
        console.log(`Added ${this.quantity} of ${this.tartelette.title} to cart.`);
      },
      goBack() {
        this.$router.push({ name: 'Catalogue' });
      }
    }
  };
  </script>
  
  <style scoped>
  .tartelette-details {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: #f5f5f5;
  }
  
  .tartelette-card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    position: relative;
  }
  
  .btn-back {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--primary-color);
    transition: color 0.3s ease;
  }
  
  .btn-back:hover {
    color: var(--accent-color);
  }
  
  .tartelette-image {
    max-width: 100%;
    border-radius: 8px;
  }
  
  .tartelette-info {
    text-align: center;
  }
  
  .tartelette-info h1 {
    font-family: var(--font-family-title);
    color: var(--primary-color);
    font-size: 2rem;
    margin-top: 1rem;
  }
  
  .tartelette-info p {
    font-family: var(--font-family-text);
    color: var(--text-color);
    margin: 0.5rem 0;
  }
  
  .price {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--accent-color);
    margin-top: 1rem;
  }
  
  .allergenes {
    margin-top: 1rem;
    background-color: #eee;
    padding: 1rem;
    border-radius: 8px;
  }
  
  .allergenes h3 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color: var(--primary-color);
  }
  
  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }
  
  .quantity-input {
    width: 60px;
    padding: 0.5rem;
    margin-right: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
  }
  
  .btn-action {
    padding: 0.75rem 1.5rem;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border: none;
    border-radius: var(--button-border-radius);
    cursor: pointer;
    text-decoration: none;
    font-family: var(--font-family-text);
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .btn-action:hover {
    background-color: var(--accent-color);
    transform: translateY(-2px);
  }
  
  .share {
    margin-top: 2rem;
  }
  
  .share h3 {
    font-size: 1.2rem;
    color: var(--primary-color);
    font-family: var(--font-family-text); /* Assurez-vous que la police est conforme */
  }
  
  .share-icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .share-icon {
    font-size: 1.5rem;
    color: #90aeb0; /* Couleur spécifiée */
    transition: color 0.3s ease;
  }
  
  .share-icon:hover {
    color: var(--accent-color);
  }
  </style>
  