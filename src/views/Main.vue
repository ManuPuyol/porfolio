<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <Home />
    <About />
    <Footer />
  </div>
</template>
  
  <script>
import Header from "../components/Header.vue";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Main",
  components: {
    Header,
    Home,
    About,
    Footer,
  },
};
</script>