<script>
export default {
    name: "SecondaryBtn"
}
</script>

<template>
    <div>
        <NuxtLink to="/" class="bg-secondary text-dark1 text-[18px] leading-[22px] rounded-lg py-[18px] px-[30px] font-semibold flex">
            <slot />
        </NuxtLink>
    </div>
</template>


<style scoped>

</style>