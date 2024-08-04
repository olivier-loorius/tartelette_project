<template>
  <div class="actu">
    <section class="card" v-for="(item, index) in sections" :key="index">
      <h2>{{ item.title }}</h2>
      <div :class="{'card-content': true, 'reverse': index % 2 !== 0}">
        <img :src="item.image" :alt="item.title" />
        <div class="text-content">
          <p>{{ item.description }}</p>
          <button @click="toggleMore(index)">
            <span v-if="!item.showMore">En savoir plus</span>
            <span v-else>Voir moins</span>
          </button>
          <div v-if="item.showMore" class="more-content">
            <p>{{ item.more }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ActuView',
  data() {
    return {
      sections: [
        {
          title: 'Notre Projet',
          image: '@/assets/images/g1.jpg',
          description: 'Chez Amande, nous mettons le client au centre de notre projet.',
          more: 'Notre objectif est de vous permettre de créer vos propres tartelettes selon vos envies et besoins...',
          showMore: false
        },
        {
          title: 'Nouvelle Gamme de Tartelettes',
          image: '@/assets/images/g2.jpg',
          description: 'Découvrez notre nouvelle gamme de tartelettes aux fruits exotiques.',
          more: 'Disponibles dès le mois prochain, ces nouvelles tartelettes sont faites avec des ingrédients frais...',
          showMore: false
        },
        {
          title: 'Atelier de Pâtisserie',
          image: '@/assets/images/g3.jpg',
          description: 'Participez à notre atelier de pâtisserie et apprenez à créer vos propres tartelettes.',
          more: 'Nos chefs vous guideront à travers chaque étape pour créer des tartelettes parfaites...',
          showMore: false
        },
        // Ajoutez d'autres sections ici...
      ]
    };
  },
  methods: {
    toggleMore(index) {
      this.sections[index].showMore = !this.sections[index].showMore;
    }
  }
};
</script>

<style scoped>
.actu {
  padding: 2rem;
  font-family: var(--font-family-text);
  background-color: #f8f8f8;
}

.card {
  background-color: #ffffff;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.card h2 {
  font-family: var(--font-family-title);
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.card-content {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.card-content.reverse {
  flex-direction: row-reverse;
}

.card img {
  width: 300px;
  height: auto;
  border-radius: var(--border-radius);
  margin-right: 2rem;
}

.card-content.reverse img {
  margin-right: 0;
  margin-left: 2rem;
}

.text-content {
  flex: 1;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: var(--button-border-radius);
  background-color: var(--accent-color);
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--accent-color-light);
}

.more-content {
  margin-top: 1rem;
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: var(--border-radius);
}

@media (max-width: 768px) {
  .card-content {
    flex-direction: column;
  }

  .card-content.reverse {
    flex-direction: column;
  }

  .card img {
    margin: 0 0 1rem 0;
    width: 100%;
    height: auto;
  }
}
</style>
