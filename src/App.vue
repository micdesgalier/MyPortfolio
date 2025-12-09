<template>
  <div class="page">
    <header class="topbar">
      <div class="logo">LOGO</div>
      <nav class="nav" aria-label="Main navigation">
        <div class="nav-inner">
          <router-link to="/" exact class="nav-link">Accueil</router-link>
          <router-link to="/works" class="nav-link">Projets</router-link>
          <router-link to="/myhistory" class="nav-link">Mon Parcours</router-link>
        </div>
      </nav>
    </header>

    <!-- point d'injection des pages -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>