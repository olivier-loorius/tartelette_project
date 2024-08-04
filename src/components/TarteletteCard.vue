<template>
    <div class="tartelette-card">
      <img :src="tartelette.image" :alt="tartelette.title" />
      <h3>{{ tartelette.title }}</h3>
      <p>{{ tartelette.description }}</p>
      <p class="price">{{ tartelette.price.toFixed(2) }} €</p>
      <router-link :to="{ name: 'TarteletteDetails', params: { id: tartelette.id } }" class="btn-details">Plus de détails</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TarteletteCard',
    props: {
      tartelette: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
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
  
  .price {
    font-weight: bold;
    color: var(--accent-color);
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
  </style>
  