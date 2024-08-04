<template>
    <div class="under-construction">
      <h1>Page en Construction</h1>
      <p>Cette fonctionnalité est actuellement en cours de développement. Merci de votre compréhension.</p>
      <i class="fas fa-tools icon"></i>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UnderConstructionView',
    mounted() {
      setTimeout(() => {
        this.$router.push('/');
      }, 3000); // Redirige vers la page d'accueil après 3 secondes
    }
  };
  </script>
  
  <style scoped>
  .under-construction {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    font-family: var(--font-family-text);
    color: var(--text-color);
    background-color: #f1e7dd;
  }
  
  .under-construction h1 {
    font-family: var(--font-family-title);
    color: var(--primary-color);
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .under-construction p {
    font-family: var(--font-family-text);
    color: var(--text-color);
    margin-bottom: 1.5rem;
  }
  
  .under-construction .icon {
    font-size: 3rem;
    color: #90aeb0;
  }
  </style>
  