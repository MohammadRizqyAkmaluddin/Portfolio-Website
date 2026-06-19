<script setup>
definePageMeta({
    layout: 'master'
})

import { ref, onMounted, onUnmounted } from 'vue'

const timeline = ref(null)
const progressLine = ref(null)
const indicator = ref(null)

let handler

onMounted(() => {
  handler = () => {
    const el = timeline.value

    const scrollY = window.scrollY
    const windowH = window.innerHeight

    const elTop = el.offsetTop
    const elHeight = el.offsetHeight

    // 🔥 posisi scroll relatif ke element
    const start = elTop - windowH / 2
    const end = elTop + elHeight - windowH / 2

    let progress = (scrollY - start) / (end - start)

    // clamp 0 - 1
    progress = Math.max(0, Math.min(progress, 1))

    // 🔥 apply
    progressLine.value.style.height = progress * 100 + "%"
    indicator.value.style.top = progress * 100 + "%"
  }

  window.addEventListener("scroll", handler)

  // 🔥 run sekali pas load biar ga bug
  handler()
})

onUnmounted(() => {
  window.removeEventListener("scroll", handler)
})
</script>

<template>

    <div class="flex flex-col mt-[50px] md:mt-[100px] gap-10 ">
        <div class="flex flex-col gap-5">
            <div class="relative flex justify-end group ">
                <div class="flex flex-col md:flex-row items-center justify-center md:justify-start p-10 gap-10 border md:rounded-tl-full md:rounded-bl-full w-full md:w-[90%] relative ">
                    <div class="profile-anim2 border rounded-full p-3">
                        <img src="/profile.jpg" class="profile-anim w-[140px] h-[140px] rounded-full border object-cover p-2" />
                    </div>
                    <div class="flex flex-col items-center md:items-start gap-1 justify-center">
                        <p>Good Morning!</p>
                        <p class="text-2xl md:text-4xl font-semibold text-center md:text-start">
                            I'm Rizqy, Binusian that <br> learning through real projects
                        </p>
                    </div>

                </div>
            </div>
            <p class="border-y p-2 text-center text-sm text-gray-600">
                Learn More About my Background
            </p>
        </div>
        <div class="flex flex-col mx-7 md:mx-20 gap-10">
            <div class="flex flex-col md:flex-row items-center md:items-end gap-10 m]">
                <img src="/about/logo-binus.png" class="w-[200px]">
                <div class="flex flex-col gap-2 items-center md:items-start">
                    <h1 class="font-semibold text-xl">Education Field Background</h1>
                    <p class="text-[15px] text-gray-600 text-center md:text-start leading-relaxed">
                        I’m a Third year student at Binus University, specializing in Software Development
                        with hands-on experience building full-stack web applications using modern, 
                        decoupled architectures.
                    </p>
                </div>
            </div>
        </div>
        <!-- <div class="flex flex-col mx-7 md:mx-20 gap-10 items-end">
            <div class="flex flex-col md:flex-row items-center md:items-end gap-10 ">
                <img src="/about/logo-binus.png" class="w-[200px] flex md:hidden">
                <div class="flex flex-col gap-2 items-center md:items-end">
                    <h1 class="font-semibold text-xl">Path of Experience</h1>
                    <p class="text-[15px] text-gray-600 text-center md:text-end leading-relaxed">
                        I’m a Third year student at Binus University, specializing in Software Development
                        with hands-on experience building full-stack web applications using modern, 
                        decoupled architectures.
                    </p>
                </div>
                <img src="/about/logo-binus.png" class="w-[200px] hidden md:flex">
            </div>
        </div> -->

        <div class="flex flex-col gap-20 my-10 items-center w-full p-1">
            <h1 class="text-gray-600 text-sm border-y p-2 w-full text-center">My Expereince History and Achievement Timeline</h1>
            <div ref="timeline" class="relative max-w-5xl mx-auto">

                <!-- TRACK -->
                <div class="absolute top-0 w-[6px] h-full bg-gray-200 left-5 md:left-[230px] md:-translate-x-1/2"></div>

                <!-- FILL -->
                <div ref="progressLine"
                    class="
                    absolute top-0 w-[6px] h-0
                    left-5 md:left-[230px] md:-translate-x-1/2

                    bg-gradient-to-b
                    from-blue-100
                    via-blue-200
                    to-blue-400
                ">
                </div>

                <!-- INDICATOR -->
                <div ref="indicator" class="indicator absolute left-5 -translate-x-1/2 md:left-[230px]">
                    <img src="/profile.jpg" class="border rounded-full w-[40px] h-[40px]">
                </div>


                <!-- 🔥 ITEM -->
                <div class="grid mb-[100px] items-start grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_2fr]">

                    <!-- 🔹 LEFT (DESKTOP ONLY) -->
                    <div class="hidden md:block text-right pr-20 gap-2">
                        <h3 class="font-semibold leading-tight">Graphic Designer</h3>
                        <p class="text-sm text-gray-700">(Freelance)</p>
                        <p class="text-sm text-gray-500 mt-2">2019 - 2022</p>
                    </div>

                    <!-- 🔹 DOT -->
                    <div class="relative flex justify-center">
                        <div class="w-4 h-4"></div>
                    </div>

                    <!-- 🔹 RIGHT (ALL DEVICES) -->
                    <div class="pl-6 md:pl-10">

                        <!-- MOBILE -->
                        <div class="md:hidden">
                            <h3 class="font-semibold leading-tight">Graphic Designer</h3>
                            <p class="text-sm text-gray-700">(Freelance)</p>
                            <p class="text-sm text-gray-500 mt-2">2019 - 2022</p>
                            <p class="text-sm text-gray-600">
                                Freelance graphic designer delivering branding and visual assets 
                                across platforms like Fiverr and design contest sites. Experienced 
                                in creating product packaging, posters, and logos, with multiple 
                                contest wins and client-based projects.
                            </p>
                        </div>

                        <!-- DESKTOP -->
                        <div class="hidden md:block">
                            <p class="text-sm text-gray-600 max-w-md">
                                Freelance graphic designer delivering branding and visual assets 
                                across platforms like Fiverr and design contest sites. Experienced 
                                in creating product packaging, posters, and logos, with multiple 
                                contest wins and client-based projects.
                            </p>
                        </div>

                    </div>

                </div>
                <div class="grid mb-[100px] items-start grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_2fr]">

                    <!-- 🔹 LEFT (DESKTOP ONLY) -->
                    <div class="hidden md:block text-right pr-20 gap-2">
                        <h3 class="font-semibold leading-tight">UI/UX Designer</h3>
                        <p class="text-sm text-gray-700">(Freelance)</p>
                        <p class="text-sm text-gray-500 mt-2">2022 - 2024</p>
                    </div>

                    <!-- 🔹 DOT -->
                    <div class="relative flex justify-center">
                        <div class="w-4 h-4"></div>
                    </div>

                    <!-- 🔹 RIGHT (ALL DEVICES) -->
                    <div class="pl-6 md:pl-10">

                        <!-- MOBILE -->
                        <div class="md:hidden">
                            <h3 class="font-semibold leading-tight">UI/UX Designer</h3>
                            <p class="text-sm text-gray-700">(Freelance)</p>
                            <p class="text-sm text-gray-500 mt-2">2022 - 2024</p>
                            <p class="text-sm text-gray-600">
                                Expanded into UI/UX design using tools such as Figma and Adobe XD to craft 
                                intuitive and user-centered interfaces. Worked on both freelance projects 
                                and design competitions, focusing on usability and modern design principles.
                            </p>
                        </div>

                        <!-- DESKTOP -->
                        <div class="hidden md:block">
                            <p class="text-sm text-gray-600 max-w-md">
                            Expanded into UI/UX design using tools such as Figma and Adobe XD to craft 
                            intuitive and user-centered interfaces. Worked on both freelance projects 
                            and design competitions, focusing on usability and modern design principles.
                            </p>
                        </div>

                    </div>

                </div>
                <div class="grid mb-[100px] items-start grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_2fr]">

                    <!-- 🔹 LEFT (DESKTOP ONLY) -->
                    <div class="hidden md:block text-right pr-20 gap-2">
                        <h3 class="font-semibold leading-tight">Learning Software <br> Development</h3>
                        <p class="text-sm text-gray-500 mt-2">2024 - Present</p>
                    </div>

                    <!-- 🔹 DOT -->
                    <div class="relative flex justify-center">
                        <div class="w-4 h-4"></div>
                    </div>

                    <!-- 🔹 RIGHT (ALL DEVICES) -->
                    <div class="pl-6 md:pl-10">

                        <!-- MOBILE -->
                        <div class="md:hidden">
                            <h3 class="font-semibold leading-tight">Learning Software <br> Development</h3>
                            <p class="text-sm text-gray-500 mt-2">2024 - Present</p>
                            <p class="text-sm text-gray-600">
                                Actively developing skills in software engineering by exploring multiple 
                                programming languages and tech stacks. Built various projects with increasing 
                                complexity to strengthen problem-solving and system design abilities.
                            </p>
                        </div>

                        <!-- DESKTOP -->
                        <div class="hidden md:block">
                            <p class="text-sm text-gray-600 max-w-md">
                                Actively developing skills in software engineering by exploring multiple 
                                programming languages and tech stacks. Built various projects with increasing 
                                complexity to strengthen problem-solving and system design abilities.
                            </p>
                        </div>

                    </div>

                </div>
                <div class="grid mb-[100px] items-start grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_2fr]">

                    <!-- 🔹 LEFT (DESKTOP ONLY) -->
                    <div class="hidden md:block text-right pr-20 gap-2">
                        <h3 class="font-semibold leading-tight">First Paid Project</h3>
                        <p class="text-sm text-gray-700">(Freelance)</p>
                        <p class="text-sm text-gray-500 mt-2">Feb 2025</p>
                    </div>

                    <!-- 🔹 DOT -->
                    <div class="relative flex justify-center">
                        <div class="w-4 h-4"></div>
                    </div>

                    <!-- 🔹 RIGHT (ALL DEVICES) -->
                    <div class="pl-6 md:pl-10">

                        <!-- MOBILE -->
                        <div class="md:hidden">
                            <h3 class="font-semibold leading-tight">First Paid Project</h3>
                            <p class="text-sm text-gray-700">(Freelance)</p>
                            <p class="text-sm text-gray-500 mt-2">Feb 2025</p>
                            <p class="text-sm text-gray-600">
                                Delivered a full company profile website along with an internal financial management 
                                system for a construction company. This marked the transition into handling real-world 
                                client requirements and end-to-end project execution.
                            </p>
                        </div>

                        <!-- DESKTOP -->
                        <div class="hidden md:block">
                            <p class="text-sm text-gray-600 max-w-md">
                                Delivered a full company profile website along with an internal financial management 
                                system for a construction company. This marked the transition into handling real-world 
                                client requirements and end-to-end project execution.
                            </p>
                        </div>

                    </div>

                </div>
                <div class="grid items-start grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_2fr]">

                    <!-- 🔹 LEFT (DESKTOP ONLY) -->
                    <div class="hidden md:block text-right pr-20 gap-2">
                        <h3 class="font-semibold leading-tight">Joined Humanitarian <br> Community</h3>
                        <p class="text-sm text-gray-700">(Volunteer)</p>
                        <p class="text-sm text-gray-500 mt-2">2025 - Present</p>
                    </div>

                    <!-- 🔹 DOT -->
                    <div class="relative flex justify-center">
                        <div class="w-4 h-4"></div>
                    </div>

                    <!-- 🔹 RIGHT (ALL DEVICES) -->
                    <div class="pl-6 md:pl-10">

                        <!-- MOBILE -->
                        <div class="md:hidden">
                            <h3 class="font-semibold leading-tight">Joined Humanitarian <br> Community</h3>
                            <p class="text-sm text-gray-700">(Volunteer)</p>
                            <p class="text-sm text-gray-500 mt-2">2025 - Present</p>
                            <p class="text-sm text-gray-600">
                                Contributing as a core team member in a social and humanitarian organization, 
                                participating in community-driven initiatives and collaborative projects aimed 
                                at creating positive impact.
                            </p>
                        </div>

                        <!-- DESKTOP -->
                        <div class="hidden md:block">
                            <p class="text-sm text-gray-600 max-w-md">
                                Contributing as a core team member in a social and humanitarian organization, 
                                participating in community-driven initiatives and collaborative projects aimed 
                                at creating positive impact.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </div>

        <p class="border-y p-2 text-center text-sm text-gray-600">
            Certifications
        </p>

        <div class="flex gap-10 justify-center items-start">
            <div class="flex flex-col gap-2">
                <img src="/certificate/linkedin.png" class="w-[300px] rounded-xl">     
                <h1 class="font-semibold max-w-[300px]">Essential JavaScript Training</h1> 
                <NuxtLink to="https://catalog-education.oracle.com/ords/certview/sharebadge?id=4F64ACA7E3A185A6C206B2830887C5B49FB7AA1F286EF6C6738FC4035CB1BEFC" 
                    target="_blank" rel="noopener noreferrer" external
                    class="text-sm text-blue-800">
                    Show Credentials
                </NuxtLink>
            </div>
            <div class="flex flex-col gap-2">
                <img src="/certificate/oracle.png" class="w-[300px]"> 
                <h1 class="font-semibold max-w-[300px]">Oracle Cloud Infrastructure 2025 AI Foundations Associate</h1>
                <NuxtLink to="https://catalog-education.oracle.com/ords/certview/sharebadge?id=4F64ACA7E3A185A6C206B2830887C5B49FB7AA1F286EF6C6738FC4035CB1BEFC" 
                    target="_blank" rel="noopener noreferrer" external
                    class="text-sm text-blue-800">
                    Show Credentials
                </NuxtLink>
            </div>
        </div>
        
    </div>

</template>

<style scoped>

.indicator {
  transform: translate(-50%, -50%);
}

.profile-img {
  width: 200px;
  object-fit: cover;
  transition: all 0.4s ease;
}
</style>