<script>
export default {
    name: "BlueFill"
}
</script>

<template>
    <div>
        <NuxtLink to="/" class="blue-fill-btn bg-main_purple text-white text-[18px] leading-[22px] rounded-lg py-[18px] px-[30px] flex gap-2 justify-center items-center font-semibold">
            <span>
                <slot />
            </span>
            <span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0254 4.94165L17.0837 9.99998L12.0254 15.0583" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.91699 10H16.942" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
        </NuxtLink>
    </div>
</template>

<style scoped>

</style>