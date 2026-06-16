<script setup>
definePageMeta({
  layout: 'master'
})

import { ref } from 'vue'

const tools = [
  { name: 'Figma', image: '/tools/react.png' },
  { name: 'VSCode', image: '/tools/php.png' },
  { name: 'Laravel', image: '/tools/vue.png' },
  { name: 'Postman', image: '/tools/node.png' },
  { name: 'Git', image: '/tools/mysql.png' },
]

const delays = ['0.19s', '0.12s', '0s', '0.12s', '0.19s']

</script>

<template>
  <div class="flex justify-center border-b pb-8 pt-12 w-full">
    <div class="profile-anim2 border rounded-full p-3">
      <img src="/profile.jpg" class="profile-anim w-[110px] h-[110px] rounded-full border object-cover p-2" />
    </div>
  </div>
  <div class="border-b p-2">
    <h1 class="hero-title text-center text-4xl leading-[47px] md:text-6xl md:leading-[60px] tracking-tight font-semibold font-encode ">
        Hi, I'm Rizqy! <br />
        Welcome to my Project Collection Website
    </h1>
  </div>
  <div class="flex justify-center border-y p-2 mt-8 items-center">
    <p class="hero-subtitle text-center leading-[25px] text-sm text-gray-700 w-[800px]">
       I'm a front-end developer with a love for design and a knack for tinkering. This site is intentionally over-engineered and serves as my playground for experimenting with new ideas and seeing what sticks!
    </p>
  </div>

  <div class="flex flex-col md:flex-row justify-center gap-2 my-8 ">
    <div class="flex flex-col gap-2 w-full md:w-[50%]">
      <NuxtLink to="/toolbox" class="group flex flex-col w-full
        bg-[linear-gradient(to_right,#FFFEFB_0%,#FFFEFB_50%,#ffffff_100%)] group"
      >
        <div class="relative toolbox-wrap overflow-hidden rounded-2xl group-hover:border-gray-300">
          <div class="absolute z-10 inset-0 opacity-0 group-hover:opacity-50 transition duration-300
            bg-[radial-gradient(circle_at_80%_80%,rgba(140,140,140,0.35),transparent_50%)]">
          </div>
          <h1 class="text-center mb-1">Toolbox</h1>
          <p class="text-sm text-center text-gray-500 mb-2">Check out my favorite tools and spots around the web</p>
          <div class="carousel-row">
            <div v-for="(tool, i) in tools"
            :key="i"
            :class="[
                  'tool-card',
                  i === 0 && 'partial-left',
                  i === tools.length - 1 && 'partial-right',
                  i === 2 && 'featured'   /* index 2 = box ke-3 */
                ]"
                :style="{ transitionDelay: delays[i] }"
                class="shadow"
                >
              <div class="border p-5 rounded-md bg-gray-100">
                <div class="tool-icon" :style="{ background: tool.bg }">
                  <img :src="tool.image" :alt="tool.name" class="w-15 h-15 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/about" class="flex flex-col w-full bg-white group">
        <div class="flex border py-2 rounded-xl overflow-hidden relative group-hover:border-gray-300">
          <div class="absolute inset-0 opacity-0 group-hover:opacity-50 transition duration-300
            bg-[radial-gradient(circle_at_80%_80%,rgba(140,140,140,0.35),transparent_70%)]">
          </div>
          <div class="flex flex-col gap-3 w-1/2 p-5 ps-6">
            <h1>Learn more about me</h1>
            <p class="text-gray-500 text-sm">
              Good morning! <br>
              I'm Rizqy, an experienced front-end developer
            </p>
          </div>
          <div class="relative w-1/2 flex items-end justify-center pt-2">
            <div class="bg-white pt-2 translate-y-7 px-2 border-t border-x w-[200px] h-[170px] rounded-tl-2xl rounded-tr-2xl absolute">
              <div class="bg-gray-100 w-full h-full rounded-tl-2xl rounded-tr-2xl"></div>
            </div>
            <img src="/profile.jpg" 
              class="profile-img relative z-10 border rounded-lg shadow 
                    transition-all duration-300 ease-out 
                    rotate-[1deg] group-hover:rotate-[2deg] 
                    group-hover:scale-105"
            />
          </div>
      
        </div>
      </NuxtLink>
    </div>
    <div class="flex flex-col gap-2 w-full md:w-[50%]">
      <NuxtLink to="/project" class="flex flex-col w-full h-full bg-white group">
        <div class="relative border h-full overflow-hidden rounded-2xl group-hover:border-gray-300">
          <div class="absolute inset-0 opacity-0 group-hover:opacity-90 transition duration-300
            bg-[radial-gradient(circle_at_80%_90%,rgba(140,140,140,0.35),transparent_70%)]">
          </div>
          <div class="flex flex-col p-5">
            <h1 class="mb-2">Project Collection</h1>
            <p class="text-sm text-gray-500">Here's list of my recent website project</p>
          </div>
          <div class="relative flex items-end justify-center">
            <img src="/project.png" 
              class="relative z-10 w-[580px] object-contain translate-x-[30px] translate-y-5 rounded-lg 
                    transition-all duration-300 ease-out 
                    group-hover:translate-x-[20px] 
                    group-hover:scale-15"
            />
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>


<style scoped>

.profile-img {
  width: 180px;
  border-radius: 12px;
  object-fit: cover;

  /* posisi */
  transform: rotate(5deg);
  transform-origin: bottom center;

  /* biar nempel bawah */
  margin-bottom: -30px;

  /* animasi smooth */
  transition: all 0.4s ease;
}

/* HOVER effect */
.profile-img:hover {
  transform: rotate(2deg) scale(1.03);
}

.toolbox-wrap:hover .tool-card:nth-child(1) {
  transition-delay: 0s;
}
.toolbox-wrap:hover .tool-card:nth-child(2) {
  transition-delay: 0.1s;
}
.toolbox-wrap:hover .tool-card:nth-child(3) {
  transition-delay: 0.2s;
}
.toolbox-wrap:hover .tool-card:nth-child(4) {
  transition-delay: 0.3s;
}
.toolbox-wrap:hover .tool-card:nth-child(5) {
  transition-delay: 0.4s;
}

.toolbox-wrap {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 0.7rem 0;
  background: #fff;
}

.toolbox-wrap:hover .tool-card {
  transform: translateY(-10px);
}

.carousel-row {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  overflow: hidden;
  justify-content: center;
  padding: 8px 0;
}

.carousel-row::before,
.carousel-row::after {
  content: "";
  position: absolute;
  top: 0;
  width: 80px;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

/* kiri */
.carousel-row::before {
  left: 0;
  background: linear-gradient(to right, #fff, transparent);
}

/* kanan */
.carousel-row::after {
  right: 0;
  background: linear-gradient(to left, #fff, transparent);
}

.tool-card {
  flex: 0 0 110px;
  height: 110px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  padding: 9px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.tool-card.partial-left {
  margin-left: -30px;
  opacity: 0.7;
}

.tool-card.partial-right {
  margin-right: -30px;
  opacity: 0.7;
}

.tool-card.featured {
  flex: 0 0 122px;
  height: 122px;
}

.tool-card.featured .tool-icon {
  width: 64px;  
  height: 64px;
  font-size: 32px;
}

.tool-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.profile-anim {
  animation: enterHeartbeat 0.8s ease-out forwards;
  transform-origin: center;
}

.profile-anim2 {
  animation: enterHeartbeat 1.8s ease-out backwards;
  transform-origin: center;
}

.hero-title {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeUp 800ms ease-out forwards;
}
.hero-subtitle {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeUp 900ms ease-in forwards;
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes enterHeartbeat {
  0% {
    opacity: 0;
    transform: translateY(10px) scale(0.98);
  }
  18% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  42% {
    opacity: 1;
    transform: translateY(0) scale(1.04);
  }
  74% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>