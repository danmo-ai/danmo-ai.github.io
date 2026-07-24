<script setup lang="ts">
import { ref } from 'vue'
import ProductHero from '../components/ProductHero.vue'
import { useReveal } from '../composables/useReveal'

const root = ref<HTMLElement | null>(null)
useReveal(root)

const pillars = [
  {
    title: 'Pure LLM-driven',
    copy: 'No hand-maintained graph, role router, or mode switch. The model plans Tool Calls on one Agent Loop — full use of its reasoning and chain-of-thought.',
  },
  {
    title: 'Same thinking chain',
    copy: 'Multi-agent delegation via delegate_agent with hard context isolation. The child returns a Report; the parent continues on the same chain.',
  },
  {
    title: 'Everything is a Tool',
    copy: 'Sub-agents, skills, knowledge, memory, files, MCP, and ask_user — one abstraction. Humans join the loop; co-thinking, not command-and-forget.',
  },
  {
    title: 'Log is state',
    copy: 'Every Tool Call is persisted. Resume, replay, and visualize the thinking process through ultra-long runs — edit a result and continue.',
  },
]
</script>

<template>
  <div ref="root">
    <ProductHero
      name="Work"
      accent="#2a7a82"
      tagline="Pure LLM-driven multi-agent collaboration on one thinking chain."
      lede="A general-purpose Work Agent for long-horizon complex tasks. No fixed workflows — the model drives everything. Tool calls are logged end-to-end so you can resume, replay, and see the thinking stream."
      github="https://github.com/danmo-ai/danmo-work"
    />

    <section class="shots container">
      <figure class="reveal featured">
        <img
          src="/screenshots/ui-browser-annotate.png"
          alt="Select a page element and annotate to request an edit"
          width="3456"
          height="2168"
        />
        <figcaption>
          Point at the page — click a DOM element, add a note, inject into Composer. Select → annotate →
          edit.
        </figcaption>
      </figure>

      <div class="pair">
        <figure class="reveal" style="transition-delay: 80ms">
          <img
            src="/screenshots/ui-market-report.png"
            alt="Research report generated in Danmo Work"
            width="3456"
            height="2168"
          />
          <figcaption>Research &amp; HTML report with live preview</figcaption>
        </figure>
        <figure class="reveal" style="transition-delay: 140ms">
          <img
            src="/screenshots/ui-cooking-demo.png"
            alt="Interactive cooking demo in Danmo Work"
            width="3456"
            height="2168"
          />
          <figcaption>Interactive demo with playback controls</figcaption>
        </figure>
      </div>

      <figure class="reveal" style="transition-delay: 100ms">
        <img
          src="/screenshots/ui-snake-game.png"
          alt="Snake game built with Danmo Work"
          width="3456"
          height="2168"
        />
        <figcaption>Ship a playable page, then iterate with element annotate</figcaption>
      </figure>
    </section>

    <section class="pillars container">
      <h2 class="reveal">Core difference</h2>
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

    <section class="shots container">
      <h2 class="reveal section-title">WeChat channel</h2>
      <p class="reveal section-lede">
        One WeChat account, multiple projects. Chat from your phone; each conversation stays in its
        project and syncs with the desktop.
      </p>
      <div class="pair weixin">
        <figure class="reveal" style="transition-delay: 80ms">
          <img
            src="/screenshots/wx1.png"
            alt="WeChat-tagged session in Danmo Work desktop"
            width="3456"
            height="2168"
          />
          <figcaption>Desktop — WeChat-tagged session in the bound project</figcaption>
        </figure>
        <figure class="reveal" style="transition-delay: 140ms">
          <img
            src="/screenshots/wx2.png"
            alt="DQ-Teams AI chat in WeChat on phone"
            width="1170"
            height="2532"
          />
          <figcaption>Phone — same Agent Loop, tools on your machine</figcaption>
        </figure>
      </div>
    </section>

    <section class="shots container">
      <h2 class="reveal section-title">Experts, skills &amp; runtime</h2>
      <p class="reveal section-lede">
        Capability units you give the model — not a hand-maintained workflow graph.
      </p>
      <div class="trio">
        <figure class="reveal" style="transition-delay: 60ms">
          <img
            src="/screenshots/ui-expert-prompts.png"
            alt="Expert system prompt editor"
            width="3456"
            height="2168"
          />
          <figcaption>Expert prompt editor</figcaption>
        </figure>
        <figure class="reveal" style="transition-delay: 120ms">
          <img
            src="/screenshots/ui-skill-editor.png"
            alt="Skill library editor"
            width="3456"
            height="2168"
          />
          <figcaption>Skill library (Agentskills)</figcaption>
        </figure>
        <figure class="reveal" style="transition-delay: 180ms">
          <img
            src="/screenshots/ui-runtime-settings.png"
            alt="Runtime and sandbox settings"
            width="3456"
            height="2168"
          />
          <figcaption>Runtime — delegation depth &amp; OS sandbox</figcaption>
        </figure>
      </div>
    </section>

    <section class="workspace container reveal">
      <h2>Three-pane workspace</h2>
      <p>
        Project sidebar · agent execution log · right panel (Plan / Files / Memory / Changes /
        Terminal / Browser). Describe a goal, watch tools stream, join via ask_user or page annotate —
        peer collaboration on long-horizon work.
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
  height: auto;
  display: block;
  object-fit: contain;
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

.pair.weixin {
  align-items: start;
}

.pair.weixin figure:last-child img {
  max-width: 22rem;
  margin-inline: auto;
}

.trio {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.035em;
  margin-bottom: 0.75rem;
}

.section-lede {
  color: var(--label-muted);
  font-weight: 300;
  max-width: 40rem;
  margin-bottom: 1.75rem;
  line-height: 1.6;
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

@media (max-width: 900px) {
  .trio {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .pair {
    grid-template-columns: 1fr;
  }
}
</style>
