<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneno: string;
  address: string;
} 

const route = useRoute();
const router = useRouter();
const contact = ref<Contact | null>(null);

onMounted(() => {
  const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
  contact.value = contacts.find((c: Contact) => c.id === Number(route.params.id));
});

const deleteContact = () => {
  const contacts = JSON.parse(localStorage.getItem("contacts") || "[]").filter(
    (c: Contact) => c.id !== Number(route.params.id)
  );
  localStorage.setItem("contacts", JSON.stringify(contacts));
  router.push("/");
};
</script>

<template>
  <div v-if="contact" class="profile-card">
    <div class="profile-header">
      <img src="https://via.placeholder.com/100" alt="Profile Picture" class="profile-img" />
      <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
    </div>

    <div class="profile-info">
      <p><strong>Email:</strong> {{ contact.email }}</p>
      <p><strong>Phone:</strong> {{ contact.phoneno }}</p>
      <p><strong>Address:</strong> {{ contact.address }}</p>
    </div>

    <div class="profile-actions">
      <button class="edit-btn" @click="$router.push(`/edit/${contact.id}`)">Edit</button>
      <button class="delete-btn" @click="deleteContact">Delete</button>
    </div>
  </div>
</template>

<style scoped>
.profile-card {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #007bff;
}

.profile-info {
  margin-top: 20px;
  text-align: left;
}

.profile-info p {
  font-size: 16px;
  margin: 10px 0;
}

.profile-actions {
  margin-top: 20px;
}

button {
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
}

.edit-btn {
  background: #007bff;
  color: white;
  margin-right: 10px;
}

.delete-btn {
  background: #dc3545;
  color: white;
}
</style>
