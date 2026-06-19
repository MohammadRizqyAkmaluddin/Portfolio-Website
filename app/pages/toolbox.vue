<script setup>
definePageMeta({
    layout: 'master'
})

const tools = [
    { name: 'Next JS', image: '/tools/next.png' , url: 'https://nextjs.org/' },
    { name: 'PHP', image: '/tools/php.png', url: 'https://www.php.net/' },
    { name: 'Nuxt JS', image: '/tools/nuxt.png', url: 'https://nuxt.com/' },
    { name: 'Laravel', image: '/tools/laravel.png', url: 'https://laravel.com/' },
    { name: 'Node JS', image: '/tools/node.png', url: 'https://nodejs.org/en' },
    { name: 'React Native', image: '/tools/react.png', url: 'https://react.dev/' },
    { name: 'Vue JS', image: '/tools/vue.png', url: 'https://vuejs.org/' },
    { name: 'MySQL', image: '/tools/mysql.png', url: 'https://www.mysql.com/' },
    { name: 'MongoDB', image: '/tools/mongodb.png', url: 'https://www.mongodb.com/' },
    { name: 'Affinity', image: '/tools/affinity.png', url: 'https://www.affinity.studio/id_id' },
    { name: 'Bootstrap', image: '/tools/bootstrap.png', url: 'https://getbootstrap.com/' },
    { name: 'Tailwind', image: '/tools/tailwind.png', url: 'https://tailwindcss.com/' },
    { name: 'Docker', image: '/tools/docker.png', url: 'https://www.docker.com/' },
    { name: 'Ubuntu', image: '/tools/ubuntu.png', url: 'https://ubuntu.com/' },
    { name: 'Figma', image: '/tools/figma.png', url: 'https://www.figma.com/' },
    { name: 'Git', image: '/tools/git.png', url: 'https://git-scm.com/' },
    { name: 'HTML5', image: '/tools/html.png', url: '' },
    { name: 'CSS3', image: '/tools/css.png', url: '' },
    { name: 'Laragon', image: '/tools/laragon.png', url: 'https://laragon.org/' },
    { name: 'Postman', image: '/tools/postman.png', url: 'https://www.postman.com/' },
    { name: 'TypeScript', image: '/tools/typescript.png', url: 'https://www.typescriptlang.org/' },
    { name: 'VSCode', image: '/tools/vscode.png', url: 'https://code.visualstudio.com/' },
    { name: 'Flutter', image: '/tools/flutter.png', url: 'https://flutter.dev/' },
    { name: 'Azure', image: '/tools/azure.png', url: 'https://azure.microsoft.com/id-id' },
]

</script>

<template>
    <div class="flex flex-col my-16 gap-3">
        <div class="flex flex-col items-center border-y py-2">
            <h1 class="font-semibold text-3xl md:text-5xl w-2/3 md:w-1/2 text-center">
                Behind the Build
            </h1>
        </div>
        <p class="border-y p-2 text-center text-sm text-gray-600">
            Tools & Technologies I Have Experience With
        </p>
    </div>

    <div class="flex flex-col gap-5">
        <div class="grid grid-cols-3 md:grid-cols-8 border-y p-4 gap-7">
            <div v-for="tool in tools">
                <NuxtLink :to="tool.url" target="_blank" rel="noopener noreferrer" external 
                    class="flex flex-col gap-3 items-center group"
                >
                    <div class="border rounded-[20px] p-3 w-fit shadow flex items-center justify-center transition duration-300 group-hover:border-blue-600 group-hover:translate-y-[-10px]">
                        <img :src="tool.image" class="bg-gray-100 rounded-[10px] shadow-md p-5 w-[80px] h-[80px]">
                    </div>
                    <p class="text-sm text-gray-500">{{ tool.name }}</p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>