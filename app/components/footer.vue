<template>
    <div class="flex flex-col md:flex-row justify-between border-y mb-7 items-start px-5 bg-[linear-gradient(to_right,#FFFEFB_0%,#FFFEFB_40%,#ffffff_100%)]">
        <div class="flex flex-col gap-5 w-full md:w-1/2 px-1 md:px-10 py-5 border-b md:border-b-0 justify-between">
            <img src="/logo.png" class="w-[45px] md:w-[40px] object-contain">
            <p class="text-sm text-gray-400 w-1/2 md:w-2/3">I'm Braydon - a senior front-end developer, blogger and public speaker. Thanks for checking out my site!</p>
            <p class="text-sm text-gray-400">© 2026 Mohammad Rizqy Akmaluddin</p>
        </div>
        <div class="flex justify-between w-full md:w-1/2 px-1 md:px-16 py-5 border-s-none md:border-s h-full items-start">
            <div class="flex flex-col gap-2 text-gray-500">
                <h1 class="mb-3 text-gray-600 font-semibold">General</h1>
                <NuxtLink to="/" class="text-sm hover:text-black">Home</NuxtLink>
                <NuxtLink to="/about" class="text-sm hover:text-black">About</NuxtLink>
                <NuxtLink to="/project" class="text-sm hover:text-black">Projects</NuxtLink>
                <NuxtLink to="/toolbox" class="text-sm hover:text-black">Toolbox</NuxtLink>
            </div>
            <div class="flex flex-col gap-2 text-gray-500">
                <h1 class="mb-3 text-gray-600 font-semibold">Social</h1>
                <NuxtLink to="/" class="text-sm hover:text-black">LinkedIn</NuxtLink>
                <NuxtLink to="/about" class="text-sm hover:text-black">Instagram</NuxtLink>
                <NuxtLink to="/project" class="text-sm hover:text-black">GitHub</NuxtLink>
            </div>
            <div class="flex flex-col gap-2 text-gray-500">
                <h1 class="mb-3 text-gray-600 font-semibold">Websites</h1>
                <NuxtLink to="/" class="text-sm hover:text-black">Courtside</NuxtLink>
                <NuxtLink to="/about" class="text-sm hover:text-black">Connexa</NuxtLink>
                <NuxtLink to="/project" class="text-sm hover:text-black">Academia+</NuxtLink>
            </div>
        </div>
    </div>
</template>