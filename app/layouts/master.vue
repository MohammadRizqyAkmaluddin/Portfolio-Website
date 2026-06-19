<script setup>
    import { Icon } from '@iconify/vue';
</script>


<template>
    <div class="max-[1000px]:hidden bg-[linear-gradient(to_right,#FFFEFB_100%,#ffffff_90%,#ffffff_100%)]">
        <div class="max-w-7xl mx-auto min-h-screen flex flex-col hatch-pattern border-x">
            <Navbar />
            <main class="border-e border-s mx-7 pb-20 font-inter bg-[linear-gradient(to_right,#FFFEFB_0%,#FFFEFB_3%,#ffffff_30%)]">
                <slot />
            </main>
            <Footer />  
        </div>
    </div>
    <div class="min-[1000px]:hidden bg-[linear-gradient(to_right,#FFFEFB_0%,#FFFEFB_50%,#ffffff_100%)]">
        <div class="max-w-7xl mx-auto min-h-screen flex flex-col hatch-pattern">
            <Navbar />
            <main class="min-h-screen font-inter pb-20 bg-[linear-gradient(to_right,#FFFEFB_0%,#FFFEFB_40%,#ffffff_100%)]">
                <slot />
            </main>
            <Footer />
        </div>
    </div>
</template>

<style scoped>
.hatch-pattern {
  background-image: repeating-linear-gradient(
    45deg,
    #d1d5db 0.2px,
    #d1d5db 1px,
    transparent 1px,
    transparent 3.5px
  );
} 
</style>