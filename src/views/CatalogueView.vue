<template>
  <div class="catalogue">
    <div class="intro">
      <h1>Découvrez Nos Délicieuses Tartelettes</h1>
      <p>Parcourez notre sélection de tartelettes gourmandes. Si vous souhaitez personnaliser votre propre tartelette, cliquez sur le bouton ci-dessous. Nos tartelettes sont faites avec des ingrédients de qualité et préparées avec soin pour vous offrir une expérience gustative unique.</p>
      <router-link to="/composer" class="btn-compose">Composer votre propre tartelette</router-link>
    </div>
    <div class="catalogue-grid">
      <TarteletteCard v-for="tartelette in visibleTartelette" :key="tartelette.id" :tartelette="tartelette" />
    </div>
    <div class="catalogue-actions">
      <button v-if="showLoadMore" @click="loadMore" class="btn-action">
        <i class="fas fa-plus"></i> Voir plus
      </button>
      <button @click="scrollToTop" class="btn-action">
        <i class="fas fa-arrow-up"></i> Retour en haut
      </button>
    </div>
    <div class="old-products">
      <h2>Nos Anciennes Tartelettes</h2>
      <p>Découvrez certaines de nos anciennes créations qui ont fait le bonheur de nos clients.</p>
      <div class="carousel-container">
        <button class="carousel-control left" @click="prevSlide">
          <i class="fas fa-chevron-left"></i>
        </button>
        <div class="carousel">
          <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="(oldTartelette, index) in oldTartelettes" :key="index" class="carousel-item">
              <div class="tartelette-card">
                <img :src="oldTartelette.image" :alt="oldTartelette.title" />
                <h3>{{ oldTartelette.title }}</h3>
                <p>{{ oldTartelette.description }}</p>
                <router-link :to="{ name: 'TarteletteDetails', params: { id: oldTartelette.id } }" class="btn-details">Plus de détails</router-link>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control right" @click="nextSlide">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TarteletteCard from '@/components/TarteletteCard.vue';

export default {
  components: {
    TarteletteCard
  },
  data() {
    return {
      tartelettes: [
        { id: 1, image: require('@/assets/images/tarteletteFraises.jpeg'), title: 'Tartelette 1', description: 'Délicieuse tartelette 1', price: 6.50 },
        { id: 2, image: require('@/assets/images/tarteletteFraises.jpeg'), title: 'Tartelette 2', description: 'Délicieuse tartelette 2', price: 6.50 },
        { id: 3, image: require('@/assets/images/tarteletteFraises.jpeg'), title: 'Tartelette 3', description: 'Délicieuse tartelette 3', price: 6.50 },
        { id: 4, image: require('@/assets/images/tarteletteFraises.jpeg'), title: 'Tartelette 4', description: 'Délicieuse tartelettes 4', price: 6.50 },
        { id: 5, image: require('@/assets/images/tarteletteFraises.jpeg'), title: 'Tartelette 5', description: 'Délicieuse tartelette 5', price: 6.50 },
        { id: 6, image: require('@/assets/images/tarteletteFraises.jpeg'), title: 'Tartelette 6', description: 'Délicieuse tartelette 6', price: 6.50 },
        { id: 7, image: require('@/assets/images/tarteletteFraises.jpeg'), title: 'Tartelette 7', description: 'Délicieuse tartelette 7', price: 6.50 },
        { id: 8, image: require('@/assets/images/tarteletteFraises.jpeg'), title: 'Tartelette 8', description: 'Délicieuse tartelette 8', price: 6.50 },
        { id: 9, image: require('@/assets/images/tarteletteFraises.jpeg'), title: 'Tartelette 9', description: 'Délicieuse tartelette 9', price: 6.50 },
        { id: 10, image: require('@/assets/images/tarteletteFraises.jpeg'), title: 'Tartelette 10', description: 'Délicieuse tartelette 10', price: 6.50 },
        { id: 11, image: require('@/assets/images/tarteletteFraises.jpeg'), title: 'Tartelette 11', description: 'Délicieuse tartelette 11', price: 6.50 },
        { id: 12, image: require('@/assets/images/tarteletteFraises.jpeg'), title: 'Tartelette 12', description: 'Délicieuse tartelette 12', price: 6.50 },
      ],
      oldTartelettes: [
        { id: 13, image: require('@/assets/images/tarteletteFraises.jpeg'), title: 'Ancienne Tartelette 1', description: 'Description ancienne tartelette 1' },
        { id: 14, image: require('@/assets/images/tarteletteFraises.jpeg'), title: 'Ancienne Tartelette 2', description: 'Description ancienne tartelette 2' },
        { id: 15, image: require('@/assets/images/tarteletteFraises.jpeg'), title: 'Ancienne Tartelette 3', description: 'Description ancienne tartelette 3' },
      ],
      visibleCount: 9,
      currentIndex: 0,
      interval: null
    };
  },
  computed: {
    visibleTartelette() {
      return this.tartelettes.slice(0, this.visibleCount);
    },
    showLoadMore() {
      return this.visibleCount < this.tartelettes.length;
    }
  },
  methods: {
    loadMore() {
      this.visibleCount += 9;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    startCarousel() {
      this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.oldTartelettes.length;
      }, 3000);
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.oldTartelettes.length) % this.oldTartelettes.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.oldTartelettes.length;
    },
    stopCarousel() {
      clearInterval(this.interval);
    }
  },
  mounted() {
    this.startCarousel();
  },
  beforeUnmount() {
    this.stopCarousel();
  }
};
</script>

