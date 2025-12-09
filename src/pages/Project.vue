<!-- src/pages/Project.vue -->
<template>
  <main class="project-page" v-if="loaded">
    <div v-if="project" class="project-wrap">
      <header class="project-header">
        <div class="project-media-large" :style="{ backgroundImage: 'url(' + project.image + ')' }" aria-hidden="true"></div>
        <div class="project-info">
          <h1 class="project-title">{{ project.title }}</h1>
          <p class="project-meta">{{ project.type }} · {{ project.year }}</p>
          <p class="project-short">{{ project.short }}</p>

          <div class="project-actions">
            <router-link class="btn-back" to="/works">← Retour aux projets</router-link>
            <a
              v-if="project.external"
              :href="project.external"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-visit"
            >Visiter le projet</a>
          </div>
        </div>
      </header>

      <section class="project-body">
        <h2>Description</h2>
        <p class="lead">{{ project.description }}</p>

        <div class="project-meta-grid">
          <div>
            <strong>Rôle</strong>
            <p>{{ project.role }}</p>
          </div>
          <div>
            <strong>Tech</strong>
            <p>{{ project.tech.join(", ") }}</p>
          </div>
        </div>
      </section>
    </div>

    <div v-else class="not-found">
      <h2>Projet introuvable</h2>
      <p>Le projet demandé n'existe pas ou a été déplacé.</p>
      <router-link class="btn-back" to="/works">← Retour aux projets</router-link>
    </div>
  </main>
</template>

<script>
import projectsList from "../data/projects.js";

export default {
  name: "ProjectPage",
  data() {
    return {
      project: null,
      loaded: false
    };
  },
  created() {
    this.loadProject();
  },
  watch: {
    // si l'utilisateur navigue vers un autre id en restant sur la page
    "$route.params.id": "loadProject"
  },
  methods: {
    loadProject() {
      const id = this.$route.params.id;
      // recherche par id (string)
      const found = projectsList.find((p) => p.id === id);
      this.project = found || null;
      this.loaded = true;
    }
  }
};
</script>

<style scoped>
.project-page{
  padding: 40px 80px;
  max-width: var(--content-max, 1500px);
  margin: 0 auto;
  color: var(--white);
}

/* header area */
.project-header{
  display:flex;
  gap:28px;
  align-items:flex-start;
  margin-bottom:28px;
}
.project-media-large{
  width: 520px;
  height: 320px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 12px 30px rgba(0,0,0,0.5);
}

/* info column */
.project-info{
  flex:1;
  min-width: 260px;
}
.project-title{
  margin:0 0 8px 0;
  font-size: clamp(26px, 3.6vw, 38px);
  font-weight:800;
}
.project-meta{ color: var(--muted); margin:0 0 12px 0; }
.project-short{ margin:0 0 18px 0; color:var(--muted) }

/* actions */
.project-actions{ display:flex; gap:12px; margin-top:6px; align-items:center }
.btn-back{
  display:inline-block;
  padding:8px 12px;
  border-radius:10px;
  background:transparent;
  color:var(--muted);
  border:1px solid rgba(255,255,255,0.04);
  text-decoration:none;
}
.btn-visit{
  display:inline-block;
  padding:8px 12px;
  border-radius:10px;
  background: linear-gradient(180deg, rgba(242,201,76,0.98), rgba(240,179,58,0.98));
  color:#111;
  text-decoration:none;
  font-weight:700;
}

/* body */
.project-body{ margin-top:18px }
.project-body h2{ margin:0 0 8px 0 }
.lead{ color:var(--muted); line-height:1.6 }

/* meta grid */
.project-meta-grid{
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
  margin-top:20px;
}
.project-meta-grid strong{ display:block; margin-bottom:8px; color:var(--white) }

/* not found */
.not-found{ text-align:center; padding:80px 20px; color:var(--muted) }

/* responsive */
@media (max-width: 1000px){
  .project-header{ flex-direction: column; }
  .project-media-large{ width: 100%; height: 260px; }
  .project-meta-grid{ grid-template-columns: 1fr; }
}
@media (max-width: 700px){
  .project-page{ padding: 28px }
}
</style>