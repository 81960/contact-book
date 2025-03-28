<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

interface Contact {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneno: string;
  address: string;
}

// Props & Emit events
const props = defineProps<{ contact?: Contact }>();
const emit = defineEmits(["submit"]);

const contact = ref<Contact>({
  id: props.contact?.id ?? Date.now(),
  firstName: props.contact?.firstName ?? "",
  lastName: props.contact?.lastName ?? "",
  email: props.contact?.email ?? "",
  phoneno: props.contact?.phoneno ?? "",
  address: props.contact?.address ?? "",
});

const submitForm = () => {
  emit("submit", contact.value);
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <input v-model="contact.firstName" placeholder="First Name" required />
    <input v-model="contact.lastName" placeholder="Last Name" required />
    <input v-model="contact.email" type="email" placeholder="Email" required />
    <input v-model="contact.phoneno" type="text" placeholder="Enter Phone No" required />
    <input v-model="contact.address" type="text" placeholder="Enter Address" required />
    <button type="submit">Save Contact</button>
  </form>
</template>

<style scoped>
input {
  display: block;
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
}
button {
  background-color: blue;
  color: white;
  padding: 10px;
  cursor: pointer;
  width: 100%;
}
</style>
