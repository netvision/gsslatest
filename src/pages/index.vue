<script setup>
import slide1 from '../assets/gss-slide.jpg';
import slide2 from '../assets/slide4.jpg';
import slide3 from '../assets/slide3.jpg';

const slides = [
        slide1,
        slide2,
        slide3,
        slide1
      ]
</script>

<template>
  <div class="w-full max-w-7xl mx-auto">
  <Carousel :value="slides" :numVisible="1" :numScroll="1" :showNavigators="false" :autoplayInterval="1500">
      <template v-slot:item="slotProps">
        <img :src="slotProps.data" class="block w-full object-cover h-96" alt="Image" />
      </template>
  </Carousel>

    <h1>Home Page</h1>
    <p>Welcome to the home page!</p>
  </div>
  
</template>