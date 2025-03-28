<script setup lang="ts">
import ContactForm from "../components/ContactForm.vue";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const contact = ref<any>(null);

onMounted(() => {
  const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
  contact.value = contacts.find((c: any) => c.id === Number(route.params.id));
});

const updateContact = (updatedContact: any) => {
  let contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
  contacts = contacts.map((c: any) =>
    c.id === updatedContact.id ? updatedContact : c
  );
  localStorage.setItem("contacts", JSON.stringify(contacts));
  router.push("/");
};
</script>

<template>
  <div v-if="contact">
    <h2>Edit Contact</h2>
    <ContactForm :contact="contact" @submit="updateContact" />
  </div>
</template>
