<script setup>
import { ref } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'
import logo from '../assets/gss-logo.png'

const customIcon = {
  url: logo,
  scaledSize: { width: 50, height: 50 },
};
const center = { lat: 28.23719, lng: 75.64652 }
const mapApi = ref(import.meta.env.VITE_MAPKEY)
</script>
<template>
  <footer class="text-center p-3 bg-orange-200">
  <div class="flex gap-4 max-w-7xl mx-auto">
  <div class="w-1/3 bg-slate-200">
    {{ mapApi }}
  </div>
  <div class="w-1/3 bg-slate-200">
    <h2 class="barlow-light text-left text-2xl mb-3 pl-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500">Google Location</h2>
    <GoogleMap
    :api-key="mapApi"
    style="width: 100%; height: 200px"
    :center="center"
    :zoom="15"
    >
        <Marker :options="{ position: center, label: 'GSS', title: 'GSS Girls\' PG College', icon: customIcon}" />
    </GoogleMap>
  </div>
  <div class="w-1/3 bg-slate-200">
    <h2 class="barlow-light text-left text-2xl mb-3 pl-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500">Contact Us</h2>
  </div>
  </div>
  <p>&copy; GSS Girls PG College, Chirawa </p>
  </footer>
</template>