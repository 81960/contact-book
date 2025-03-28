<script setup lang="ts">
import { ref, computed, defineProps, onMounted } from "vue";
import { useRouter } from "vue-router";

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneno: string;
  address: string;
}

const props = defineProps<{ searchQuery: string }>(); // Receive search input
const contacts = ref<Contact[]>([]);

// Load contacts from local storage
onMounted(() => {
  const storedContacts = localStorage.getItem("contacts");
  contacts.value = storedContacts ? JSON.parse(storedContacts) : [];
});

// Filter contacts dynamically based on search query
const filteredContacts = computed(() =>
  contacts.value.filter((contact) =>
    (`${contact.firstName} ${contact.lastName} ${contact.email} ${contact.phoneno} ${contact.address}`)
      .toLowerCase()
      .includes(props.searchQuery.toLowerCase())
  )
);

const router = useRouter();

// Go to Contact Details Page
const goToDetails = (id: number) => {
  router.push(`/details/${id}`);
};
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      <tr 
        v-for="contact in filteredContacts" 
        :key="contact.id" 
        @click="goToDetails(contact.id)"
        class="clickable-row"
      >
        <td>{{ contact.firstName }}</td>
        <td>{{ contact.lastName }}</td>
        <td>{{ contact.email }}</td>
        <td>{{ contact.phoneno }}</td>
        <td>{{ contact.address }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}

.clickable-row {
  cursor: pointer;
}

.clickable-row:hover {
  background-color: #f0f0f0;
}
</style>
