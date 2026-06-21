<script setup lang="ts">
definePageMeta({
    layout: 'master'
})

import { Icon } from '@iconify/vue';

</script>

<template>
    
    <div class="flex flex-col my-16 gap-3">
        <div class="flex flex-col items-center border-y py-2">
            <h1 class="font-semibold text-3xl md:text-5xl w-2/3 md:w-1/2 text-center">
                Projcet Collection
            </h1>
        </div>
        <p class="border-y p-2 text-center text-sm text-gray-600">
            A Collection of my Favorite Works
        </p>
    </div>
    <div class="flex flex-col gap-16">
        <div class="flex flex-col gap-10">
            <div class="border-y px-4 md:px-10">
                <img src="/showcase/courtside2.png" class="border rounded-xl shadow-lg">
            </div>
            <div class="flex flex-col md:flex-row border-y px-4 md:px-10 py-5 gap-3">
                <div class="flex flex-col gap-5 md:gap-3 w-full md:w-2/3">
                    <img src="/showcase/logo-courtside.png" class="w-[120px] md:w-[150px]">
                    <p class="text-gray-500">
                        Web-based sports court booking platform designed to simplify the reservation 
                        process for users while helping venue owners manage schedules, bookings, and 
                        payments in a more organized and efficient way.
                    </p>
                    <NuxtLink to="http://www.courtside.my.id/" target="_blank" rel="noopener noreferrer" external
                        class="text-sm text-blue-800">
                        Visit Live Website ->
                    </NuxtLink>
                    <div class="md:hidden flex flex-col gap-3">
                        <div class="flex flex-col gap-1">
                            <h1 class="font-semibold text-gray-700">Source Code:</h1>
                            <NuxtLink 
                                to="https://github.com/MohammadRizqyAkmaluddin/Courtside-NuxtJS" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                external
                                class="text-sm underline truncate block max-w-full hover:text-blue-800"
                                >
                                https://github.com/MohammadRizqyAkmaluddin/CourtsideNuxtJS
                            </NuxtLink>
                        </div>
                        <div class="flex items-center gap-2">
                            <h1 class="font-semibold text-gray-700">Accomplished Date:</h1>
                            <p class="text-sm">29 May 2026</p>
                        </div>
                        <div class="flex flex-col gap-2">
                            <h1 class="font-semibold text-gray-700">Stack Used</h1>
                            <div class="grid grid-cols-2 gap-2 text-sm">
                                <p class="border rounded-lg p-1 text-center">Laravel</p>
                                <p class="border rounded-lg p-1 text-center">Nuxt JS</p>
                                <p class="border rounded-lg p-1 text-center">Tailwind</p>
                                <p class="border rounded-lg p-1 text-center">MySQL</p>
                            </div>
                        </div>
                    </div>
                    <NuxtLink to="/project/courtside" class="flex items-center justify-between border text-black border-black hover:bg-gray-100 w-full p-1 px-3 rounded-full">
                        Project Detail
                        <Icon icon="icons8:right-round" width="20" height="20"/>
                    </NuxtLink>
                </div>
                <div class="hidden md:flex flex-col gap-3 border-s ps-5 w-1/3">
                    <div class="flex flex-col gap-1">
                        <h1 class="font-semibold text-gray-700">GitHub:</h1>
                        <NuxtLink 
                            to="https://github.com/MohammadRizqyAkmaluddin/Courtside-NuxtJS" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            external
                            class="text-sm underline truncate block max-w-full hover:text-blue-800"
                            >
                            https://github.com/MohammadRizqyAkmaluddin/CourtsideNuxtJS
                        </NuxtLink>
                    </div>
                    <div class="flex items-center gap-2">
                        <h1 class="font-semibold text-gray-700">Accomplished Date:</h1>
                        <p class="text-sm">29 May 2026</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <h1 class="font-semibold text-gray-700">Stack Used</h1>
                        <div class="grid grid-cols-2 gap-2 text-sm">
                            <p class="border rounded-lg p-1 text-center">Laravel</p>
                            <p class="border rounded-lg p-1 text-center">Nuxt JS</p>
                            <p class="border rounded-lg p-1 text-center">Tailwind</p>
                            <p class="border rounded-lg p-1 text-center">MySQL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-10">
            <div class="border-y px-4 md:px-10">
                <img src="/showcase/connexa2.png" class="border rounded-xl shadow-lg">
            </div>
            <div class="flex flex-col md:flex-row border-y px-4 md:px-10 py-5 gap-3">
                <div class="flex flex-col gap-5 md:gap-3 w-full md:w-2/3">
                    <img src="/showcase/logo-connexa.png" class="w-[120px] md:w-[150px]">
                    <p class="text-gray-500">
                        Web-based professional networking platform inspired by LinkedIn, 
                        enabling users to connect with others, follow companies, explore job 
                        opportunities, and build a personalized profile for personal branding. 
                        It also provides tools for companies to post job listings, promote their pages, 
                        and engage with potential candidates through an integrated messaging system.
                    </p>
                    <NuxtLink to="http://www.conexa.my.id/" target="_blank" rel="noopener noreferrer" external
                     class="text-sm text-blue-800">
                     Visit Live Website ->
                    </NuxtLink>
                    <div class="md:hidden flex flex-col gap-3">
                        <div class="flex flex-col gap-1">
                            <h1 class="font-semibold">GitHub:</h1>
                            <NuxtLink 
                                to="https://github.com/MohammadRizqyAkmaluddin/Connexa-Social-Networking-Platform" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                external
                                class="text-sm underline truncate block max-w-full hover:text-blue-800"
                                >
                                https://github.com/MohammadRizqyAkmaluddin/Connexa-Social-Networking-Platform
                            </NuxtLink>
                        </div>
                        <div class="flex items-center gap-2">
                            <h1 class="font-semibold text-gray-700">Accomplished Date:</h1>
                            <p class="text-sm">15 February 2026</p>
                        </div>
                        <div class="flex flex-col gap-2">
                            <h1 class="font-semibold">Stack Used</h1>
                            <div class="grid grid-cols-2 gap-2 text-sm">
                                <p class="border rounded-lg p-1 text-center">Laravel</p>
                                <p class="border rounded-lg p-1 text-center">Bootstrap</p>
                                <p class="border rounded-lg p-1 text-center">JavaScript</p>
                                <p class="border rounded-lg p-1 text-center">MySQL</p>
                            </div>
                        </div>
                    </div>
                    <NuxtLink to="/project/connexa" class="flex items-center justify-between border text-black border-black hover:bg-gray-100 w-full p-1 px-3 rounded-full">
                        Project Detail
                        <Icon icon="icons8:right-round" width="20" height="20"/>
                    </NuxtLink>
                </div>
                <div class="hidden md:flex flex-col gap-3 border-s ps-5 w-1/3">
                    <div class="flex flex-col gap-1">
                        <h1 class="font-semibold text-gray-700">GitHub</h1>
                        <NuxtLink 
                            to="https://github.com/MohammadRizqyAkmaluddin/Connexa-Social-Networking-Platform" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            external
                            class="text-sm underline truncate block max-w-full hover:text-blue-800"
                            >
                            https://github.com/MohammadRizqyAkmaluddin/Connexa-Social-Networking-Platform
                        </NuxtLink>
                    </div>
                    <div class="flex items-center gap-2">
                        <h1 class="font-semibold text-gray-700">Accomplished Date:</h1>
                        <p class="text-sm">15 February 2026</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <h1 class="font-semibold text-gray-700">Stack Used</h1>
                        <div class="grid grid-cols-2 gap-2 text-sm">
                            <p class="border rounded-lg p-1 text-center">Laravel</p>
                            <p class="border rounded-lg p-1 text-center">Next JS</p>
                            <p class="border rounded-lg p-1 text-center">Bootstrap</p>
                            <p class="border rounded-lg p-1 text-center">MySQL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-10">
            <div class="border-y px-4 md:px-10">
                <img src="/showcase/sparky2.png" class="border rounded-xl shadow-lg">
            </div>
            <div class="flex flex-col md:flex-row border-y px-4 md:px-10 py-5 gap-3">
                <div class="flex flex-col gap-5 md:gap-3 w-full md:w-2/3">
                    <img src="/showcase/logo-sparky.png" class="w-[120px] md:w-[150px]">
                    <p class="text-gray-500">
                        Smart parking system designed to automate parking management 
                        by tracking vehicle duration in real-time and displaying a live
                        parking fee calculation. It allows users to monitor their parking 
                        session and seamlessly exit through an integrated digital checkout 
                        process, improving efficiency and user convenience.
                    </p>
                    <button class="text-sm text-gray-400 items-start flex w-fit" disabled>
                     Live Website is Unavailable
                    </button>
                    <div class="md:hidden flex flex-col gap-3">
                        <div class="flex flex-col gap-1">
                            <h1 class="font-semibold">GitHub:</h1>
                            <NuxtLink 
                                to="https://github.com/MohammadRizqyAkmaluddin/Parking-Management-System" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                external
                                class="text-sm underline truncate block max-w-full hover:text-blue-800"
                                >
                                https://github.com/MohammadRizqyAkmaluddin/Parking-Management-System
                            </NuxtLink>
                        </div>
                        <div class="flex items-center gap-2">
                            <h1 class="font-semibold text-gray-700">Accomplished Date:</h1>
                            <p class="text-sm">20 December 2025</p>
                        </div>
                        <div class="flex flex-col gap-2">
                            <h1 class="font-semibold">Stack Used</h1>
                            <div class="grid grid-cols-2 gap-2 text-sm">
                                <p class="border rounded-lg p-1 text-center">Laravel</p>
                                <p class="border rounded-lg p-1 text-center">Bootstrap</p>
                                <p class="border rounded-lg p-1 text-center">JavaScript</p>
                                <p class="border rounded-lg p-1 text-center">MySQL</p>
                            </div>
                        </div>
                    </div>
                    <NuxtLink to="/project/sparky" class="flex items-center justify-between border text-black border-black hover:bg-gray-100 w-full p-1 px-3 rounded-full">
                        Project Detail
                        <Icon icon="icons8:right-round" width="20" height="20"/>
                    </NuxtLink>
                </div>
                <div class="hidden md:flex flex-col gap-3 border-s ps-5 w-1/3">
                    <div class="flex flex-col gap-1">
                        <h1 class="font-semibold text-gray-700">GitHub</h1>
                        <NuxtLink 
                            to="https://github.com/MohammadRizqyAkmaluddin/Parking-Management-System" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            external
                            class="text-sm underline truncate block max-w-full hover:text-blue-800"
                            >
                            https://github.com/MohammadRizqyAkmaluddin/Parking-Management-System
                        </NuxtLink>
                    </div>
                    <div class="flex items-center gap-2">
                        <h1 class="font-semibold text-gray-700">Accomplished Date:</h1>
                        <p class="text-sm">20 December 2025</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <h1 class="font-semibold text-gray-700">Stack Used</h1>
                        <div class="grid grid-cols-2 gap-2 text-sm">
                            <p class="border rounded-lg p-1 text-center">Laravel</p>
                            <p class="border rounded-lg p-1 text-center">Bootstrap</p>
                            <p class="border rounded-lg p-1 text-center">JavaScript</p>
                            <p class="border rounded-lg p-1 text-center">MySQL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-10">
            <div class="border-y px-4 md:px-10">
                <img src="/showcase/academia2.png" class="border rounded-xl shadow-lg">
            </div>
            <div class="flex flex-col md:flex-row border-y px-4 md:px-10 py-5 gap-3">
                <div class="flex flex-col gap-5 md:gap-3 w-full md:w-2/3">
                    <img src="/showcase/logo-academia.png" class="w-[120px] md:w-[150px]">
                    <p class="text-gray-500">
                        An online learning website that aims to help people who need to improve specific 
                        skills in their field to achieve their dream career or just gain new experience, 
                        experts also can join as lecturers to start promoting and manage their course video 
                        and learning module in AcademiaPlus.
                    </p>
                    <NuxtLink to="http://www.academia-plus.my.id/" target="_blank" rel="noopener noreferrer" external
                     class="text-sm text-blue-800">
                     Visit Live Website ->
                    </NuxtLink>
                    <div class="md:hidden flex flex-col gap-3">
                        <div class="flex flex-col gap-1">
                            <h1 class="font-semibold">GitHub:</h1>
                            <NuxtLink 
                                to="https://github.com/MohammadRizqyAkmaluddin/AcademiaPlus-E-Learning-Platform" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                external
                                class="text-sm underline truncate block max-w-full hover:text-blue-800"
                                >
                                https://github.com/MohammadRizqyAkmaluddin/AcademiaPlus-E-Learning-Platform
                            </NuxtLink>
                        </div>
                        <div class="flex items-center gap-2">
                            <h1 class="font-semibold text-gray-700">Accomplished Date:</h1>
                            <p class="text-sm">15 June 2025</p>
                        </div>
                        <div class="flex flex-col gap-2">
                            <h1 class="font-semibold">Stack Used</h1>
                            <div class="grid grid-cols-2 gap-2 text-sm">
                                <p class="border rounded-lg p-1 text-center">Laravel</p>
                                <p class="border rounded-lg p-1 text-center">Bootstrap</p>
                                <p class="border rounded-lg p-1 text-center">JavaScript</p>
                                <p class="border rounded-lg p-1 text-center">MySQL</p>
                            </div>
                        </div>
                    </div>
                    <NuxtLink to="/project/academia" class="flex items-center justify-between border text-black border-black hover:bg-gray-100 w-full p-1 px-3 rounded-full">
                        Project Detail
                        <Icon icon="icons8:right-round" width="20" height="20"/>
                    </NuxtLink>
                </div>
                <div class="hidden md:flex flex-col gap-3 border-s ps-5 w-1/3">
                    <div class="flex flex-col gap-1">
                        <h1 class="font-semibold text-gray-700">GitHub</h1>
                        <NuxtLink 
                            to="https://github.com/MohammadRizqyAkmaluddin/AcademiaPlus-E-Learning-Platform" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            external
                            class="text-sm underline truncate block max-w-full hover:text-blue-800"
                            >
                            https://github.com/MohammadRizqyAkmaluddin/AcademiaPlus-E-Learning-Platform
                        </NuxtLink>
                    </div>
                    <div class="flex items-center gap-2">
                        <h1 class="font-semibold text-gray-700">Accomplished Date:</h1>
                        <p class="text-sm">15 June 2025</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <h1 class="font-semibold text-gray-700">Stack Used</h1>
                        <div class="grid grid-cols-2 gap-2 text-sm">
                            <p class="border rounded-lg p-1 text-center">Laravel</p>
                            <p class="border rounded-lg p-1 text-center">Next JS</p>
                            <p class="border rounded-lg p-1 text-center">Bootstrap</p>
                            <p class="border rounded-lg p-1 text-center">MySQL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-10">
            <div class="border-y px-4 md:px-10">
                <img src="/showcase/luxora2.png" class="border rounded-xl shadow-lg">
            </div>
            <div class="flex flex-col md:flex-row border-y px-4 md:px-10 py-5 gap-3">
                <div class="flex flex-col gap-5 md:gap-3 w-full md:w-2/3">
                    <img src="/showcase/logo-luxora.png" class="w-[120px] md:w-[150px]">
                    <p class="text-gray-500">
                        Web-based e-commerce platform focused on luxury fashion, providing 
                        a premium shopping experience for high-end brands. It features 
                        curated product listings, seamless browsing, and secure transactions, 
                        tailored to reflect the exclusivity and elegance of luxury retail.
                    </p>
                    <button class="text-sm text-gray-400 items-start flex w-fit" disabled>
                     Live Website is Unavailable
                    </button>
                    <div class="md:hidden flex flex-col gap-3">
                        <div class="flex flex-col gap-1">
                            <h1 class="font-semibold">GitHub:</h1>
                            <NuxtLink 
                                to="https://github.com/MohammadRizqyAkmaluddin/Luxora-E-Commerce" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                external
                                class="text-sm underline truncate block max-w-full hover:text-blue-800"
                                >
                                https://github.com/MohammadRizqyAkmaluddin/Luxora-E-Commerce
                            </NuxtLink>
                        </div>
                        <div class="flex items-center gap-2">
                            <h1 class="font-semibold text-gray-700">Accomplished Date:</h1>
                            <p class="text-sm">15 April 2025</p>
                        </div>
                        <div class="flex flex-col gap-2">
                            <h1 class="font-semibold">Stack Used</h1>
                            <div class="grid grid-cols-2 gap-2 text-sm">
                                <p class="border rounded-lg p-1 text-center">Native PHP</p>
                                <p class="border rounded-lg p-1 text-center">HTML & CSS</p>
                                <p class="border rounded-lg p-1 text-center">JavaScript</p>
                                <p class="border rounded-lg p-1 text-center">MySQL</p>
                            </div>
                        </div>
                    </div>
                    <NuxtLink to="/project/luxora" class="flex items-center justify-between border text-black border-black hover:bg-gray-100 w-full p-1 px-3 rounded-full">
                        Project Detail
                        <Icon icon="icons8:right-round" width="20" height="20"/>
                    </NuxtLink>
                </div>
                <div class="hidden md:flex flex-col gap-3 border-s ps-5 w-1/3">
                    <div class="flex flex-col gap-1">
                        <h1 class="font-semibold text-gray-700">GitHub</h1>
                        <NuxtLink 
                            to="https://github.com/MohammadRizqyAkmaluddin/Luxora-E-Commerce" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            external
                            class="text-sm underline truncate block max-w-full hover:text-blue-800"
                            >
                            https://github.com/MohammadRizqyAkmaluddin/Luxora-E-Commerce
                        </NuxtLink>
                    </div>
                    <div class="flex items-center gap-2">
                        <h1 class="font-semibold text-gray-700">Accomplished Date:</h1>
                        <p class="text-sm">15 April 2025</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <h1 class="font-semibold text-gray-700">Stack Used</h1>
                        <div class="grid grid-cols-2 gap-2 text-sm">
                            <p class="border rounded-lg p-1 text-center">Native PHP</p>
                            <p class="border rounded-lg p-1 text-center">HTML & CSS</p>
                            <p class="border rounded-lg p-1 text-center">JavaScript</p>
                            <p class="border rounded-lg p-1 text-center">MySQL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>