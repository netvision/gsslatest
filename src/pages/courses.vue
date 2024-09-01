<script setup>
const fees = [
  {
    "course": "B.A.- I",
    "reg_fee": 100,
    "tuition_fee": 4000,
    "total_fee": 4100
  },
  {
    "course": "B.A.- II",
    "reg_fee": 100,
    "tuition_fee": 6500,
    "total_fee": 6600
  },
  {
    "course": "B.A.- III",
    "reg_fee": 100,
    "tuition_fee": 6500,
    "total_fee": 6600
  },
  {
    "course": "B.Com.- I",
    "reg_fee": 100,
    "tuition_fee": 7000,
    "total_fee": 7100
  },
  {
    "course": "B.Com.- II",
    "reg_fee": 100,
    "tuition_fee": 8500,
    "total_fee": 8600
  },
  {
    "course": "B.Com.- III",
    "reg_fee": 100,
    "tuition_fee": 8500,
    "total_fee": 8600
  },
  {
    "course": "M.A.- Hindi Lit. (Prev. & Final)",
    "reg_fee": 100,
    "tuition_fee": 8500,
    "total_fee": 8600
  },
  {
    "course": "M.A.- English Lit. (Prev. & Final)",
    "reg_fee": 100,
    "tuition_fee": 8500,
    "total_fee": 8600
  },
  {
    "course": "M.A.- Economics (Prev. & Final)",
    "reg_fee": 100,
    "tuition_fee": 8500,
    "total_fee": 8600
  },
  {
    "course": "M.A.- Pol. Science (Prev. & Final)",
    "reg_fee": 100,
    "tuition_fee": 8500,
    "total_fee": 8600
  },
  {
    "course": "M.A.- History (Prev. & Final)",
    "reg_fee": 100,
    "tuition_fee": 8500,
    "total_fee": 8600
  },
  {
    "course": "M.A./M.Sc.- Geography (Prev. & Final)",
    "reg_fee": 100,
    "tuition_fee": 9500,
    "total_fee": 9600
  }
]

</script>
<template>
  <div class="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 pt-10 rounded-sm">
    <h2 class="barlow-light text-pretty mt-3 m-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-4xl font-black border-b border-blue-100">Courses Offered</h2>
    <p class="text-lg text-justify">The College imparts instruction and prepares girls for: </p>
        <ul class="lato-regular text-lg">
            <li class="pl-6"><strong>Two Year Master's Degree in:</strong>
                <ol class="list-decimal list-inside">
                    <li class="pl-6">Hindi</li>
                    <li class="pl-6">Economics</li>
                    <li class="pl-6">Political Science</li>
                    <li class="pl-6">Sanskrit</li>
                    <li class="pl-6">Geography</li>
                    <li class="pl-6">English</li>
                    <li class="pl-6">History</li>
                </ol>
            </li>
            <li class="pl-6"><strong>Three Year Bachelor's (6 Semester) Degree in the following subjects:</strong>
                <ul class="list-disc list-inside">
                    <li class="pl-6"><strong>Compulsory Subjects:</strong>
                        <ol class="list-decimal list-inside">
                            <li class="pl-6">General English</li>
                            <li class="pl-6">General Hindi</li>
                            <li class="pl-6">Elementary Computer Course</li>
                            <li class="pl-6">Environmental Studies</li>
                        </ol>
                    </li>
                    <li class="pl-6"><strong>Optional Subjects (B.A.):</strong>
                        <ol class="list-decimal list-inside">
                            <li class="pl-6">English/Hindi-Any one</li>
                            <li class="pl-6">History/Sociology - Any one</li>
                            <li class="pl-6">Economics/Home Science - Any one</li>
                            <li class="pl-6">Political Science</li>
                            <li class="pl-6">Geography</li>
                        </ol>
                    </li>
                    <li class="pl-6"><strong>Optional Subjects (B.Com.):</strong>
                        <ol class="list-decimal list-inside">
                            <li class="pl-6">ABST</li>
                            <li class="pl-6">EAFM</li>
                            <li class="pl-6">Business Adm.</li>
                        </ol>
                    </li>
                    <li class="list-none font-semibold">Note: A student has to opt these subjects (one each from one group). She will be allotted her subjects strictly according to merit, subject to the availability of seats. Merit will be determined on the basis of marks secured in aggregate in the Senior Secondary Examination.</li>
                </ul>
            </li>
        </ul>
        <h2 class="barlow-light text-pretty mt-3 m-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-4xl font-black border-b border-blue-100">Fee Details</h2>
        <table
          class="w-1/4 lato-regular text-left text-lg font-light text-surface dark:text-white">
          <thead
            class="border-b border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark">
            <tr>
              <th scope="col" class="px-6 py-4">Class/Course</th>
              <th scope="col" class="px-6 py-4">Registration Fee</th>
              <th scope="col" class="px-6 py-4">Tuition Fee</th>
              <th scope="col" class="px-6 py-4">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(fee, i) in fees" :key="i" class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
              <td class="whitespace-nowrap px-6 py-4 font-medium">{{ fee.course }}</td>
              <td class="whitespace-nowrap px-6 py-4"><i class="pi pi-indian-rupee"></i>{{ fee.reg_fee }}</td>
              <td class="whitespace-nowrap px-6 py-4"><i class="pi pi-indian-rupee"></i>{{ fee.tuition_fee }}</td>
              <td class="whitespace-nowrap px-6 py-4"><i class="pi pi-indian-rupee"></i>{{ fee.total_fee }}</td>
            </tr>
          </tbody>
          </table>
          <h2 class="barlow-light text-pretty mt-3 m-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-4xl font-black border-b border-blue-100">Other Fee</h2>
          <ol class="list-decimal list-inside">
          <li class="pl-6">College leaving certificate fee and character certificate fee 200/- at the time of leaving.</li>
          <li class="pl-6">The above fees do not include University Examination Form Fees, University examination shall be deposited at E-mitre or by any digital transaction mode directly to the University at the time of Examinations from filling.</li>
          </ol>
  </div>
</template>