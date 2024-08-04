<template>
  <div class="home">
    <section class="hero">
      <div class="hero-background"></div>
      <div class="hero-content">
        <h1>Bienvenue chez Amande Tarterie</h1>
        <p>Chez Amande Tarterie, nos clients sont au cœur de tout ce que nous faisons. Nous vous offrons la possibilité de créer vos propres tartelettes, en choisissant parmi une sélection évolutive d'ingrédients de saison. Que vous ayez une envie spécifique ou que vous aimiez découvrir de nouvelles saveurs, notre carte change au fil des saisons pour toujours vous proposer des créations gourmandes et uniques. Venez composer votre tartelette personnalisée ou laissez-vous tenter par nos délicieuses tartelettes faites maison.</p>
        <div class="hero-buttons">
          <router-link to="/composer" class="btn-primary">Composer votre propre tartelette</router-link>
          <router-link to="/catalogue" class="btn-secondary">Découvrir nos tartelettes</router-link>
        </div>
      </div>
    </section>
    
    <section class="preview-actu">
      <h2>Dernières Actualités</h2>
      <div class="actu-cards">
        <div class="card" v-for="(item, index) in previewSections" :key="index">
          <img :src="item.image" :alt="item.title" />
          <div class="card-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <router-link :to="item.link" class="btn-more">En savoir plus</router-link>
          </div>
        </div>
      </div>
      <router-link to="/actu" class="btn-view-all">Voir toutes les actualités</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      previewSections: [
        {
          title: 'Notre Projet',
          image: '@/assets/images/g1.jpg',
          description: 'Chez Amande, nous mettons le client au centre de notre projet.',
          link: '/actu'
        },
        {
          title: 'Nouvelle Gamme de Tartelettes',
          image: '@/assets/images/g2.jpg',
          description: 'Découvrez notre nouvelle gamme de tartelettes aux fruits exotiques.',
          link: '/actu'
        },
        {
          title: 'Atelier de Pâtisserie',
          image: '@/assets/images/g3.jpg',
          description: 'Participez à notre atelier de pâtisserie et apprenez à créer vos propres tartelettes.',
          link: '/actu'
        }
      ]
    };
  }
};
</script>

<style scoped>
.hero {
  position: relative;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.hero-background {
  background-image: url('@/assets/images/AmandeBanner.jpg');
  background-size: cover;
  background-position: center;
  filter: grayscale(100%);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: var(--button-border-radius);
  text-align: left;
  max-width: 800px;
  width: 100%;
  box-sizing: border-box;
}

.hero h1 {
  font-family: var(--font-family-title);
  color: #dd8d74;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-family: var(--font-family-text);
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  display: inline-block;
  padding: var(--button-padding);
  border-radius: var(--button-border-radius);
  text-decoration: none;
  font-family: var(--font-family-text);
  transition: background-color 0.3s ease, transform 0.3s ease;
  color: #fff !important;
}

.btn-primary {
  background-color: #90aeb0 !important;
}

.btn-primary:hover {
  background-color: #b9594b !important;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: #dd8d74 !important;
}

.btn-secondary:hover {
  background-color: #be845f !important;
  transform: translateY(-2px);
}

.preview-actu {
  padding: 2rem;
  background-color: #f8f8f8;
}

.preview-actu h2 {
  font-family: var(--font-family-title);
  color: var(--primary-color);
  margin-bottom: 2rem;
  text-align: center;
}

.actu-cards {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background-color: #ffffff;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  width: 300px;
  text-align: left;
}

.card img {
  width: 100%;
  height: auto;
}

.card-content {
  padding: 1rem;
}

.card-content h3 {
  font-family: var(--font-family-title);
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.card-content p {
  font-family: var(--font-family-text);
  color: var(--text-color);
  font-size: 1rem;
  margin-bottom: 1rem;
}

.btn-more {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--accent-color);
  color: #fff;
  border-radius: var(--button-border-radius);
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn-more:hover {
  background-color: var(--accent-color-light);
}

.btn-view-all {
  display: block;
  margin: 2rem auto 0;
  padding: 0.75rem 1.5rem;
  background-color: #90aeb0;
  color: #fff;
  border-radius: var(--button-border-radius);
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease;
  font-family: var(--font-family-title);
}

.btn-view-all:hover {
  background-color: #be845f;
}

@media (max-width: 768px) {
  .hero {
    height: auto;
    padding: 1rem;
  }

  .hero-content {
    max-width: 100%;
    padding: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .btn-primary, .btn-secondary {
    width: 70%;
    text-align: center;
    margin: 0 auto;
  }

  .actu-cards {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
  }
}
</style>
