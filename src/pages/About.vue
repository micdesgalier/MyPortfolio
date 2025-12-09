<template>
  <main>
    <!-- HERO -->
    <section class="history-hero">
      <h1 class="history-title">Mon Parcours</h1>
      <p class="history-intro">
        Découvrez mon parcours professionnel et créatif, de mes débuts dans la programmation jusqu'à mes projets actuels en Ingénierie des Médias.
      </p>
    </section>

    <!-- TIMELINE VERTICALE -->
    <section class="timeline-section">
      <div class="timeline-line"></div>
      <div class="timeline-inner">
        <div
          class="timeline-event"
          v-for="(event, index) in timeline"
          :key="index"
          :class="index % 2 === 0 ? 'left' : 'right'"
        >
          <div class="timeline-bubble">{{ event.year }}</div>
          <div class="timeline-content">
            <h2 class="timeline-title">{{ event.title }}</h2>
            <p class="timeline-desc">{{ event.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "MonHistoirePage",
  data() {
    return {
      timeline: [
        { year: 2016, title: "Apprentissage", description: "Apprentissage en Informatique à l'ETML." },
        { year: 2020, title: " Ecole supérieur", description: "Ecole supérieur en Informatique de Gestion à l'ETML-ES." },
        { year: 2022, title: "Haute Ecole", description: "Haute école en Ingénierie des Médias à l'HEIG-VD." }
      ]
    };
  }
};
</script>

<style scoped>
/* HERO */
.history-hero {
  max-width: var(--content-max);
  margin: 80px auto 60px;
  padding: 0 80px;
  text-align: center;
}

.history-title {
  font-size: clamp(48px, 9vw, 84px);
  font-weight: 800;
  color: var(--white);
  margin-bottom: 20px;
  position: relative;
}

.history-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: var(--accent);
  margin: 16px auto 0;
  border-radius: 4px;
}

.history-intro {
  font-size: 18px;
  line-height: 1.8;
  color: var(--muted);
  max-width: 700px;
  margin: 0 auto;
}

/* TIMELINE VERTICALE */
.timeline-section {
  position: relative;
  padding-top: 10px;
}

.timeline-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background: var(--accent);
  transform: translateX(-50%);
}

.timeline-inner {
  max-width: var(--content-max);
  margin: 0 auto;
  position: relative;
}

.timeline-event {
  position: relative;
  width: 45%;
  padding: 20px 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  margin: 60px 0;
  box-shadow: 0 12px 28px rgba(0,0,0,0.5);
  transition: transform 0.3s, box-shadow 0.3s;
}

.timeline-event.left {
  left: 0;
}

.timeline-event.right {
  left: 55%;
}

.timeline-event:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
}

.timeline-bubble {
  position: absolute;
  top: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--accent);
  color: #1b1b1b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  box-shadow: 0 6px 14px rgba(0,0,0,0.4);
}

.timeline-event.left .timeline-bubble {
  right: -30px;
}

.timeline-event.right .timeline-bubble {
  left: -30px;
}

.timeline-title {
  color: var(--white);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}

.timeline-desc {
  color: var(--muted);
  font-size: 15px;
  line-height: 1.6;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .timeline-event,
  .timeline-event.left,
  .timeline-event.right {
    width: 90%;
    left: 5% !important;
  }
  .timeline-bubble {
    top: -30px;
    left: 50% !important;
    transform: translateX(-50%);
  }
  .timeline-line {
    left: 50%;
  }
}
</style>