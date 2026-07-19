<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref(false)
const open = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))

function close() {
  open.value = false
}
</script>

<template>
  <header class="header" :class="{ 'is-scrolled': scrolled, 'is-open': open }">
    <div class="container bar">
      <RouterLink class="brand" to="/" @click="close">
        <svg class="mark" viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="11" cy="14" r="5" fill="var(--cinnabar)" />
          <circle cx="21" cy="14" r="5" fill="var(--mineral)" />
          <circle cx="16" cy="21.5" r="3.5" fill="var(--lacquer)" />
        </svg>
        <span class="name">DanQing</span>
      </RouterLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="open"
        aria-controls="site-nav"
        @click="open = !open"
      >
        <span class="sr-only">Menu</span>
        <span class="burger" />
      </button>

      <nav id="site-nav" class="nav" :aria-hidden="!open && undefined">
        <RouterLink
          to="/studio"
          :class="{ active: route.name === 'studio' }"
          @click="close"
        >
          Studio
        </RouterLink>
        <RouterLink
          to="/teams"
          :class="{ active: route.name === 'teams' }"
          @click="close"
        >
          Teams
        </RouterLink>
        <RouterLink
          to="/mail"
          :class="{ active: route.name === 'mail' }"
          @click="close"
        >
          Mail
        </RouterLink>
        <a
          class="github"
          href="https://github.com/danqing-ai"
          target="_blank"
          rel="noopener noreferrer"
          @click="close"
        >
          GitHub
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 40;
  padding: 1.1rem 0;
  transition:
    background 0.35s var(--ease-out),
    backdrop-filter 0.35s var(--ease-out),
    border-color 0.35s var(--ease-out),
    padding 0.35s var(--ease-out);
  border-bottom: 1px solid transparent;
}

.header.is-scrolled {
  padding: 0.75rem 0;
  background: rgba(12, 13, 16, 0.72);
  backdrop-filter: blur(16px) saturate(1.2);
  border-bottom-color: var(--ink-line);
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  z-index: 2;
}

.mark {
  width: 1.55rem;
  height: 1.55rem;
}

.name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.03em;
}

.nav {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}

.nav a {
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--label-muted);
  transition: color 0.25s var(--ease-out);
}

.nav a:hover,
.nav a.active {
  color: var(--label);
}

.github {
  padding: 0.45rem 0.9rem;
  border: 1px solid var(--ink-line);
  border-radius: 999px;
  color: var(--label) !important;
  transition:
    border-color 0.25s var(--ease-out),
    background 0.25s var(--ease-out);
}

.github:hover {
  border-color: rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.04);
}

.menu-toggle {
  display: none;
  width: 2.5rem;
  height: 2.5rem;
  place-items: center;
  z-index: 2;
}

.burger,
.burger::before,
.burger::after {
  display: block;
  width: 1.15rem;
  height: 1.5px;
  background: var(--label);
  transition: transform 0.3s var(--ease-out);
}

.burger {
  position: relative;
}

.burger::before,
.burger::after {
  content: '';
  position: absolute;
  left: 0;
}

.burger::before {
  top: -5px;
}

.burger::after {
  top: 5px;
}

.is-open .burger {
  background: transparent;
}

.is-open .burger::before {
  transform: translateY(5px) rotate(45deg);
}

.is-open .burger::after {
  transform: translateY(-5px) rotate(-45deg);
}

@media (max-width: 760px) {
  .menu-toggle {
    display: grid;
  }

  .nav {
    position: fixed;
    inset: 0;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    background: rgba(12, 13, 16, 0.96);
    backdrop-filter: blur(20px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s var(--ease-out);
  }

  .is-open .nav {
    opacity: 1;
    pointer-events: auto;
  }

  .nav a {
    font-family: var(--font-display);
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--label);
  }

  .github {
    margin-top: 0.5rem;
    border-radius: 999px;
  }
}
</style>
