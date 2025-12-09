<!-- src/pages/Works.vue -->
<template>
  <main class="works-page">
    <header class="works-header">
      <h1 class="works-title">Découvrez mon travail</h1>
      <p class="works-sub">Parcourez mes projets selon le domaine.</p>
    </header>

    <!-- filtres / actions (optionnel) -->
    <div class="works-controls">
      <div class="filter-group">
        <button class="filter active">Tous</button>
        <button class="filter">Programmation</button>
        <button class="filter">ECommerce</button>
        <button class="filter">Design & UX / UI</button>
      </div>
    </div>

    <!-- grid des projets -->
    <section class="projects-grid">
      <router-link
        v-for="(p, i) in projects"
        :key="p.id"
        :to="{ name: 'Project', params: { id: p.id } }"
        class="project-card-link"
        aria-label="'Voir ' + p.title"
      >
        <article class="project-card">
          <div class="project-media" :style="{ backgroundImage: 'url(' + p.image + ')' }" aria-hidden="true"></div>
          <div class="project-body">
            <h3 class="project-title">{{ p.title }}</h3>
            <p class="project-meta">{{ p.type }} · {{ p.year }}</p>
            <p class="project-short" v-if="p.short">{{ p.short }}</p>
          </div>
        </article>
      </router-link>
    </section>
  </main>
</template>

<script>
import projectsList from "../data/projects.js";

export default {
  name: "WorksPage",
  data() {
    return {
      projects: projectsList
    };
  }
};
</script>

<style scoped>
.works-page{
  padding: 40px 80px;
  max-width: var(--content-max, 1500px);
  margin: 0 auto;
  color: var(--white);
}

/* header */
.works-header{
  display:flex;
  flex-direction:column;
  gap:8px;
  margin-bottom:18px;
}
.works-title{
  font-size: clamp(28px, 4vw, 42px);
  margin:0;
  font-weight:800;
}
.works-sub{
  color: var(--muted);
  margin:0;
  font-size: 14px;
}

/* controls */
.works-controls{display:flex;justify-content:space-between;align-items:center;margin:18px 0 26px}
.filter-group{display:flex;gap:12px}
.filter{
  background:transparent;
  border:1px solid rgba(255,255,255,0.04);
  color:var(--muted);
  padding:8px 12px;
  border-radius:8px;
  cursor:pointer;
}
.filter.active{
  border-color:var(--accent);
  color:var(--white);
  background: rgba(242,201,76,0.06);
}

/* projects grid */
.projects-grid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

/* Link wrapper reset */
.project-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

/* project card */
.project-card{
  background: rgba(255,255,255,0.03);
  border-radius:8px;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  min-height: 260px;
  box-shadow: 0 8px 18px rgba(0,0,0,0.45);
  transition: transform .18s, box-shadow .18s;
}
.project-card:hover{
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.55);
}
.project-media{
  height: 160px;
  background-size: cover;
  background-position: center;
}
.project-body{
  padding: 18px;
  display:flex;
  flex-direction:column;
  gap:8px;
}
.project-title{margin:0;font-weight:700}
.project-meta{margin:0;color:var(--muted);font-size:13px}
.project-short{margin:6px 0 0;color:var(--muted);font-size:13px}

/* responsive */
@media (max-width: 1100px){
  .projects-grid{grid-template-columns: repeat(2, 1fr)}
  .works-page{padding: 28px}
}
@media (max-width: 700px){
  .projects-grid{grid-template-columns: 1fr}
}
</style>