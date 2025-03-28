<script setup lang="ts">
import ContactForm from "@/components/ContactForm.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const addContact = (contact: any) => { 
  const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
  contacts.push(contact);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  router.push("/");
};
</script>

<template>
  <div>
    <h2>Add Contact</h2>
    <ContactForm @submit="addContact" />
  </div>
</template>
