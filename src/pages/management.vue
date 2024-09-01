<script setup>
import { ref } from 'vue'
import chairman from '../assets/chairman.jpg';
const management = ref([
    {name: 'Shri Anuj Shekhsaria', subject: 'President'},
    {name: 'Shri S.L.Sharma', subject: 'Secretary'},
    {name: 'Dr. Sunita Sharma', subject: 'Principal'},
    {name: 'Shri Satish Chandra Sharma', subject: 'Treasurer'},
    {name: 'Dr. Seema Sahal', subject: 'Member (Staff Representative)'},
    {name: 'Dr. N.L.Arrawatia', subject: 'Member (Educationist)'},
    {name: 'Shri Bhagwana Ram Saini', subject: 'Member (Educationist)'},
    {name: 'Smt. Bala Bajaj', subject: 'Member (Students\' Gaurdian)'},
    {name: 'Dr. Madhubala Bajaj', subject: 'Member (Alumnus)'},
    {name: 'Shri Mahesh Malani', subject: 'Member'},
    {name: 'Shri Prabhu Dayal Nayak', subject: 'Member'},
    {name: 'Shri Vipul Mahamia', subject: 'Member'},
    {name: 'Shri Satyanarayan Chaudhary', subject: 'Member'},
])
</script>
<template>
<div class="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 pt-10 rounded-sm">
  <h2 class="barlow-light text-pretty mt-3 m-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-4xl font-black border-b border-blue-100">Management Committee</h2>
  <div class="p-4 float-left m-0 mr-4 w-auto">
    <figure class="max-w-md mx-auto mb-4">
      <img :src="chairman" alt="Example Image" class="w-64 rounded-lg shadow-lg mb-2" />
      <figcaption class="text-center text-gray-600 text-base italic">
        Shri Narottam Shekhsaria<br />
        <sapn class=" text-blue-400">Chairman</sapn> 
      </figcaption>
    </figure>
    </div>
        <table
          class="lato-regular text-left text-lg font-light text-surface dark:text-white">
          <thead
            class="border-b border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark">
            <tr>
              <th scope="col" class="px-6 py-4">#</th>
              <th scope="col" class="px-6 py-4">Name</th>
              <th scope="col" class="px-6 py-4">Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(s, i) in management" :key="i" 
              class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
              <td class="whitespace-nowrap px-6 py-4 font-medium">{{ i+1 }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s.name }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ s.subject }}</td>
            </tr>
            
          </tbody>
        </table>
  </div>
</template>