<style scoped>
.catalogue {
  text-align: center;
  padding: 2rem;
  margin: 0 auto;
  max-width: 1200px;
}

.intro {
  margin-bottom: 2rem;
  background-color: #f1e7dd;
  padding: 2rem;
  border-radius: 8px;
}

.intro h1 {
  font-family: var(--font-family-title);
  color: var(--primary-color);
  font-size: 2rem;
  margin-bottom: 1rem;
}

.intro p {
  font-family: var(--font-family-text);
  color: var(--text-color);
  margin-bottom: 1.5rem;
}

.btn-compose {
  display: inline-block;
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

.btn-compose:hover {
  background-color: var(--accent-color);
  transform: translateY(-2px);
}

.catalogue-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.catalogue-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 2rem;
}

.btn-action {
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: var(--button-border-radius);
  cursor: pointer;
  font-family: var(--font-family-text);
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-action i {
  font-size: 1.2rem;
}

.btn-action:hover {
  background-color: var(--accent-color);
  transform: translateY(-2px);
}

.old-products {
  margin-top: 4rem;
  padding: 2rem;
  background-color: #eeeeee;
  border-radius: 8px;
}

.old-products h2 {
  font-family: var(--font-family-title);
  color: var(--primary-color);
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.old-products p {
  font-family: var(--font-family-text);
  color: var(--text-color);
  margin-bottom: 2rem;
}

.carousel-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 33.33%;
  box-sizing: border-box;
  padding: 1rem;
}

.tartelette-card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
}

.tartelette-card img {
  max-width: 100%;
  border-radius: 8px;
  aspect-ratio: 1 / 1;
}

.tartelette-card h3 {
  font-family: var(--font-family-title);
  color: var(--primary-color);
  margin: 1rem 0 0.5rem;
}

.tartelette-card p {
  font-family: var(--font-family-text);
  color: var(--text-color);
  margin-bottom: 1rem;
}

.btn-details {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: none;
  border-radius: var(--button-border-radius);
  cursor: pointer;
  text-decoration: none;
  font-family: var(--font-family-text);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-details:hover {
  background-color: var(--accent-color);
  transform: translateY(-2px);
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 10;
}

.carousel-control.left {
  left: 10px;
}

.carousel-control.right {
  right: 10px;
}

.carousel-control i {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .catalogue-grid {
    grid-template-columns: 1fr;
  }

  .catalogue-actions {
    flex-direction: column;
    gap: 1rem;
  }

  .carousel-item {
    min-width: 100%;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .catalogue-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
