<template>
  <nav>
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/images/logo.png" alt="Logo d'Amande Tarterie" />
      </router-link>
    </div>
    <div class="menu" @click="toggleMenu">
      <div :class="{ 'menu-icon': true, open: isMenuOpen }"></div>
    </div>
    <ul :class="{ open: isMenuOpen }" @click="closeMenu">
      <li class="actu"><router-link to="/actu">ACTU</router-link></li>
      <li class="composer"><router-link to="/composer">COMPOSER</router-link></li>
      <li class="catalogue"><router-link to="/catalogue">CATALOGUE</router-link></li>
      <li class="connexion"><router-link to="/login">Connexion</router-link></li>
      <li class="panier"><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};
</script>

<style scoped>
@import '@/assets/styles/variables.css';

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--secondary-color);
  color: var(--text-color);
  box-shadow: var(--box-shadow);
  position: relative;
  height: 80px;
}

.logo {
  margin-left: 20px;
}

.logo img {
  height: 110px;
}

.menu {
  display: none;
  cursor: pointer;
  position: relative;
  z-index: 2;
}

.menu-icon {
  width: 30px;
  height: 3px;
  background-color: var(--primary-color);
  transition: all 0.3s ease-in-out;
  position: relative;
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  width: 30px;
  height: 3px;
  background-color: var(--primary-color);
  position: absolute;
  transition: all 0.3s ease-in-out;
}

.menu-icon::before {
  top: -10px;
}

.menu-icon::after {
  top: 10px;
}

.menu-icon.open {
  background-color: transparent;
}

.menu-icon.open::before {
  transform: rotate(45deg);
  top: 0;
}

.menu-icon.open::after {
  transform: rotate(-45deg);
  top: 0;
}

ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  padding: 0;
  margin: 0;
  align-items: center;
}

li {
  font-family: 'Roboto', sans-serif;
}

a {
  display: inline-block;
  padding: 0.5rem 0;
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: bold;
  position: relative;
}

.actu a::after, .composer a::after, .catalogue a::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: var(--accent-color);
  transition: width 0.3s;
  position: absolute;
  left: 0;
  bottom: -2px;
}

.actu a:hover::after, .composer a:hover::after, .catalogue a:hover::after {
  width: 100%;
}

a:hover {
  color: var(--accent-color);
}

.logo a {
  text-decoration: none;
}

.connexion a {
  background-color: #90aeb0;
  color: var(--secondary-color);
  border: 2px solid #90aeb0;
  font-weight: bold;
  padding: 0.5rem 1rem;
  box-shadow: var(--box-shadow);
  border-radius: var(--button-border-radius);
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.connexion a:hover {
  background-color: #fff;
  color: #90aeb0;
}

.panier a {
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-radius: var(--button-border-radius);
  display: inline-block;
  border: 2px solid var(--primary-color);
  text-decoration: none;
}

.panier a:hover {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
}

@media (max-width: 768px) {
  .menu {
    display: block;
  }

  ul {
    display: none;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--secondary-color);
    padding-top: 80px;
    z-index: 1;
    text-align: center;
  }

  ul.open {
    display: flex;
  }

  ul li {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  ul li.connexion a {
    padding: 0.5rem 1rem;
    width: auto;
  }

  .logo img {
    height: 90px;
  }

  .menu-icon.open + ul .logo img {
    height: 90px;
  }

  .menu-icon.open + ul {
    transform: translateY(0);
  }
}
</style>
