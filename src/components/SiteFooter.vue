<script setup lang="ts">
import { RouterLink } from 'vue-router'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container row">
      <div class="brand-block">
        <p class="wordmark">Danmo</p>
        <p class="tag">丹墨 — paint with models, think with agents.</p>
      </div>
      <div class="cols">
        <div>
          <p class="label">Products</p>
          <RouterLink to="/make">Make</RouterLink>
          <RouterLink to="/work">Work</RouterLink>
          <RouterLink to="/inbox">Inbox</RouterLink>
        </div>
        <div>
          <p class="label">Open source</p>
          <a href="https://github.com/danmo-ai" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a
            href="https://github.com/danmo-ai/dq-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            dq-ui
          </a>
          <a
            href="https://github.com/danmo-ai/dq-market"
            target="_blank"
            rel="noopener noreferrer"
          >
            Market
          </a>
        </div>
      </div>
    </div>
    <div class="container legal">
      <p>© {{ year }} Danmo. Local-first AI suite.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--ink-line);
  padding: 4rem 0 2.5rem;
  background:
    radial-gradient(ellipse 60% 80% at 10% 100%, rgba(201, 55, 86, 0.12), transparent 55%),
    radial-gradient(ellipse 50% 70% at 90% 100%, rgba(42, 122, 130, 0.14), transparent 50%),
    var(--ink);
}

.row {
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  flex-wrap: wrap;
  padding-bottom: 3rem;
}

.wordmark {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.04em;
}

.tag {
  margin-top: 0.5rem;
  color: var(--label-muted);
  font-size: 0.9rem;
  max-width: 22rem;
}

.cols {
  display: flex;
  gap: 4rem;
}

.cols > div {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.label {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--label-faint);
  margin-bottom: 0.35rem;
}

.cols a {
  font-size: 0.95rem;
  color: var(--label-muted);
  transition: color 0.2s var(--ease-out);
}

.cols a:hover {
  color: var(--label);
}

.legal {
  padding-top: 1.5rem;
  border-top: 1px solid var(--ink-line);
  color: var(--label-faint);
  font-size: 0.8rem;
}

@media (max-width: 640px) {
  .cols {
    gap: 2.5rem;
  }
}
</style>
