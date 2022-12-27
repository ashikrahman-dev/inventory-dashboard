<template>
  <div class=" flex ">
    <div class="w-full">
      <swiper
        :slides-per-view="1"
        :space-between="0"
        :speed="1500"
        :loop="true"
        :loopFillGroupWithBlank="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="mySwiper"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :mousewheel="true"
        :direction="'vertical'"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        
      >
        <swiper-slide class=" text-7xl font-bold text-white grid place-content-center">
          <div class="slide-content relative z-10">
            <div class="absolute top-[-85px] left-[-44px] -z-10">
              <img src="../../assets/img/login-quote-icon.png" class=" w-[118px]">
            </div>
            <h2 class=" text-[2.5rem] leading-[3.25rem] text-white font-normal">
              Inventory Management is not the <span class=" font-bold">main thing</span> to success, its the <span class="font-bold">ONLY</span> thing to success. 
            </h2>
          </div>
        </swiper-slide>
        <swiper-slide class=" text-7xl font-bold text-white">
          <div class="slide-content relative z-10">
            <div class="absolute top-[-85px] left-[-44px] -z-10">
              <img src="../../assets/img/login-quote-icon.png" class=" w-[118px]">
            </div>
            <h2 class=" text-[2.5rem] leading-[3.25rem] text-white font-normal">
              A good system <span class=" font-bold">shortens</span> the road to the goal  
            </h2>
          </div>
        </swiper-slide>
        <swiper-slide class=" text-7xl font-bold text-white">
          <div class="slide-content relative z-10">
            <div class="absolute top-[-85px] left-[-44px] -z-10">
              <img src="../../assets/img/login-quote-icon.png" class=" w-[118px]">
            </div>
            <h2 class=" text-[2.5rem] leading-[3.25rem] text-white font-normal">
              <span class=" font-bold">Systemize</span> your <span class="font-bold">e-commerce</span> company. 
            </h2>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="login-form w-full">
      <div class="ml-[125px]">
        <div class="login-bg h-full min-h-screen grid items-center">
        <div class="xl:container mx-auto ">
            <div class="py-12 px-4 sm:px-6 lg:px-8 ">
                <div class="w-full max-w-md space-y-8 login-wrap bg-white" >
                    <div>
                        <img class="h-6 w-auto" src="../../assets/img/logo.svg" alt="Your Company" />
                        <h2 class="mt-6 text-4xl font-bold tracking-tight text-dark1">Sign in</h2>
                    </div>
                    <form class="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div class="-space-y-px rounded-md gap-6 grid">
                            <div>
                                <label for="email-address" class="text-base font-medium text-dark1 pb-2.5 inline-block">Email</label>
                                <input id="email-address" name="email" type="email" autocomplete="email" required="" class="relative block w-full appearance-none rounded-lg border-2 border-dark5 px-3 py-2 text-dark1 placeholder-dark4 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 font-medium" placeholder="Email address" />
                            </div>
                            <div>
                                <label for="password" class="text-base font-medium text-dark1 pb-2.5 inline-block">Password</label>
                                <input id="password" name="password" type="password" autocomplete="current-password" required="" class="relative block w-full appearance-none rounded-lg border-2 border-dark5 px-3 py-2 text-dark1 placeholder-dark4 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 font-medium" placeholder="Password" />
                            </div>
                        </div>
            
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                <label for="remember-me" class="ml-2 block text-sm text-dark2 font-normal">Remember me</label>
                            </div>
                
                            <div class="">
                                <NuxtLink class="text-sm text-main_purple font-medium" to="/forgot-password">Forgot password?</NuxtLink>
                            </div>
                        </div>
                
                        <div class=" text-center">
                            <NuxtLink to="/login">
                                <button type="submit" class="group relative flex w-full justify-center rounded-md bg-main_purple text-lg py-2 px-4 font-semibold text-white hover:bg-indigo-700 focus:outline-none">
                                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                        
                                    </span>
                                    Sign in
                                </button>
                            </NuxtLink>
                            
                            <p class="mt-12 font-medium text-dark2">
                                Don't have an account yet ? <NuxtLink class="text-main_purple" to="/registration">Create an account</NuxtLink>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
  // Import Swiper Vue.js components
  import "./style.css";
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // import required modules
  import { Pagination, Autoplay, Mousewheel } from "swiper";
  import "swiper/css/pagination";
  // Import Swiper styles
  import 'swiper/css';


  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Pagination, Autoplay, Mousewheel],
      };
    },
  };

</script>