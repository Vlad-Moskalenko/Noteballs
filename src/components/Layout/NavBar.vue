<script setup>
/*mobile nav*/
import { ref } from 'vue';

const showMobileNav = ref(false);

const toggleMobileNav = () => (showMobileNav.value = !showMobileNav.value);
</script>

<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>

        <a
          @click="toggleMobileNav"
          :class="showMobileNav && 'is-active'"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div :class="showMobileNav && 'is-active'" id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <RouterLink @click="toggleMobileNav" class="navbar-item" to="/" active-class="is-active"
            >Notes</RouterLink
          >
          <RouterLink
            @click="toggleMobileNav"
            class="navbar-item"
            to="/stats"
            active-class="is-active"
            >Stats</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
