<template>
<section id="home" class="h-screen flex flex-col justify-start items-center text-center  text-white">
  <!-- Bloque principal -->
  <div class="mt-20">
    <p class="text-4xl font-light">Hello, I’m</p>
    <h1 class="text-6xl font-bold mt-2">Manuel Puyol</h1>
    <h2 class="text-2xl font-medium mt-2 text-primary-500 bg-secondary-gradient [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] bg-clip-text text-transparent">- Frontend Developer -</h2>
  </div>

  <!-- Bloque de texto -->
  <p class="mt-6 max-w-xl text-gray-300">
    I am passionate about building beautiful and functional web experiences. Let’s work together to create something amazing!
  </p>
 
  <div class="mt-8 flex space-x-4">
    <a href="#portfolio" class="px-6 py-3 border bg-secondary-gradient [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] bg-clip-text text-transparent hover:bg-primary-600 font-semibold rounded-lg">
      Download Resume
    </a>
    <a href="#contact" class="px-6 py-3 border bg-secondary-gradient [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)]  hover:bg-primary-600 text-white font-semibold rounded-lg">
		Let's talk
    </a>
  </div>
</section>
</template>
  
  <script>
export default {
  name: "Home",
};
</script>