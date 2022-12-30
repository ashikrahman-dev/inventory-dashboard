
<script>
import BlueFill from './BlueFill.vue'
import SecondaryBtn from './SecondaryBtn.vue'

export default {
    components: { BlueFill, SecondaryBtn }
}
</script>


<template>
    <div>
        <div class="hero-area-wrap z-10 grid content-center">
            <div class="container mx-auto">
                <div class="grid grid-cols-12">
                    <div class="col-span-6 text-white">
                        <h1 class=" text-7xl ">
                            <span class="font-black">Systemize</span> your <span class="font-black block">e-commerce</span> company
                        </h1>
                        <p class="mt-8 mb-12">End-to-end e-commerce management</p>

                        <div class="flex gap-5">
                            <BlueFill>Book a Demo</BlueFill>
                            <SecondaryBtn>Sign up today</SecondaryBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.hero-area-wrap {
    background: linear-gradient(90deg, #0B0140 0%, rgba(11, 1, 64, 0) 60.34%), url('../assets/img/hero-bg.jpg');
    background-size: cover, cover;
    background-repeat: no-repeat, no-repeat;
    min-height: 1105px;

}
</style>