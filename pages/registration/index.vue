
<template>
    <div class="login-bg h-screen grid items-center">
        <div class="xl:container mx-auto ">
            <div class="py-12 px-4 sm:px-6 lg:px-8 ">
                <div class="w-full max-w-md space-y-8 login-wrap bg-white" >
                    <div>
                        <img class="h-6 w-auto" src="../../assets/img/logo.svg" alt="Your Company" />
                        <h2 class="mt-6 text-4xl font-bold tracking-tight text-dark1">Registration</h2>
                    </div>
                    <form class="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div class="-space-y-px rounded-md gap-6 grid">
                            <div>
                                <label for="name" class="text-base font-medium text-dark1 pb-2.5 inline-block">Name</label>
                                <input id="name" name="name" type="text" autocomplete="email" required="" class="relative block w-full appearance-none rounded-lg border-2 border-dark5 px-3 py-2 text-dark1 placeholder-dark4 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 font-medium" placeholder="Full name" />
                            </div>
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
                
                        <div class="text-center">
                            <NuxtLink to="/registration">
                                <button type="submit" class="group relative flex w-full justify-center rounded-md bg-main_purple text-lg py-2 px-4  font-semibold text-white hover:bg-indigo-700 focus:outline-none">
                                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                    </span>
                                    Sign Up
                                </button>
                            </NuxtLink>

                            <p class="mt-12 font-medium text-dark2">
                                Already have an account? <NuxtLink class="text-main_purple" to="/login">Sign in</NuxtLink>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
//   import { LockClosedIcon } from '@heroicons/vue/20/solid'
  </script>

<style scoped>
    .login-bg {
        background: url('../../assets/img/login-bg.jpg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }
    .login-wrap {
        border-radius: 20px;
        padding: 50px;
    }
</style>