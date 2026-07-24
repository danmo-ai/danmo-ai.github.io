<script setup lang="ts">
import { ref } from 'vue'
import ProductHero from '../components/ProductHero.vue'
import { useReveal } from '../composables/useReveal'

const root = ref<HTMLElement | null>(null)
useReveal(root)

const views = [
  {
    name: 'Today',
    copy: 'Urgent, due today, waiting, and in progress — a focus surface instead of an endless inbox.',
  },
  {
    name: 'Timeline',
    copy: 'Chronological flow of extracted events and thread activity across accounts.',
  },
  {
    name: 'Topics',
    copy: 'Similarity clustering turns threads into themes you can skim and act on.',
  },
  {
    name: 'Todos',
    copy: 'Action items pulled from mail — snooze, archive, and close the loop.',
  },
]
</script>

<template>
  <div ref="root">
    <ProductHero
      name="Inbox"
      accent="#c4a574"
      tagline="AI-driven email information flow."
      lede="Danmo Inbox is not another full mail client. It syncs IMAP, extracts events with an LLM, and reorganizes your stream into Today, topics, and todos — so attention goes where it should."
      github="https://github.com/danmo-ai/danmo-inbox"
    />

    <section class="views container">
      <h2 class="reveal">Four ways to see your mail</h2>
      <ul>
        <li
          v-for="(v, i) in views"
          :key="v.name"
          class="reveal"
          :style="{ transitionDelay: `${i * 60}ms` }"
        >
          <h3>{{ v.name }}</h3>
          <p>{{ v.copy }}</p>
        </li>
      </ul>
    </section>

    <section class="stack container reveal">
      <h2>Aligned with Work</h2>
      <p>
        Same desktop DNA: Go backend, Vue 3 + Vite frontend, SQLite, Tauri 2, and the shared
        dq-ui macOS design system. Bring your own LLM endpoint and keys. Run beside Make and
        Work on the unified Danmo port map.
      </p>
    </section>
  </div>
</template>

<style scoped>
.views {
  padding-bottom: 4rem;
}

.views h2,
.stack h2 {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.035em;
  margin-bottom: 2rem;
}

.views ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 2.5rem;
}

.views h3 {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--lacquer);
  margin-bottom: 0.5rem;
}

.views p {
  color: var(--label-muted);
  font-weight: 300;
}

.stack {
  padding-bottom: 2rem;
  max-width: 40rem;
}

.stack p {
  color: var(--label-muted);
  font-weight: 300;
  font-size: 1.05rem;
  line-height: 1.65;
  margin-top: -0.5rem;
}

@media (max-width: 640px) {
  .views ul {
    grid-template-columns: 1fr;
  }
}
</style>
