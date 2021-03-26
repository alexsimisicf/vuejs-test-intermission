<template>
  <nav class="nav">
    <input type="checkbox" id="nav-toggle" />
    <div class="logo">
      <img
        alt="Connecting Food logo"
        src="@/assets/images/logo.png"
        class="brand"
      />
    </div>
    <ul class="links">
      <li>
        <router-link to="/">Accueil</router-link>
      </li>
      <li>
        <router-link to="/alerts">Alertes</router-link>
      </li>
      <li>
        <router-link to="/ecosystem">Référentiel</router-link>
      </li>
      <li>
        <router-link to="/specifications">Cahiers des charges</router-link>
      </li>
      <li>
        <router-link to="/data">Données</router-link>
      </li>
      <li>
        <router-link to="/settings">Paramètres</router-link>
      </li>
    </ul>
    <label for="nav-toggle" class="icon-burger">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </label>
  </nav>
</template>

<style scoped lang="css">
img {
  width: 100px;
}

nav {
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  height: 100px;
  padding: 0 5%;
  color: #074fa0;
  background-color: #f1f3f5;
}

nav .logo {
  float: left;
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 24px;
}

nav .links {
  float: right;
  margin: 0;
  padding: 0;
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

nav .links li {
  list-style: none;
}

nav .links a {
  display: block;
  padding: 1em;
  font-size: 12px;
  font-weight: 900;
  color: #074fa0;
  text-decoration: none;
}

nav .links a.router-link-exact-active {
  color: #1c5d41;
  text-decoration: 3px underline;
}

#nav-toggle {
  position: absolute;
  top: -100px;
}

nav .icon-burger {
  display: none;
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
}

nav .icon-burger .line {
  width: 30px;
  height: 5px;
  background-color: #074fa0;
  margin: 5px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
}

@media screen and (max-width: 768px) {
  nav .logo {
    float: none;
    width: auto;
    justify-content: center;
  }

  nav .links {
    float: none;
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 100px;
    bottom: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: rgba(7, 79, 160, 0.8);
    width: auto;
    height: auto;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }

  nav .links a {
    color: #f1f3f5;
    font-size: 15px;
  }

  nav :checked ~ .links {
    bottom: 0;
  }

  nav .icon-burger {
    display: block;
    cursor: pointer;
  }

  nav :checked ~ .icon-burger .line:nth-child(1) {
    transform: translateY(10px) rotate(225deg);
  }

  nav :checked ~ .icon-burger .line:nth-child(3) {
    transform: translateY(-10px) rotate(-225deg);
  }

  nav :checked ~ .icon-burger .line:nth-child(2) {
    opacity: 0;
  }
}
</style>
