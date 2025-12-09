<template>
  <main>
    <!-- HERO -->
    <section class="hero">
      <section class="hero-left">
        <div class="badge" aria-hidden="true"></div>

        <h1 class="name">
          Michaël<br />
          Desgalier.
        </h1>

        <div class="socials" aria-hidden="true">
          <a aria-label="dribbble" title="dribbble">◐</a>
          <a aria-label="instagram" title="instagram">◑</a>
          <a aria-label="linkedin" title="linkedin">◒</a>
        </div>
      </section>

      <section class="hero-right">
        <div class="hero-right-inner">
          <small class="intro-label">— Introduction</small>

          <h2 class="title">
            Développeur et étudiant<br />
            en Ingénierie des Médias.
          </h2>

          <p class="lead">
            Je conçois et pilote des solutions digitales alliant développement, stratégie, communication et expérience utilisateur.
            Avec une approche rigoureuse mêlant technique et créativité, je transforme des objectifs complexes en expériences impactantes, modernes et efficaces. 
          </p>

          <router-link class="cta" to="/myhistory">Mon Parcours →</router-link>
        </div>
      </section>
    </section>

    <!-- ---------- CONTACT / QUOTE / SERVICES (band full width) ---------- -->
    <!-- .contact-section est full-bleed ; .contact-inner recentre le contenu -->
    <section class="contact-section" aria-labelledby="contact-heading">
      <div class="contact-inner">
        <div class="contact-grid">
          <!-- gauche : cartes empilées -->
          <div class="contact-left">
            <div class="service-card featured">
              <div class="service-icon">▣</div>
              <h4 class="service-title">Programmation</h4>
              <div class="service-count">1 Projet</div>
            </div>

            <div class="service-card">
              <div class="service-icon">✦</div>
              <h4 class="service-title">ECommerce</h4>
              <div class="service-count">1 Projet</div>
            </div>

            <div class="service-card">
              <div class="service-icon">▣</div>
              <h4 class="service-title">Design & UI / UX</h4>
              <div class="service-count">3 Projets</div>
            </div>
          </div>

          <!-- droite : titre + texte + contact info -->
          <div class="contact-right">
            <h2 class="contact-title">Comment je vous aide ?</h2>
            <p class="contact-desc">
              Je vous accompagne sur l’ensemble du digital : de la conception technique à la stratégie, en passant par le design et l’expérience utilisateur.
              Grâce à mes compétences en développement, marketing, communication et UX/UI, je transforme vos besoins en solutions concrètes, performantes et esthétiques.
            </p>
            <p class="contact-desc">
              Mon objectif : créer des expériences digitales cohérentes, impactantes et centrées sur l’utilisateur, alliant créativité, design et rigueur technique.
            </p>

            <!-- NOUVEAU : Contact info sur la droite -->
            <aside class="contact-info" aria-label="Informations de contact">
              <div class="contact-line contact-item">
                <span class="contact-item-icon" aria-hidden="true">✉︎</span>
                <a class="contact-email contact-value" href="mailto:desgaliermichael@gmail.com">desgaliermichael@gmail.com</a>
              </div>

              <div class="contact-line contact-item">
                <span class="contact-item-icon" aria-hidden="true">☎</span>
                <a class="contact-value" href="tel:+41789121920">+41 78 912 19 20</a>
              </div>

              <div class="contact-actions">
                <a class="contact-cta-btn" href="mailto:desgaliermichael@gmail.com?subject=Demande%20de%20contact">Me contacter →</a>
                <router-link class="contact-cta-link" to="/works">Voir mes projets</router-link>
              </div>
            </aside>
            <!-- FIN contact-info -->
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "HomePage"
};
</script>