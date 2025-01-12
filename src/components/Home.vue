<template>
  <section id="home" class="h-screen flex flex-col lg:flex-row justify-between text-white mt-10">
    <!-- Columna izquierda con el nombre y botones -->
    <div class="flex flex-col items-start space-y-6 p-10 w-full lg:w-1/2">
      <p class="text-4xl font-light">Hello, I’m</p>
      <h1 class="text-6xl font-bold">Manuel Puyol</h1>
      <h2 class="text-2xl font-medium mt-2 text-primary-500 bg-secondary-gradient [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] bg-clip-text text-transparent">- Frontend Developer -</h2>
      <!-- Bloques de botones -->
      <div class="mt-8 flex space-x-4">
        <a href="#portfolio" class="px-6 py-3 border bg-secondary-gradient [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] bg-clip-text text-transparent hover:bg-primary-600 font-semibold rounded-lg">
          Download Resume
        </a>
        <a href="#contact" class="px-6 py-3 border bg-secondary-gradient [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] hover:bg-primary-600 text-white font-semibold rounded-lg">
          Let’s Talk
        </a>
      </div>
    </div>

    <!-- Columna derecha con el About -->
    <div class="max-w-xl p-10 w-full lg:w-2/3 mt-6 lg:mt-0">
  <p class="text-4xl font-light text-white">
    I’m a passionate Software Developer specializing in Frontend technologies.
  </p>
  
  <div class="mt-6 text-xl text-gray-500">
    Currently, I work at <strong class="text-primary-500 bg-secondary-gradient [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] bg-clip-text text-transparent">Edatalia</strong>, where we’re redefining the way digital signatures are integrated into business workflows. I play a key role in crafting secure, reliable solutions that enable organizations to confidently manage their digital transactions and ensure compliance with industry standards.
  </div>
  
  <div class="mt-6 text-xl text-gray-500">
    I’m driven by the opportunity to continuously learn and adapt to new challenges, explore the latest technology trends, and collaborate with talented teams to create software that solves real-world problems.
  </div>
</div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>
