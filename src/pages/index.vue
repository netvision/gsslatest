<script setup>
import slide1 from '../assets/gss-slide.jpg';
import slide2 from '../assets/slide4.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide2.jpg';
import slide5 from '../assets/slide1.jpg';
import slide6 from '../assets/slide6.jpg';
import logo from '../assets/gss-logo.png';
import founder from '../assets/founder.png';

const slides = [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6
      ]
</script>

<template>
  <div class="w-full max-w-7xl mx-auto bg-white">
  <Carousel :value="slides" :numVisible="1" :numScroll="1" :showNavigators="false" :autoplayInterval="1500">
      <template v-slot:item="slotProps">
        <img :src="slotProps.data" class="block w-full object-cover h-48 sm:h-96" alt="Image" />
      </template>
  </Carousel>
  <div class="flex space-x-1">
    <div class="w-2/3 p-4">
      <Card style="background-color:#ffd">
        <template #title>
          <h1 class="barlow-light text-pretty mt-3 m-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-4xl font-black border-b border-blue-100">An Introduction</h1>
        </template>
        <template #content>
          <div class="">
            <div class="p-4 float-left m-0 mr-4 w-auto">
              <figure class="max-w-md mx-auto">
                <img :src="founder" alt="Example Image" class="w-64 rounded-lg shadow-lg mb-2" />
                <figcaption class="text-center text-gray-600 text-base italic">
                 Shri Satyanarayan Shekhsaria<br />
                 <sapn class=" text-blue-400">Founder</sapn> 
                </figcaption>
              </figure>
            </div>
          
          <p class="kalam-regular text-lg md:text-2xl text-justify pb-1">GSS Girls' (P.G) College, an exclusive institution for girls, fulfils a long-standing need of Chirawa, a prominent town of Shekhawati region of Rajasthan. As late as the last quarter of the 20th century there was only one girls' school in the town run by Dalmia Education Trust. There was no college for girls. There was only one college in Chirawa, run by Somani Education Trust. Though people had started realizing the importance of women's education, they were still too conservative to permit their daughters to seek higher education in a co-educational college. The desire to educate their daughters in a congenial, tension free and protected environment led the leading citizens of Chirawa to request Shri Satyanarayanji Sekhsaria to start a college exclusively for girls. This request by the citizens of Chirawa under the leadership of Ex-M.L.A. late Shri Hazari lalji was readily accepted by Shri Satyanarayanji on the condition that Shri Hazarilalji Sharma would agree to become the Secretary of the Trust running the college. Shri Sharma agreed, and in no time it was decided to start the college. The Foundation stone of the college was laid on 19th November, 1986. 19th November happens to be the birth anniversary of Mrs. Indira Gandhi, the first woman Prime Minister of Independent India.</p>
          </div>
        </template>
        <template #footer>
          <div class="text-right">
              <p class="barlow-light"><a href="/info">read more...</a></p>
          </div>
      </template>
      </Card>
      
    </div>
  <div class="flex-grow p-4">
    <Card style="background-color:#ffd">
      <template #title>
        <h1 class="barlow-light text-pretty mt-3 m-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-4xl font-black border-b border-blue-100">Youtube</h1>
      </template>
      <template #content>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/8JBtdIeab4U?si=M3hm2rT84va0ZgCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </template>
    </Card>
    <Card style="background-color:#ffd; margin-top:5px">
      <template #title>
        <h1 class="barlow-light text-pretty mt-3 m-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-4xl font-black border-b border-blue-100">News &amp; Events</h1>
      </template>
      <template #content>
        
      </template>
    </Card>
  </div>
</div>
  
  </div>
  
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&family=Kalam:wght@300;400;700&display=swap');
.bad-script-regular {
  font-family: "Bad Script", cursive;
  font-weight: 400;
  font-style: normal;
}
.kalam-light {
  font-family: "Kalam", cursive;
  font-weight: 300;
  font-style: normal;
}

.kalam-regular {
  font-family: "Kalam", cursive;
  font-weight: 400;
  font-style: normal;
}

.kalam-bold {
  font-family: "Kalam", cursive;
  font-weight: 700;
  font-style: normal;
}

</style>