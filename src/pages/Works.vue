<!-- src/pages/Works.vue -->
<template>
  <main class="works-page">
    <header class="works-header">
      <h1 class="works-title">Selected Works</h1>
      <p class="works-sub">Projets choisis — interface, branding & développement.</p>
    </header>

    <!-- filtres / actions (optionnel) -->
    <div class="works-controls">
      <div class="filter-group">
        <button class="filter active">All</button>
        <button class="filter">UX / UI</button>
        <button class="filter">Branding</button>
        <button class="filter">Web</button>
      </div>
    </div>

    <!-- grid des projets -->
    <section class="projects-grid">
      <!-- exemple de carte projet - duplique/ajoute autant que nécessaire -->
      <article class="project-card" v-for="(p, i) in projects" :key="i">
        <div class="project-media" :style="{ backgroundImage: 'url(' + p.image + ')' }" aria-hidden="true"></div>
        <div class="project-body">
          <h3 class="project-title">{{ p.title }}</h3>
          <p class="project-meta">{{ p.type }} · {{ p.year }}</p>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: "WorksPage",
  data() {
    return {
      // jeux d'exemples — remplace les images par tes assets dans /public ou /src/assets
      projects: [
        { title: "Project Alpha", type: "Product Design", year: "2024", image: "/placeholder-1.jpg" },
        { title: "Brand Refresh", type: "Branding", year: "2023", image: "/placeholder-2.jpg" },
        { title: "E-commerce UI", type: "Web", year: "2024", image: "/placeholder-3.jpg" },
        { title: "Analytics App", type: "Product Design", year: "2022", image: "/placeholder-4.jpg" },
        { title: "Marketing Site", type: "Web", year: "2023", image: "/placeholder-5.jpg" },
        { title: "Identity Pack", type: "Branding", year: "2024", image: "/placeholder-6.jpg" }
      ]
    }
  }
}
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

/* responsive */
@media (max-width: 1100px){
  .projects-grid{grid-template-columns: repeat(2, 1fr)}
  .works-page{padding: 28px}
}
@media (max-width: 700px){
  .projects-grid{grid-template-columns: 1fr}
}
</style>