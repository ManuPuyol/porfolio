<template>
  <div class="min-h-screen flex flex-col">
    <!-- Contenedor centrado con tamaño máximo -->
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <About />
      <Footer />
    </div>
  </div>
</template>
  
  <script>
import Header from "../components/Header.vue";
import About from "../components/About.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Main",
  components: {
    Header,
    About,
    Footer,
  },
};
</script>