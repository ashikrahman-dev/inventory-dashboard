<template>
    <div class="header-wrap grid content-center">
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
                <div class="login-btn text-white">
                    <NuxtLink to="/login2">Login</NuxtLink>
                    <NuxtLink to="">Try for Free</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .header-wrap {
        background: linear-gradient(180deg, rgba(11, 1, 64, 0.6) 0%, rgba(11, 1, 64, 0) 100%);
        height: 108px;
    }
</style>