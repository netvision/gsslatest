<script setup>
import logo from '../assets/gss-logo.png'

const menuItems = [
        { label: 'Home', url: '/' },
        {
          label: 'About Us',
          items: [
            { label: 'Introduction', url: '/intro' },
            { label: 'Managing Committee', url: '/management' },
            { label: 'Admission Info', url: '/admissions' },
            { label: 'Other Info', url: '/info' }
          ],
        },
        { label: 'Courses & Fee Info', url: '/courses' },
        { label: 'Principal & Staff', url: '/staff' },
        { label: 'Infra & Resources', url: '/facilities' },
        { label: 'Downloads', url: '/downloads' },
        { label: 'Photo Gallery', url: '/gallery' },
        { label: 'Contact Us', url: '/contact' },
      ]
</script>
<template>
  <header class="bg-slate-200 w-full">
  <div class="flex flex-col sm:flex-row items-end max-w-7xl mx-auto pl-4 sm:pl-6 lg:pl-8 w-full pt-4">
      <a href="/"><img :src="logo" class="h-24 sm:h-44 p-2" /></a>
      <div>
        <p class="barlow-light text-lg sm:text-lg text-black pl-0 sm:pl-8 font-bold">Accredited <span class="lato-black text-xl text-blue-900">B++</span> by NAAC</p>
        <h2 class="merriweather-bold text-4xl sm:text-4xl text-orange-800 pl-0 sm:pl-8 font-bold">
          Ginnidevi Satyanarayan Sekhsaria
        </h2>
        <h2 class="lato-regular text-3xl sm:text-3xl text-orange-800 pl-0 sm:pl-8 font-bold">
          Girls' PG College, Chirawa
        </h2>
        <p class="barlow-light text-lg sm:text-lg mb-3 text-black pl-0 sm:pl-8 font-bold">Affiliated to Pandit Dindayal Upadhaya Shekhawati University, Sikar</p>
      </div>
      <div class="text-black sm:w-60 ml-auto">
      <div class="gap-3 text-right">
      <!-- Facebook -->
      <a href="https://www.facebook.com/gsschirawa" target="_blank" role="button">
        <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2] inline-block mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
            <path
              d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
        </span>
        </a>
        <!-- Instagram -->
        <a href="https://www.instagram.com/gsschirawa" target="_blank" role="button">
        <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584] inline-block mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </span>
        </a>
        <!-- Youtube -->
        <a href="https://www.youtube.com/@gsschirawa7456" target="_blank" role="button">
        <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ff0000] inline-block mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
            <path
              d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
          </svg>
        </span>
        </a>
        <!-- X -->
        <a href="#!" role="button">
        <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-black inline-block mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 512 512">
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
            <path
              d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </span>
        </a>
        <!-- Whatsapp -->
        <a href="https://wa.me/7878306013" target="_blank" role="button">
        <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#128c7e] inline-block mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512">
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
            <path
              d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </span>
        </a>
      </div>
      </div>
    </div>
    <Menubar :model="menuItems" class="max-w-7xl mx-auto">
      <template #item="{ item, props, hasSubmenu, root }">
      <div class="bg-slate-200 rounded-md">
        <a class="flex items-center" v-bind="props.action" :href="item.url">
            <span class="ml-2">{{ item.label }}</span>
            <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
        </a>
        </div>
    </template>
    </Menubar>
  </header>
    
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
.merriweather-bold {
  font-family: "Merriweather", system-ui;
  font-weight: 700;
  font-style: normal;
}
.barlow-light {
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  font-style: italic;
}

.barlow-regular {
  font-family: "Barlow", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.lato-regular {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.lato-bold {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.lato-black {
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-style: normal;
}
</style>