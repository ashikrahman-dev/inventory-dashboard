<script>
import SecondaryBtn from '../CommonBtn/SecondaryBtn'


export default {
    components: { SecondaryBtn }
}
</script>

<template>
    <div class="header-wrap grid content-center z-20 relative">
        <div class="container mx-auto">
            <div class="flex">
                <div class="logo">
                    <NuxtLink to="/">
                        <img src="../../../assets/img/logo-white.svg" alt="">
                    </NuxtLink>
                </div>
                <div class="menu-bar text-white flex-auto flex align-middle justify-center gap-8">
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="">Features</NuxtLink>
                    <NuxtLink to="">Company</NuxtLink>
                    <NuxtLink to="">Intergrations</NuxtLink>
                    <NuxtLink to="">Pricing</NuxtLink>
                    <NuxtLink to="">Help Center</NuxtLink>
                </div>
                <div class="login-btn text-white flex gap-8 items-center">
                    <NuxtLink to="/login2">Login</NuxtLink>
                    <NuxtLink to="/" class="">
                        <SecondaryBtn>Try for Free</SecondaryBtn>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .header-wrap {
        background: linear-gradient(180deg, rgba(11, 1, 64, 0.6) 0%, rgba(11, 1, 64, 0) 100%);
        height: 108px;
        margin-bottom: -108px;
        
    }
</style>