<template>
  <div id="app" className="welcome_welcome__3C4rQ">
    <section className="welcome_section__1M5uK">
      <Main />
      <div>
        <div className="welcome_stars__3pTdX" />
        <div className="welcome_stars1__3xuRs" />
        <div className="welcome_stars2__-7oQW" />
        <div className="welcome_shooting_stars__2Of5U" />
      </div>
      <div className="welcome_shooting_stars__2Of5U" />
    </section>
  </div>
</template>

<script>
import Main from "./views/Main.vue";
// refactorizar: animacion de estrellas.
export default {
  name: "App",
  components: {
    Main,
  },
};
</script>