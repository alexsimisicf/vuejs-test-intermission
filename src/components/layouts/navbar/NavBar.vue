<template>
  <nav class="nav">
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

<style scoped lang="scss">
img {
  width: 100px;
}

.nav {
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  height: 100px;
  padding: 0 5%;
  color: #071f3a;
  background-color: #f1f3f5;
  .logo {
    float: left;
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 24px;
  }
  .links {
    float: right;
    margin: 0;
    padding: 0;
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      list-style: none;
    }
    a {
      display: block;
      padding: 1em;
      font-size: 12px;
      font-weight: 900;
      color: #071f3a;
      text-decoration: none;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .icon-burger {
    display: none;
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    .line {
      width: 30px;
      height: 5px;
      background-color: #071f3a;
      margin: 5px;
      border-radius: 3px;
      transition: all 0.3s ease-in-out;
    }
  }
}
</style>
