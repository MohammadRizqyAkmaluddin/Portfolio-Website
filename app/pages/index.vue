<script setup>
definePageMeta({
  layout: 'master'
})

import { ref } from 'vue'


const images = [
  "/showcase/courtside.png",
  "/showcase/luxora.png",
  "/showcase/connexa.png",
  "/showcase/academia.png",
  "/showcase/sparky.png",
]

const transforms = [
  { r: -2, y: -15, x: 20, scale: 0.95 },
  { r: -5, y: 10, x: -5, scale: 1 },
  { r: 4, y: -15, x: 10, scale: 1.05 }, // middle biasanya paling standout
  { r: 6, y: 15, x: 5, scale: 1 },
  { r: -10, y: 45, x: -20, scale: 0.95 },
]

const getStyle = (index) => {
  const t = transforms[index]
  return {
    transform: `
      translateX(${t.x}px)
      translateY(2px)
      rotate(${t.r}deg)
      scale(${t.scale})
      translateZ(0)
    `,
    zIndex: images.length - index
  }
}

const imagesMobile = [
  "/showcase/connexa.png",
  "/showcase/luxora.png",
  "/showcase/sparky2.png",
  "/showcase/academia.png",
  "/showcase/courtside.png",
]

const getMobileStyle = (index) => {
  const zMap = [1, 2, 5, 2, 1] // IMG 3 paling atas

  return {
    zIndex: zMap[index],
  }
}

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
  <div class="border-b p-2 items-center flex justify-center">
    <h1 class="hero-title w-full md:w-2/3 text-center text-4xl leading-[47px] md:text-6xl md:leading-[60px] tracking-tight font-semibold font-encode ">
        Hi, I'm Rizqy! <br />
        Welcome to my corner of the internet
    </h1>
  </div>
  <div class="flex justify-center border-y p-2 mt-8 items-center">
    <p class="hero-subtitle text-center leading-[25px] text-sm text-gray-700 w-[800px]">
      I’m a full-stack developer who enjoys turning ideas into scalable web apps and clean, user-focused experiences. This site doubles as my playground—where I experiment with new technologies, refine my skills, and build things that actually ship.
    </p>
  </div>

  <div class="hidden sm:hidden md:flex wrapper ms-10 my-5">
    <div
      v-for="(img, index) in images"
      :key="index"
      class="card shadow border"
      :style="getStyle(index)"
    >
      <img :src="img" alt="" />
    </div>
  </div>

  <div class="flex flex-col md:hidden items-center my-20">
    <div
      v-for="(img, index) in imagesMobile"
      :key="index"
      class="card-mobile"
      :style="getMobileStyle(index)"
    >
      <img :src="img" alt="" />
    </div>
  </div>

  <div class="flex flex-col md:flex-row justify-center gap-2 px-3 bg-white md:bg-[linear-gradient(to_right,#FFFEFB_0%,#FFFEFB_3%,#ffffff_30%)] my-8 mb-20 border-y py-8">
    <div class="flex flex-col gap-2 w-full md:w-[50%]">
      <NuxtLink to="/about" class="flex flex-col w-full bg-[#FFFEFB] group">
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
      <NuxtLink to="/toolbox" class="group flex flex-col w-full bg-[#FFFEFB] group">
        <div class="relative toolbox-wrap overflow-hidden rounded-2xl group-hover:border-gray-300">
          <div class="absolute z-10 inset-0 opacity-0 group-hover:opacity-50 transition duration-300
            bg-[radial-gradient(circle_at_80%_80%,rgba(140,140,140,0.35),transparent_50%)]">
          </div>
          <h1 class="text-center mb-1">Toolbox</h1>
          <p class="text-sm text-center text-gray-500 mb-2">Check out development tools and technologies i have experience with</p>
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
    </div>
    <div class="flex flex-col gap-2 w-full md:w-[50%]">
      <NuxtLink to="/project" class="flex flex-col w-full h-full bg-[#FFFEFB] group">
        <div class="relative border h-full overflow-hidden rounded-2xl group-hover:border-gray-300">
          <div class="absolute inset-0 opacity-0 group-hover:opacity-90 transition duration-300
            bg-[radial-gradient(circle_at_80%_90%,rgba(140,140,140,0.35),transparent_70%)]">
          </div>
          <div class="flex flex-col p-5">
            <h1 class="mb-2">Project Collection</h1>
            <p class="text-sm text-gray-500">A collection of my favorite developed project recently</p>
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

.mobile-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* base */
.card-mobile {
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  
  box-shadow: 0 0 12px rgba(0,0,0,0.15);
}


/* gambar */
.card-mobile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
 object-position: top; 
}

/* SIZE TIAP CARD (INI YANG BIKIN EFFECT NYA KENA) */
.card-mobile:nth-child(1) {
  width: 70%;
  height: 110px;
}

.card-mobile:nth-child(2) {
  width: 85%;
  height: 120px;
}

.card-mobile:nth-child(3) {
  width: 90%;
  height: 100%;
}

.card-mobile:nth-child(4) {
  width: 85%;
  height: 120px;
}

.card-mobile:nth-child(5) {
  width: 70%;
  height: 110px;
}

/* overlap */
.card-mobile:not(:first-child) {
  margin-top: -60px;
}

.wrapper {
  justify-content: center;
  align-items: center;
  gap: 12px; /* biar saling nempel */
  padding: 60px;
}

/* card styling */
.card {
  width: 300px;
  overflow: hidden;
  transition: transform 0.35s ease;
  cursor: pointer;

  margin-left: -50px;
}

/* image */
.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  image-rendering: auto;
  backface-visibility: hidden;
}

/* hover effect */
.card:hover {
  transform: scale(1.08) rotate(0deg) !important;
  z-index: 10;
}

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
  transform: translateY(40px);
  animation: fadeUp 800ms ease-out 0.2s forwards;
}
.hero-subtitle {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeUp 700ms ease-out 0.4s forwards;
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
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