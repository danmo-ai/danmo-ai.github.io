<script setup lang="ts">
import { ref } from 'vue'
import ProductHero from '../components/ProductHero.vue'
import { useReveal } from '../composables/useReveal'

const root = ref<HTMLElement | null>(null)
useReveal(root)

const features = [
  {
    title: 'Dual runtime',
    copy: 'MLX on Apple Silicon. CUDA when NVIDIA is available. Models declare their backends in the registry.',
  },
  {
    title: 'Infinite canvas',
    copy: 'Iterate with lineage edges, staging zones, and sessions. Grid and canvas share one asset library.',
  },
  {
    title: 'Models as plugins',
    copy: 'New families plug into the registry — image create, rewrite, inpaint, outpaint, upscale, and video.',
  },
  {
    title: 'Structural control',
    copy: 'ControlNet guides for FLUX.1 — Canny, Depth, Redux — with Invoke-style conditioning.',
  },
  {
    title: 'Creative assistant',
    copy: 'Reverse-prompt from vision, analyze references, and brief audio or long-form video.',
  },
  {
    title: 'Global task queue',
    copy: 'One serialized worker with SSE progress, priority, and persistent logs across media types.',
  },
]
</script>

<template>
  <div ref="root">
    <ProductHero
      name="Studio"
      accent="#c93756"
      tagline="Plugin-style image and video generation."
      lede="DanQing Studio is a local generation workspace — FastAPI backend, Vue canvas, Tauri desktop — built for creators who want models on their own silicon."
      github="https://github.com/danqing-ai/danqing-studio"
    />

    <section class="features container">
      <h2 class="reveal">Built for iteration, not one-shot prompts.</h2>
      <ul class="grid">
        <li v-for="(f, i) in features" :key="f.title" class="reveal" :style="{ transitionDelay: `${i * 60}ms` }">
          <h3>{{ f.title }}</h3>
          <p>{{ f.copy }}</p>
        </li>
      </ul>
    </section>

    <section class="modes container reveal">
      <h2>Create modes</h2>
      <p class="intro">
        Tabs only show models that declare the matching action — so the UI stays honest about what each weight can do.
      </p>
      <div class="mode-cols">
        <div>
          <h3>Image</h3>
          <ul>
            <li>Text-to-image</li>
            <li>Reference-driven edit</li>
            <li>Instruct edit</li>
            <li>Inpaint / outpaint</li>
            <li>Upscale</li>
          </ul>
        </div>
        <div>
          <h3>Video &amp; more</h3>
          <ul>
            <li>Text-to-video</li>
            <li>Image-to-video</li>
            <li>Avatar &amp; long video</li>
            <li>Audio create</li>
            <li>LoRA training</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.features {
  padding: 1rem 0 4rem;
}

.features h2,
.modes h2 {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.035em;
  max-width: 22ch;
  margin-bottom: 2rem;
}

.grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem 1.75rem;
}

.grid h3 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.grid p {
  color: var(--label-muted);
  font-size: 0.95rem;
  font-weight: 300;
}

.modes {
  padding-bottom: 2rem;
}

.intro {
  color: var(--label-muted);
  max-width: 36rem;
  margin: -1rem 0 2rem;
  font-weight: 300;
}

.mode-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  border-top: 1px solid var(--ink-line);
  padding-top: 2rem;
}

.mode-cols h3 {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cinnabar);
  margin-bottom: 1rem;
}

.mode-cols ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.mode-cols li {
  color: var(--label-muted);
  font-weight: 300;
  padding-left: 1rem;
  border-left: 2px solid var(--ink-line);
}

@media (max-width: 860px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .grid,
  .mode-cols {
    grid-template-columns: 1fr;
  }
}
</style>
