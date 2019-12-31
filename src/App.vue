<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Commons/Navigation';
export default {
  data() {
    return {};
  },
  components: {
    Navigation
  }
};
</script>
