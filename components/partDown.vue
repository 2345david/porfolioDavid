<template>
  <footer class="footer">
    <div class="wrap footer__inner">
      <p>© {{ year }} David Ramos García</p>
      <ul class="footer__links" role="list">
        <li><a :href="enlaces.github" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a :href="enlaces.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a :href="enlaces.infojobs" target="_blank" rel="noopener noreferrer">InfoJobs</a></li>
        <li><NuxtLink to="/curriculumPage">Currículum</NuxtLink></li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { enlaces } from '~/data/portfolio.js'

export default {
  name: 'PartDown',
  data: () => ({ enlaces, year: new Date().getFullYear() }),
}
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  padding-block: 2rem;
  color: var(--muted);
  font-size: 0.9375rem;
}
.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.footer__links { display: flex; gap: 1.25rem; flex-wrap: wrap; list-style: none; padding: 0; margin: 0; }
.footer__links a { text-decoration: none; transition: color 0.2s; }
.footer__links a:hover { color: var(--ink); }
</style>
