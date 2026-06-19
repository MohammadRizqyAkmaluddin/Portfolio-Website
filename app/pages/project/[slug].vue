<script setup>
    definePageMeta({
        layout: 'master'
    })

    import { Icon } from '@iconify/vue';
    const route = useRoute()
    const slug = route.params.slug

    const back = () => {
        navigateTo('/project')
    }
</script>

<template>
  <div class="mb-10 mt-5">
      <button @click="back" class="mb-5 mx-5 flex items-center gap-1 font-semibold text-gray-600 hover:text-black">
          <Icon icon="weui:back-filled" width="20" height="20"/>
          Back
      </button> 
      <div v-if="slug === 'courtside'">
        <div class="flex flex-col gap-10">

            <div class="border-y py-2 flex items-center justify-center">
                <img src="/showcase/logo-courtside.png" class="w-[200px] md:w-[300px]">
            </div>

            <img src="/project/courtside/1.png" class="border-y px-5 py-5">
            <div class="flex flex-col mx-6 gap-2">
                <h1 class="font-semibold text-xl">Courtside</h1>
                <div class="flex flex-col">
                    <p class="text-gray-500 w-[80%]">
                        Web-based sports court booking platform designed to simplify the reservation 
                        process for users while helping venue owners manage schedules, bookings, and 
                        payments in a more organized and efficient way.
                    </p>
                    <NuxtLink to="http://www.courtside.my.id/" target="_blank" rel="noopener noreferrer" external
                        class="text-sm text-blue-800">
                        Visit Live Website ->
                    </NuxtLink>
                </div>
                <div class="flex gap-3 mt-3">
                    <div class="flex flex-col gap-2 w-1/2">
                        <h1 class="font-semibold text-gray-700">Tech Stack</h1>
                        <div class="grid grid-cols-2 gap-2 text-sm">
                            <p class="border rounded-lg p-1 text-center">Laravel</p>
                            <p class="border rounded-lg p-1 text-center">Nuxt JS</p>
                            <p class="border rounded-lg p-1 text-center">Tailwind</p>
                            <p class="border rounded-lg p-1 text-center">MySQL</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 w-1/2">
                        <h1 class="font-semibold text-gray-700">Tools</h1>
                        <div class="grid grid-cols-1 gap-2 text-sm">
                            <p class="border rounded-lg p-1 text-center">VSCode</p>
                            <p class="border rounded-lg p-1 text-center">Postman</p>
                        </div>
                    </div>
                </div>
            </div>

            <p class="border-y p-2 text-center text-sm text-gray-600">
                User As Player
            </p>

            <div class="flex flex-col md:flex-row gap-3 px-5 border-y py-5">
                <img src="/project/courtside/2.2.png" class="md:w-1/2">
                <div class="flex flex-col gap-5 md:w-1/2">
                    <img src="/project/courtside/2.1.png">
                    <div class="flex flex-col gap-2">
                        <h1 class="font-semibold">Venue Exploration & Detail Page</h1>
                        <p class="text-sm md:text-base leading-relaxed text-gray-600">
                            This section showcases the venue listing page where users can browse available 
                            sports venues, along with the venue detail page. The detail page provides 
                            comprehensive information about each venue, including available courts, real-time 
                            schedule checking, and the core booking functionality.    
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col md:flex-row gap-3 px-5 border-y py-5">
                <img src="/project/courtside/3.1.png" class="md:w-1/2">
                <div class="flex flex-col gap-5 md:w-1/2">
                    <img src="/project/courtside/3.2.png">
                    <div class="flex flex-col gap-2">
                        <h1 class="font-semibold">Booking & Payment Flow</h1>
                        <p class="text-sm md:text-base leading-relaxed text-gray-600">
                            This section highlights the end-to-end booking experience, 
                            starting from schedule selection to final payment. The process 
                            is seamlessly integrated with the Midtrans payment gateway, 
                            ensuring secure and efficient transactions for users.   
                        </p>
                    </div>
                </div>
            </div>

            <p class="border-y p-2 text-center text-sm text-gray-600">
                User As Venue Owner
            </p>

            <div class="flex flex-col gap-3 px-5 border-y py-5">
                <img src="/project/courtside/7.png" class="">
                <div class="flex flex-col gap-2">
                    <h1 class="font-semibold">Venue Finance Dashboard</h1>
                    <p class="text-sm md:text-base leading-relaxed text-gray-600">
                        Focused on the venue owner’s perspective, this dashboard presents 
                        financial insights such as total balance with a withdrawal request 
                        feature, withdrawal history, and detailed analytics. It includes 
                        visualizations like donut charts for income distribution per venue 
                        and line charts for monthly revenue trends, along with additional 
                        income tracking from offline store sales.
                    </p>
                </div>    
            </div>

            <div class="flex flex-col gap-3 px-5 border-y py-5">
                <img src="/project/courtside/4.1.png" class="">
                <div class="flex flex-col md:flex-row items-start gap-5">
                    <img src="/project/courtside/4.2.png" class="md:w-1/2">
                    <div class="flex flex-col gap-2">
                        <h1 class="font-semibold">Venue Store Dashboard (POS System)</h1>
                        <p class="text-sm md:text-base leading-relaxed text-gray-600">
                            This section demonstrates a built-in point-of-sale system used by venue staff. 
                            It allows cashiers to handle transactions through an add-to-cart interface, as 
                            well as manage store inventory by adding new items with details such as price, 
                            image, and quantity.
                        </p>
                    </div>    
                </div>
            </div>

            <div class="flex flex-col md:flex-row gap-3 px-5 border-y py-5">
                <img src="/project/courtside/5.1.png" class="w-[600px]">
                <div class="flex flex-col gap-2">
                    <h1 class="font-semibold">Booking Management Dashboard</h1>
                    <p class="text-sm md:text-base leading-relaxed text-gray-600">
                        Designed for operational staff, this dashboard enables manual 
                        booking creation for walk-in or phone reservations. It is fully 
                        synchronized with real-time availability to prevent conflicts 
                        with online bookings. The system also provides booking lists 
                        sorted by schedule and supports handling reschedule and cancellation 
                        requests.
                    </p>
                </div>         
            </div>
            
            <div class="flex flex-col md:flex-row gap-3 px-5 border-y py-5">
                <img src="/project/courtside/6.1.png" class="md:w-1/2">
                <div class="flex flex-col gap-2">
                    <h1 class="font-semibold">Venue Settings Page</h1>
                    <p class="text-sm md:text-base leading-relaxed text-gray-600">
                        This section covers the configuration features available to 
                        venue owners, including editing venue information, managing 
                        venue images, adding bank accounts for withdrawals, and 
                        updating account credentials such as email and password.
                    </p>
                </div>         
            </div>

        </div>
    </div>

    <div v-else-if="slug === 'connexa'">
        <div class="flex flex-col gap-10">
            <div class="border-y py-2 flex items-center justify-center">
                <img src="/showcase/logo-connexa.png" class="w-[200px] md:w-[300px]">
            </div>

            <img src="/project/connexa/1.png" class="border-y px-5 py-5">

            <div class="flex flex-col mx-6 gap-2">
                <h1 class="font-semibold text-xl">Connexa</h1>
                <div class="flex flex-col gap-2">
                    <p class="text-gray-500 md:w-[80%] text-sm">
                        Web-based professional networking platform inspired by LinkedIn, 
                        enabling users to connect with others, follow companies, explore job 
                        opportunities, and build a personalized profile for personal branding. 
                        It also provides tools for companies to post job listings, promote their pages, 
                        and engage with potential candidates through an integrated messaging system.
                    </p>
                    <NuxtLink to="http://www.courtside.my.id/" target="_blank" rel="noopener noreferrer" external
                        class="text-sm text-blue-800">
                        Visit Live Website ->
                    </NuxtLink>
                </div>
                <div class="flex gap-3 mt-3">
                    <div class="flex flex-col gap-2 w-1/2">
                        <h1 class="font-semibold text-gray-700">Tech Stack</h1>
                        <div class="grid grid-cols-2 gap-2 text-sm">
                            <p class="border rounded-lg p-1 text-center">Laravel</p>
                            <p class="border rounded-lg p-1 text-center">Bootstrap</p>
                            <p class="border rounded-lg p-1 text-center">JavaScript</p>
                            <p class="border rounded-lg p-1 text-center">MySQL</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 w-1/2">
                        <h1 class="font-semibold text-gray-700">Tools</h1>
                        <div class="grid grid-cols-1 gap-2 text-sm">
                            <p class="border rounded-lg p-1 text-center">VSCode</p>
                            <p class="border rounded-lg p-1 text-center">Postman</p>
                        </div>
                    </div>
                </div>
            </div>

            <p class="border-y p-2 text-center text-sm text-gray-600">
                Individual User
            </p>
            
            <div class="flex flex-col md:flex-row gap-3 px-5 border-y py-5">
                <img src="/project/connexa/2.png" class="md:w-1/2">
                <div class="flex flex-col">
                    <img src="/project/connexa/2.2.png">
                    <p class="text-sm leading-relaxed text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.</p>
                </div>
            </div>
            
            <div class="flex flex-col md:flex-row gap-3 px-5 border-y py-5">
                <img src="/project/connexa/3.1.png" class="w-[500px]">
                <p class="text-sm leading-relaxed text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.</p>
            </div>
            
            <div class="flex flex-col md:flex-row gap-3 px-5 border-y py-5">
                <img src="/project/connexa/4.1.png" class="md:w-1/2">
                <div class="flex flex-col">
                    <img src="/project/connexa/4.2.png">
                    <p class="text-sm leading-relaxed text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.</p>
                </div>
            </div>

            <div class="flex flex-col gap-3 px-5 border-y py-5">
                <img src="/project/connexa/5.1.png">
                <p class="text-sm leading-relaxed text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.</p>
            </div>

            <div class="flex flex-col md:flex-row gap-3 px-5 border-y py-5">
                <img src="/project/connexa/6.1.png" class="md:w-1/2">
                <div class="flex flex-col">
                    <img src="/project/connexa/6.2.png">
                    <p class="text-sm leading-relaxed text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.</p>
                </div>
            </div>

            <div class="flex flex-col gap-3 px-5 border-y py-5">
                <img src="/project/connexa/7.1.png">
                <p class="text-sm leading-relaxed text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.</p>
            </div>

        </div>
    </div>
    
    <div v-else-if="slug === 'sparky'">
      sparky
    </div>

    <div v-else-if="slug === 'academia'">
      academia
    </div>

    <div v-else-if="slug === 'luxora'">
      luxora
    </div>

  </div>
</template>