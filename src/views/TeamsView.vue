<script setup lang="ts">
import { ref } from 'vue'
import ProductHero from '../components/ProductHero.vue'
import { useReveal } from '../composables/useReveal'

const root = ref<HTMLElement | null>(null)
useReveal(root)

const pillars = [
  {
    title: 'Everything is a Tool',
    copy: 'Sub-agents, skills, knowledge, files, MCP, and ask_user — one abstraction, one Agent Loop, one Turn Log.',
  },
  {
    title: 'Pure LLM-driven control',
    copy: 'No developer-maintained graph or mode switch. The model plans Tool Call DAGs on a single thinking chain.',
  },
  {
    title: 'Log is state',
    copy: 'Every call is persisted. Replay, retry from a step, or edit a Tool Result and continue.',
  },
]
</script>

<template>
  <div ref="root">
    <ProductHero
      name="Teams"
      accent="#2a7a82"
      tagline="A real-time collaboration OS for co-thinking."
      lede="DanQing Teams is a general-purpose Work Agent with coding ability — not an agent toy, not an IDE. Describe a goal. Watch the Trace. Open the result in a live browser."
      github="https://github.com/danqing-ai/danqing-teams"
    />

    <section class="shots container">
      <figure class="reveal">
        <img
          src="/screenshots/ui-market-report.jpg"
          alt="Research report generated in DanQing Teams"
          width="1400"
          height="875"
        />
        <figcaption>Research &amp; HTML report with live preview</figcaption>
      </figure>
      <div class="pair">
        <figure class="reveal" style="transition-delay: 80ms">
          <img
            src="/screenshots/ui-cooking-demo.jpg"
            alt="Interactive cooking demo in DanQing Teams"
            width="900"
            height="560"
          />
          <figcaption>Interactive demo with playback controls</figcaption>
        </figure>
        <figure class="reveal" style="transition-delay: 140ms">
          <img
            src="/screenshots/ui-snake-game.jpg"
            alt="Snake game built with DanQing Teams"
            width="900"
            height="560"
          />
          <figcaption>Mini-game, then iterate via UI annotations</figcaption>
        </figure>
      </div>
    </section>

    <section class="pillars container">
      <h2 class="reveal">Why it feels different</h2>
      <ul>
        <li
          v-for="(p, i) in pillars"
          :key="p.title"
          class="reveal"
          :style="{ transitionDelay: `${i * 70}ms` }"
        >
          <h3>{{ p.title }}</h3>
          <p>{{ p.copy }}</p>
        </li>
      </ul>
    </section>

    <section class="workspace container reveal">
      <h2>Three-pane workspace</h2>
      <p>
        Project sidebar · agent execution Trace · live browser preview. Pick a project and model,
        describe the goal, and stay in the reasoning stream as a peer — approvals, terminal, and
        browser included.
      </p>
    </section>
  </div>
</template>

<style scoped>
.shots {
  display: grid;
  gap: 1.25rem;
  padding-bottom: 4rem;
}

.shots img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.shots figcaption {
  margin-top: 0.75rem;
  font-size: 0.8rem;
  color: var(--label-faint);
}

.pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.pillars {
  padding-bottom: 4rem;
}

.pillars h2,
.workspace h2 {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.035em;
  margin-bottom: 2rem;
}

.pillars ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--ink-line);
}

.pillars li {
  padding: 1.75rem 0;
  border-bottom: 1px solid var(--ink-line);
  border-left: 3px solid transparent;
  padding-left: 1.15rem;
  transition: border-color 0.3s var(--ease-out);
}

.pillars li:hover {
  border-left-color: var(--mineral);
}

.pillars h3 {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.pillars p {
  color: var(--label-muted);
  max-width: 40rem;
  font-weight: 300;
}

.workspace {
  padding-bottom: 2rem;
  max-width: 40rem;
}

.workspace p {
  color: var(--label-muted);
  font-weight: 300;
  font-size: 1.05rem;
  line-height: 1.65;
  margin-top: -0.5rem;
}

@media (max-width: 700px) {
  .pair {
    grid-template-columns: 1fr;
  }
}
</style>
