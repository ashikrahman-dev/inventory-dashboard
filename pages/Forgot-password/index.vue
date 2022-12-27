
<template>
    <div class="login-bg min-h-screen h-full grid items-center">
        <div class="xl:container mx-auto ">
            <div class="py-12 px-4 sm:px-6 lg:px-8 ">
                <div class="w-full max-w-md space-y-8 login-wrap bg-white" >
                    <div>
                        <img class="h-6 w-auto" src="../../assets/img/logo.svg" alt="Your Company" />
                        <h2 class="mt-6 text-4xl font-bold tracking-tight text-dark1">Forgot Password?</h2>
                        <p class="text-sm text-dark2 font-medium mt-4">Enter Email to reset password.</p>

                    </div>
                    <form class="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div class="-space-y-px rounded-md ">
                            <div>
                                <label for="email-address" class="text-base font-medium text-dark1 pb-2.5 inline-block">Email</label>
                                <input id="email-address" name="email" type="email" autocomplete="email" required="" class="relative block w-full appearance-none rounded-lg border-2 border-dark5 px-3 py-2 text-dark1 placeholder-dark4 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 font-medium" placeholder="Email address" />
                            </div>
                        </div>
                
                        <div class="text-center">
                            <NuxtLink to="/login">
                                <button type="submit" class="group relative flex w-full justify-center rounded-md bg-main_purple text-lg py-2 px-4  font-semibold text-white hover:bg-indigo-700 focus:outline-none">
                                    
                                    Send mail
                                </button>
                            </NuxtLink>

                            <p class="mt-12 font-medium text-dark2">
                               <NuxtLink class="text-main_purple" to="/login">Sign in</NuxtLink>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
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