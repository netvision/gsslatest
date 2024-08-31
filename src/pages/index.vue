<script setup>
import slide1 from '../assets/gss-slide.jpg';
import slide2 from '../assets/slide4.jpg';
import slide3 from '../assets/slide3.jpg';
import logo from '../assets/gss-logo.png';

const slides = [
        slide1,
        slide2,
        slide3,
        slide1
      ]
</script>

<template>
  <div class="w-full max-w-7xl mx-auto bg-white">
  <Carousel :value="slides" :numVisible="1" :numScroll="1" :showNavigators="false" :autoplayInterval="1500">
      <template v-slot:item="slotProps">
        <img :src="slotProps.data" class="block w-full object-cover h-48 sm:h-96" alt="Image" />
      </template>
  </Carousel>
  <div class="flex space-x-2">
    <div class="w-2/3 p-4">
      <Card style="background-color:#ffd">
        <template #title>
          <h1 class="barlow-light text-pretty mt-3 m-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-4xl font-black border-b border-blue-100">An Introduction</h1>
        </template>
        <template #content>
          <div class="">
          <img :src="logo" class="h-48 float-left mr-4 mb-4 w-auto" />
          <p class="text-lg md:text-xl text-justify pb-1">GSS Girls' (P.G) College, an exclusive institution for girls, fulfils a long-standing need of Chirawa, a prominent town of Shekhawati region of Rajasthan. As late as the last quarter of the 20th century there was only one girls' school in the town run by Dalmia Education Trust. There was no college for girls. There was only one college in Chirawa, run by Somani Education Trust. Though people had started realizing the importance of women's education, they were still too conservative to permit their daughters to seek higher education in a co-educational college. The desire to educate their daughters in a congenial, tension free and protected environment led the leading citizens of Chirawa to request Shri Satyanarayanji Sekhsaria to start a college exclusively for girls. This request by the citizens of Chirawa under the leadership of Ex-M.L.A. late Shri Hazari lalji was readily accepted by Shri Satyanarayanji on the condition that Shri Hazarilalji Sharma would agree to become the Secretary of the Trust running the college. Shri Sharma agreed, and in no time it was decided to start the college. The Foundation stone of the college was laid on 19th November, 1986. 19th November happens to be the birth anniversary of Mrs. Indira Gandhi, the first woman Prime Minister of Independent India.</p>
          </div>
        </template>
      </Card>
    </div>
  <div class="flex-grow p-4">
    <Card style="background-color:#ffd">
        <template #title>
          <h1 class="barlow-light text-pretty mt-3 m-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-4xl font-black border-b border-blue-100">News &amp; Events</h1>
        </template>
        <template #content>
          <p>Welcome to the home page!</p>
        </template>
      </Card>
  </div>
</div>
  
  </div>
  
</template>