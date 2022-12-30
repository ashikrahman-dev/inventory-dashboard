<script>
export default {
    name: "SecondaryBtn"
}
</script>

<template>
    <div>
        <NuxtLink to="/" class="secondary-btn bg-secondary text-dark1 rounded-lg font-semibold flex">
            <slot />
        </NuxtLink>
    </div>
</template>


<style scoped>
.secondary-btn {
    padding: 18px 30px;
    font-size: 18px;
    line-height: 22px;
}
</style>