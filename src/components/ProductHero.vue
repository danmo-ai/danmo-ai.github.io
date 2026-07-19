<script setup lang="ts">
defineProps<{
  name: string
  accent: string
  tagline: string
  lede: string
  github: string
}>()
</script>

<template>
  <div class="product-page">
    <section class="hero">
      <div class="wash" :style="{ '--accent': accent }" aria-hidden="true" />
      <div class="container">
        <div class="hero-inner">
          <p class="eyebrow" :style="{ color: accent }">{{ name }}</p>
          <h1>{{ tagline }}</h1>
          <p class="lede">{{ lede }}</p>
          <div class="ctas">
            <a
              class="btn primary"
              :style="{ background: accent }"
              :href="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <slot name="cta" />
          </div>
        </div>
      </div>
    </section>

    <section class="body">
      <div class="container">
        <slot />
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  padding: clamp(7.5rem, 16vh, 10rem) 0 clamp(3.5rem, 8vh, 5rem);
  overflow: hidden;
  isolation: isolate;
}

.wash {
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(ellipse 55% 50% at 20% 0%, color-mix(in srgb, var(--accent) 35%, transparent), transparent 60%),
    radial-gradient(ellipse 40% 40% at 90% 30%, rgba(42, 122, 130, 0.18), transparent 50%),
    var(--ink);
}

.hero > .container {
  position: relative;
  z-index: 1;
}

.hero-inner {
  position: relative;
  max-width: 40rem;
  animation: rise 0.9s var(--ease-out) both;
}

.eyebrow {
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 1rem;
}

h1 {
  font-family: var(--font-display);
  font-size: clamp(2.1rem, 5vw, 3.25rem);
  font-weight: 700;
  letter-spacing: -0.045em;
  line-height: 1.1;
}

.lede {
  margin-top: 1.15rem;
  color: var(--label-muted);
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.6;
}

.ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.75rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  padding: 0.65rem 1.25rem;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 4px;
  transition: transform 0.25s var(--ease-out), filter 0.25s var(--ease-out);
}

.btn.primary {
  color: #fff;
}

.btn.primary:hover {
  transform: translateY(-1px);
  filter: brightness(1.08);
}

.body {
  padding-bottom: clamp(4rem, 10vh, 7rem);
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
