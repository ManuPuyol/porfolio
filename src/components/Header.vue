<template>
  <header
    :class="headerClass"
    class="text-white p-4 transition-all duration-300 ease-in-out"
  >
    <nav
      class="flex justify-center py-2 sm:bg-transparent sm:rounded-none sm:border-none bg-secondary-100 rounded-xl transition-all duration-300 ease-in-out"
    >
      <ul
        class="flex items-center space-x-10 text-lg tracking-wide px-5 py-4 font-bold bg-secondary-gradient [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] bg-clip-text text-transparent"
      >
        <li>
          <a href="#home" class="flex items-center group">
            <HomeIcon
              class="h-8 w-8 text-primary-200  sm:hidden"
            />
            <span
              class="hidden sm:block group-hover:text-primary-100 transition-colors duration-300 ease-in-out"
              >HOME</span
            >
          </a>
        </li>
        <li>
          <a href="#about" class="flex items-center group">
            <UserCircleIcon
              class="h-8 w-8 text-primary-200 sm:hidden"
            />
            <span class="hidden sm:block group-hover:text-primary-100 transition-colors duration-300 ease-in-out">ABOUT</span>
          </a>
        </li>
        <li>
          <a href="#experience" class="flex items-center group">
            <AcademicCapIcon
              class="h-8 w-8 text-primary-200 sm:hidden"
            />
            <span class="hidden sm:block group-hover:text-primary-100 transition-colors duration-300 ease-in-out">EXPERIENCE</span>
          </a>
        </li>
        <li>
          <a href="#projects" class="flex items-center group">
            <CodeIcon
              class="h-8 w-8 text-primary-200 sm:hidden"
            />
            <span class="hidden sm:block group-hover:text-primary-100 transition-colors duration-300 ease-in-out">PROJECTS</span>
          </a>
        </li>
        <li>
          <a href="#contact" class="flex items-center group">
            <ChatAltIcon
              class="h-8 w-8 text-primary-200  sm:hidden"
            />
            <span class="hidden sm:block group-hover:text-primary-100 transition-colors duration-300 ease-in-out">CONTACT</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import {
  HomeIcon,
  UserCircleIcon,
  AcademicCapIcon,
  CodeIcon,
  ChatAltIcon,
} from "@heroicons/vue/solid";

export default {
  name: "Header",
  components: {
    HomeIcon,
    UserCircleIcon,
    AcademicCapIcon,
    CodeIcon,
    ChatAltIcon,
  },
};
</script>
