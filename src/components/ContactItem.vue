<script setup lang="ts">
import { defineProps } from "vue";
import { useRouter } from "vue-router";

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneno:string;
}

const props = defineProps<{ contact: Contact }>();
const router = useRouter();

const goToDetails = () => {
  router.push(`/contact/${props.contact.id}`);
};
</script>

<template>
  <li @click="goToDetails">
    {{ contact.firstName }} {{ contact.lastName }} - {{ contact.email }}-{{contact.phoneno  }}
  </li>
</template>

<style scoped>
li {
  cursor: pointer;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
li:hover {
  background-color: #f0f0f0;
}
</style>
