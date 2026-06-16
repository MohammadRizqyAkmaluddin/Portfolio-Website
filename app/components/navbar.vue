<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const route = useRoute()
const mobileMenu = ref(false)
const toggleMenu = () => mobileMenu.value = !mobileMenu.value
const closeMenu = () => mobileMenu.value = false

const isHome = computed(() => route.path === '/')
const isAbout = computed(() => route.path === '/about')
const isProject = computed(() => route.path === '/project')
const isToolbox = computed(() => route.path === '/toolbox')

</script>

<template>
    <div class="flex justify-between items-center border-b p-4 px-5 bg-[linear-gradient(to_right,#FFFEFB_0%,#FFFEFB_40%,#ffffff_100%)]">
        <div class="w-[110px]" 100px="">
            <img src="/logo.png" class="w-[35px] md:w-[30px] object-contain">
        </div>
        <div class="hidden min-[1000px]:flex border rounded-full gap-8 py-[7px] px-6 text-sm text-gray-400 font-semibold ">
            <NuxtLink to="/" class="hover:text-black transition-colors" :class="isHome ? 'text-black' : ''">Home</NuxtLink>
            <NuxtLink to="/about" class="hover:text-black transition-colors" :class="isAbout ? 'text-black' : ''">About</NuxtLink>
            <NuxtLink to="/project" class="hover:text-black transition-colors" :class="isProject ? 'text-black' : ''">Project</NuxtLink>
            <NuxtLink to="/toolbox" class="hover:text-black transition-colors" :class="isToolbox ? 'text-black' : ''">Toolbox</NuxtLink>
        </div>
        <div class="hidden min-[1000px]:flex gap-2 bg-[#3C3C3F] rounded-full items-center px-4 py-[7px] text-[#9CA3AF]">
            <NuxtLink to="linkedin.com/in/mohammad-rizqy-akmaluddin/" target="_blank">
                <Icon icon="mingcute:linkedin-line" width="22" height="22" class="hover:text-gray-200" />
            </NuxtLink>
            <NuxtLink to="https://github.com/MohammadRizqyAkmaluddin" target="_blank">
                <Icon icon="icon-park-outline:github" width="20" height="20" class="hover:text-gray-200" />
            </NuxtLink>
            <NuxtLink to="#">
                <Icon icon="mdi:email-outline" width="22" height="22" class="hover:text-gray-200" />
            </NuxtLink>
        </div> 

        <button class="min-[1000px]:hidden" @click="toggleMenu">
            <Icon icon="quill:hamburger" class="w-7 h-7"/>
        </button>
    </div>

    <div v-if="mobileMenu" class="fixed inset-0 bg-black/60 z-50" @click="closeMenu"></div>

    <div :class="[ 'fixed top-0 right-0 h-full w-[100%]  bg-white z-50 shadow-xl rounded-tl-lg rounded-bl-lg transform transition-transform duration-300',
        mobileMenu ? 'translate-x-0' : 'translate-x-full']">

        <div class="flex flex-col justify-between min-h-full pb-10 pt-6">
            <div class="flex flex-col"> 
                <div class="flex justify-between items-center mx-5 mb-5">
                    <img src="/logo.png" class="w-[40px] object-contain">    
                    <button class="min-[1000px]:hidden" @click="toggleMenu">
                        <Icon icon="quill:hamburger-sidebar" class="w-7 h-7"/>
                    </button>         
                </div>
                <div class="flex flex-col text-sm text-gray-800 me-5 mt-5 font-semibold">
                    <NuxtLink @click="closeMenu" to="/" :class="isHome ? 'border-e border-b border-t shadow border-gray-900 text-black rounded-tr-md rounded-br-md' : ''" class="p-4 px-5 flex items-center gap-2">
                        Home
                    </NuxtLink>
                    <NuxtLink @click="closeMenu" to="/about" :class="isAbout ? 'border-e border-b border-t shadow border-gray-900 text-black rounded-tr-md rounded-br-md' : ''" class="p-4 px-5 flex items-center gap-2">
                        About
                    </NuxtLink>
                    <NuxtLink @click="closeMenu" to="/project" :class="isProject ? 'border-e border-b border-t shadow border-gray-900 text-black rounded-tr-md rounded-br-md' : ''" class="p-4 px-5 flex items-center gap-2">
                        Project
                    </NuxtLink>
                    <NuxtLink @click="closeMenu" to="/toolbox" :class="isToolbox ? 'border-e border-b border-t shadow border-gray-900 text-black rounded-tr-md rounded-br-md' : ''" class="p-4 px-5 flex items-center gap-2">
                        Toolbox
                    </NuxtLink>
                </div>
            </div>
            <div class="flex gap-8 bg-[#3C3C3F] rounded-full px-4 py-2 text-[#9CA3AF] mx-10 items-center justify-center">
                <NuxtLink to="#">
                    <Icon icon="mingcute:linkedin-line" width="23" height="23" />
                </NuxtLink>
                <NuxtLink to="#">
                    <Icon icon="mdi:email-outline" width="23" height="23" />
                </NuxtLink>
                <NuxtLink to="#">
                    <Icon icon="icon-park-outline:github" width="22" height="22" />
                </NuxtLink>
            </div> 
        </div>
    </div> 
</template>