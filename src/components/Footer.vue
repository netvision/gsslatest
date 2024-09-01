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
  <div class="block md:flex gap-4 max-w-7xl mx-auto">
  <div class="w-full md:w-1/3 bg-slate-200">
    <h2 class="barlow-light text-left text-2xl mb-3 pl-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500">Important Links</h2>
    <p class="barlow-light text-lg text-left m-2 pl-2 italic"><a href="http://shekhauni.ac.in/" target="_blank">Shekhawati University <i class="pi pi-external-link"></i></a></p>
    <p class="barlow-light text-lg text-left m-2 pl-2 italic"><a href="https://sso.rajasthan.gov.in/" target="_blank">Scolarship Portal <i class="pi pi-external-link"></i></a></p>
    <p class="barlow-light text-lg text-left m-2 pl-2 italic"><a href="#" target="_blank">Download Prospectus <i class="pi pi-file-pdf"></i></a></p>
  </div>
  <div class="w-full md:w-1/3 bg-slate-200">
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
  <div class="w-full md:w-1/3 bg-slate-200 text-left">
    <h2 class="barlow-light text-left text-2xl mb-3 pl-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500">Contact Us</h2>
    <p class="pl-3 text-xl font-bold">Ginnidevi Satyanarayan Shekhsaria</p>
    <p class="pl-3 text-xl font-bold">Girls' PG College</p>
    <p class="pl-3 text-lg italic">Chirawa - 333026, Rajasthan, India</p>
    <p class="pl-3 text-lg italic"><i class="pi pi-phone"></i> : 01596-220289</p>
    <p class="pl-3 text-lg italic text-blue-800"><i class="pi pi-envelope"></i> : <a href="mailto:gsscollege1987@yahoo.co.in">gsscollege1987@yahoo.co.in</a></p>
    <p class="pl-3 text-lg italic text-blue-800"><i class="pi pi-link"></i> : <a href="https://www.gsschirawa.in">https://www.gsschirawa.in</a></p>
    <p class="pl-3 text-lg italic text-blue-800"><i class="pi pi-whatsapp"></i> : <a href="https://wa.me/7878306013">7878306013</a></p>
  </div>
  </div>
  <p>&copy; GSS Girls PG College, Chirawa </p>
  </footer>
</template>