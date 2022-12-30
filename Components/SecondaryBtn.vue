<script>
export default {
    name: "SecondaryBtn"
}
</script>

<template>
    <div>
        <NuxtLink to="/" class="secondary-btn bg-secondary text-dark1 text-[18px] leading-[22px] rounded-lg font-semibold flex">
            <slot />
        </NuxtLink>
    </div>
</template>


<style scoped>
.secondary-btn {
    padding: 18px 30px;
}
</style>