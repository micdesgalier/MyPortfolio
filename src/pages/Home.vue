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
            Product Designer and<br />
            Developer, based in Montreux.
          </h2>

          <p class="lead">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam.
          </p>

          <a class="cta" href="#" @click.prevent>Mon Histoire →</a>
        </div>
      </section>
    </section>

    <!-- ---------- CONTACT / QUOTE / SERVICES (band full width) ---------- -->
    <!-- .contact-section est full-bleed ; .contact-inner recentre le contenu -->
    <section class="contact-section" aria-labelledby="contact-heading">
      <div class="contact-inner">
        <!-- two-column area: left = contact, right = quote + stats -->
        <div class="contact-grid">
          <div class="contact-left">
            <small class="contact-label">— Contact</small>
            <h3 id="contact-heading" class="contact-title">Any Type Of Query<br>&amp; Discussion.</h3>
            <p class="contact-desc">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </p>

            <div class="contact-line">
              <a class="contact-email" href="mailto:desgaliermichael@gmail.com">desgaliermichael@gmail.com</a>
              <a class="contact-cta" href="#" @click.prevent>→</a>
            </div>
          </div>

          <div class="contact-right">
            <blockquote class="quote">
              You can't use up creativity, <br />
              the more you use, more you have in your significant mind.
            </blockquote>

            <p class="quote-desc">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
            </p>

            <div class="stats-row">
              <div class="stat">
                <div class="stat-number">14</div>
                <div class="stat-label">Years of Experience.</div>
              </div>

              <div class="stat">
                <div class="stat-number">187</div>
                <div class="stat-label">Satisfied Clients.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- services / cards row (restreint au centre via .contact-inner) -->
        <div class="services-grid">
          <div class="service-card featured">
            <div class="service-icon">□</div>
            <h4 class="service-title">Product Designer.</h4>
            <div class="service-count">124 Projects</div>
          </div>

          <div class="service-card">
            <div class="service-icon">✦</div>
            <h4 class="service-title">Branding Designer.</h4>
            <div class="service-count">37 Projects</div>
          </div>

          <div class="service-card">
            <div class="service-icon">▣</div>
            <h4 class="service-title">Full Stack Developer.</h4>
            <div class="service-count">62 Projects</div>
          </div>
        </div>
      </div> <!-- .contact-inner -->
    </section>
  </main>
</template>

<script>
export default {
  name: "HomePage"
};
</script>