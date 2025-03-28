<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import ContactList from "@/components/ContactList.vue";

const router = useRouter();
const searchQuery = ref("");

const goToAdd = () => {
  router.push("/add");
};
</script>

<template>
  <div>
    <header>
      <h1>Contact Book</h1>
    </header>
    
    <div class="searchbox">
      <input v-model="searchQuery" placeholder="Search..." />
    </div>
   
    <ContactList :search-query="searchQuery" />
  </div>
</template>
<style>
*
{
  margin:0px;
  padding:0px;
}
nav[data-v-7a7a37b1] {
    display: flex
;
    gap: 20px;
    background: #4c62f3;
    padding: 30px;
    font-size: 20px;
}
nav a {
    color: white;
    text-decoration: none;
}
nav a:hover {
    color: yellow;
    text-decoration: none;
}
header h1 {
    text-align: center;
    background: #eaeaea;
    font-size: 36px;
}

.searchbox {
    width: 400px;
    /* height: 40px; */
    background: gray;
    text-align: center;
    padding: 10px;
    border-radius: 0px 0px 30px 30px;
    margin:0 auto;
}
.searchbox input{
  font-size: 20px;
  height: 30px;
    width: 370px;
}
</style>