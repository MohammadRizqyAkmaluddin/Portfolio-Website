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

const showUnavailable = () => {
    unavailable = true
}
const closeUnavailable = () => {
    unavailable = false
}
</script>

<template>
  <div class="mb-10 mt-16">
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
                    <NuxtLink to="http://www.conexa.my.id/" target="_blank" rel="noopener noreferrer" external
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
                    <div class="flex flex-col gap-2">
                        <h1 class="font-semibold">Social Feed & Interaction</h1>
                        <p class="text-sm md:text-base leading-relaxed text-gray-600">
                            This section presents the main homepage feed, similar to a 
                            professional networking platform, where users can explore 
                            posts from their connections and followed companies. It also 
                            highlights interactive features such as liking, commenting, 
                            and sharing posts, enabling active engagement within the community.
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="flex flex-col md:flex-row gap-3 px-5 border-y py-5">
                <img src="/project/connexa/3.1.png" class="w-[500px]">
                <div class="flex flex-col gap-2">
                    <h1 class="font-semibold">Messaging System</h1>
                    <p class="text-sm md:text-base leading-relaxed text-gray-600">
                        This section showcases the built-in messaging feature, allowing users 
                        to communicate directly with each other in real time. It supports seamless 
                        conversations to enhance networking and professional interactions.
                    </p>
                </div>    
            </div>
            
            <div class="flex flex-col md:flex-row gap-3 px-5 border-y py-5">
                <img src="/project/connexa/4.1.png" class="md:w-1/2">
                <div class="flex flex-col">
                    <img src="/project/connexa/4.2.png">
                    <div class="flex flex-col gap-2">
                        <h1 class="font-semibold">Profile & Personal Branding</h1>
                        <p class="text-sm md:text-base leading-relaxed text-gray-600">
                            This section displays the user profile page, structured 
                            with multiple sections similar to modern professional platforms. 
                            Users can customize and edit their profiles to showcase their 
                            skills, experience, and personal branding.
                        </p>
                    </div>    
                </div>
            </div>

            <div class="flex flex-col gap-3 px-5 border-y py-5">
                <img src="/project/connexa/5.1.png">
                <div class="flex flex-col gap-2">
                    <h1 class="font-semibold">Job Discovery & Application</h1>
                    <p class="text-sm md:text-base leading-relaxed text-gray-600">
                        This section highlights the job listing page, where users can 
                        browse opportunities from various companies. It includes filtering 
                        options such as salary and job role, along with an integrated 
                        application system for a streamlined job-seeking experience.
                    </p>
                </div>    
            </div>

            <div class="flex flex-col md:flex-row gap-3 px-5 border-y py-5">
                <img src="/project/connexa/6.1.png" class="md:w-1/2">
                <div class="flex flex-col">
                    <img src="/project/connexa/6.2.png">
                    <div class="flex flex-col gap-2">
                        <h1 class="font-semibold">Network & Notifications</h1>
                        <p class="text-sm md:text-base leading-relaxed text-gray-600">
                            This section presents the main homepage feed, similar to a 
                            professional networking platform, where users can explore 
                            posts from their connections and followed companies. It also 
                            highlights interactive features such as liking, commenting, 
                            and sharing posts, enabling active engagement within the community.
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-3 px-5 border-y py-5">
                <img src="/project/connexa/7.1.png">
                <div class="flex flex-col gap-2">
                    <h1 class="font-semibold">Company Recruitment Dashboard</h1>
                    <p class="text-sm md:text-base leading-relaxed text-gray-600">
                        This section focuses on the company perspective, showcasing 
                        the recruitment page where companies can manage job applicants. 
                        It displays applicant lists along with their application 
                        status and progress, enabling efficient candidate tracking 
                        and hiring workflow management.
                    </p>
                </div>    
            </div>

        </div>
    </div>

    <div v-else-if="slug === 'sparky'">
        <div class="flex flex-col gap-10">
            <div class="border-y py-2 flex items-center justify-center">
                <img src="/showcase/logo-sparky.png" class="w-[150px] md:w-[250px]">
            </div>

            <img src="/showcase/sparky2.png" class="border-y px-5 py-5">

            <div class="flex flex-col mx-6 gap-2">
                <h1 class="font-semibold text-xl">Sparky</h1>
                <div class="flex flex-col gap-2">
                    <p class="text-gray-500 md:w-[80%] text-sm">
                        Smart parking system designed to automate parking management 
                        by tracking vehicle duration in real-time and displaying a live
                        parking fee calculation. It allows users to monitor their parking 
                        session and seamlessly exit through an integrated digital checkout 
                        process, improving efficiency and user convenience.
                    </p>
                    <button class="text-sm text-gray-400 items-start flex w-fit" disabled>
                     Live Website is Unavailable
                    </button>
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
            
            <div class="flex flex-col md:flex-row gap-3 px-5 border-y py-5">
                <img src="/project/sparky/1.png" class="w-[500px] shadow">
                <div class="flex flex-col gap-2">
                    <h1 class="font-semibold">Parking Initialization</h1>
                    <p class="text-sm md:text-base leading-relaxed text-gray-600">
                        This section displays the main interface after user login, featuring a 
                        simple and focused interaction flow. Users can initiate a parking session 
                        by clicking the "Park Now" button, which triggers a popup for entering 
                        their vehicle plate number before starting the session.
                    </p>
                </div>    
            </div>

            <div class="flex flex-col md:flex-row gap-3 px-5 border-y py-5">
                <img src="/project/sparky/2.png" class="md:hidden flex w-full shadow">
                <div class="flex flex-col gap-2">
                    <h1 class="font-semibold">Active Parking & Exit Process</h1>
                    <p class="text-sm md:text-base leading-relaxed text-gray-600">
                        This section showcases the active parking state, where the system tracks 
                        the parking session in real time. A unique parking code is generated for 
                        each session, which is required for exiting. Users can end their parking 
                        by entering the code, with the system automatically calculating 
                        the parking fee based on the total duration.
                    </p>
                </div>    
                <img src="/project/sparky/2.png" class="hidden md:flex w-[500px] shadow">
            </div>
            
        </div>
    </div>

    <div v-else-if="slug === 'academia'">
        <div class="flex flex-col gap-10">
            <div class="border-y py-2 flex items-center justify-center">
                <img src="/showcase/logo-academia.png" class="w-[150px] md:w-[250px]">
            </div>

            <img src="/showcase/academia2.png" class="border-y px-5 py-5 shadow">

            <div class="flex flex-col mx-6 gap-2">
                <h1 class="font-semibold text-xl">Academia</h1>
                <div class="flex flex-col gap-2">
                    <p class="text-gray-500 md:w-[80%] text-sm">
                        Smart parking system designed to automate parking management 
                        by tracking vehicle duration in real-time and displaying a live
                        parking fee calculation. It allows users to monitor their parking 
                        session and seamlessly exit through an integrated digital checkout 
                        process, improving efficiency and user convenience.
                    </p>
                    <NuxtLink to="http://www.academia-plus.my.id/" target="_blank" rel="noopener noreferrer" external
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
                            <p class="border rounded-lg p-1 text-center">Laragon</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="flex flex-col md:flex-row  gap-3 px-5 border-y py-5">
                <img src="/project/academia/3.1.png" class="w-full md:w-1/2 shadow-lg">
                <div class="flex flex-col gap-2">
                    <img src="/project/academia/3.2.png" class="w-full shadow-lg">
                    <h1 class="font-semibold">Course Discovery & Career Insight</h1>
                    <p class="text-sm md:text-base leading-relaxed text-gray-600">
                        This section showcases the course listing page within a specific category, 
                        displaying a variety of available courses along with a highlighted top-rated 
                        course. It also includes a dedicated career information section, providing 
                        insights into potential career paths, role descriptions, and average salary 
                        expectations related to the selected skill domain.
                    </p>
                </div>    
            </div>

            <div class="flex flex-col md:flex-row  gap-3 px-5 border-y py-5">
                <img src="/project/academia/2.1.png" class="w-full md:w-1/2 shadow">
                <div class="flex flex-col gap-2">
                    <img src="/project/academia/2.2.png" class="w-full shadow">
                    <h1 class="font-semibold">Course Detail & Purchase Flow</h1>
                    <p class="text-sm md:text-base leading-relaxed text-gray-600">
                        This section highlights the course detail page, where users can explore 
                        course previews, read user reviews, and add courses to their shopping bag. 
                        It also includes the shopping bag interface, allowing users to review 
                        selected courses before proceeding to checkout.
                    </p>
                </div>    
            </div>

            <div class="flex flex-col gap-3 px-5 border-y py-5">
                <img src="/project/academia/4.1.png" class="w-full shadow">
                <img src="/project/academia/4.2.png" class="w-full shadow">
                <div class="flex flex-col gap-2">
                    <h1 class="font-semibold">Learning Dashboard & Course Experience</h1>
                    <p class="text-sm md:text-base leading-relaxed text-gray-600">
                        This section presents the learning dashboard, where users can view all 
                        purchased courses along with their overall learning progress. It also 
                        showcases the course learning page, offering structured learning 
                        components such as Video-Based Learning (VBL), exercises, and final 
                        projects, all integrated with progress tracking.
                    </p>
                </div>
            </div>

            <div class="flex flex-col gap-3 px-5 border-y py-5">
                <img src="/project/academia/4.3.png" class="w-full shadow">
                <div class="flex flex-col gap-2">
                    <h1 class="font-semibold">Profile & Certification</h1>
                    <p class="text-sm md:text-base leading-relaxed text-gray-600">
                        This section displays the user profile within the learning dashboard, 
                        including personal information, earned certificates from completed courses, 
                        and basic profile management features for updating user details.
                    </p>
                </div>
            </div>
            
        </div>
    </div>

    <div v-else-if="slug === 'luxora'">
        <div class="flex flex-col gap-10">
            <div class="border-y py-2 flex items-center justify-center">
                <img src="/showcase/logo-luxora.png" class="w-[150px] md:w-[250px]">
            </div>

            <img src="/showcase/luxora2.png" class="border-y px-5 py-5 shadow border-y">

            <div class="flex flex-col mx-6 gap-2">
                <h1 class="font-semibold text-xl">Luxora</h1>
                <div class="flex flex-col gap-2">
                    <p class="text-gray-500 md:w-[80%] text-sm">
                        Web-based e-commerce platform focused on luxury fashion, providing 
                        a premium shopping experience for high-end brands. It features 
                        curated product listings, seamless browsing, and secure transactions, 
                        tailored to reflect the exclusivity and elegance of luxury retail.
                    </p>
                    <button class="text-sm text-gray-400 items-start flex w-fit" disabled>
                     Live Website is Unavailable
                    </button>
                </div>
                <div class="flex gap-3 mt-3">
                    <div class="flex flex-col gap-2 w-1/2">
                        <h1 class="font-semibold text-gray-700">Tech Stack</h1>
                        <div class="grid grid-cols-2 gap-2 text-sm">
                            <p class="border rounded-lg p-1 text-center">Native PHP</p>
                            <p class="border rounded-lg p-1 text-center">HTML & CSS</p>
                            <p class="border rounded-lg p-1 text-center">JavaScript</p>
                            <p class="border rounded-lg p-1 text-center">MySQL</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 w-1/2">
                        <h1 class="font-semibold text-gray-700">Tools</h1>
                        <div class="grid grid-cols-1 gap-2 text-sm">
                            <p class="border rounded-lg p-1 text-center">VSCode</p>
                            <p class="border rounded-lg p-1 text-center">Laragon</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="flex flex-col gap-3 px-5 border-y py-5">
                <img src="/project/luxora/1.png" class="w-full shadow">
                <div class="flex flex-col gap-2">
                    <h1 class="font-semibold">Product Listing by Category</h1>
                    <p class="text-sm md:text-base leading-relaxed text-gray-600">
                        This section showcases the product listing page within a specific store category, 
                        allowing users to browse curated luxury fashion items in a clean and organized layout.
                    </p>
                </div>
            </div>
            <div class="flex flex-col gap-3 px-5 border-y py-5">
                <img src="/project/luxora/2.png" class="w-full shadow">
                <div class="flex flex-col gap-2">
                    <h1 class="font-semibold">Product Detail & Selection</h1>
                    <p class="text-sm md:text-base leading-relaxed text-gray-600">
                        This section highlights the product detail page, where users can view detailed 
                        product information and select variations such as size before adding items to 
                        their cart, ensuring a tailored shopping experience.
                    </p>
                </div>
            </div>

            <div class="flex flex-col gap-3 px-5 border-y py-5">
                <img src="/project/luxora/3.1.png" class="w-full shadow-lg">
                <img src="/project/luxora/3.2.png" class="w-full shadow-lg">
                <div class="flex flex-col gap-2">
                    <h1 class="font-semibold">Cart & Checkout Flow</h1>
                    <p class="text-sm md:text-base leading-relaxed text-gray-600">
                        This section presents the shopping cart interface, displaying 
                        selected products along with an order summary. It also includes 
                        the successful order confirmation page, providing feedback after
                        a completed transaction.
                    </p>
                </div>    
            </div>

            <div class="flex flex-col gap-3 px-5 border-y py-5">
                <img src="/project/luxora/4.1.png" class="w-full shadow">
                <img src="/project/luxora/4.2.png" class="w-full shadow">
                <div class="flex flex-col gap-2">
                    <h1 class="font-semibold">Order History & Details</h1>
                    <p class="text-sm md:text-base leading-relaxed text-gray-600">
                        This section displays the user’s order history, where transactions can be 
                        filtered by a specific time range. It also includes the order detail page, 
                        allowing users to review complete information for each individual purchase.
                    </p>
                </div>    
            </div>

            <div class="flex flex-col gap-3 px-5 border-y py-5">
                <img src="/project/luxora/5.png" class="w-full shadow">
                <div class="flex flex-col gap-2">
                    <h1 class="font-semibold">Store Management Dashboard</h1>
                    <p class="text-sm md:text-base leading-relaxed text-gray-600">
                        This section focuses on the store owner’s perspective, showcasing a 
                        dashboard where sellers can manage their products, including adding, 
                        updating, and organizing items available for sale.
                    </p>
                </div>    
            </div>
            
        </div>
    </div>


  </div>
</template>