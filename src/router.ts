/*import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home.vue"; // Home Page
import ContactListView from "@/views/listview.vue"; // ✅ Import Contact List View
import AddContact from "@/views/Addcontact.vue";
import ContactDetails from "@/views/Contactdetails.vue";
import EditContact from "@/views/EditContact.vue";

const routes = [
  { path: "/", component: HomeView },  // Home Page
  { path: "/contacts", component: ContactListView },  // ✅ Contact List Page
  { path: "/add", component: AddContact },
  { path: "/details/:id", component: ContactDetails },
  { path: "/edit/:id", component: EditContact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;*/
import { createRouter, createWebHistory } from "vue-router";

// Correct imports — ensure file names and casing match exactly
import HomeView from "@/views/Home.vue";
import ContactListView from "@/views/ListView.vue";
import AddContact from "@/views/AddContact.vue";
import ContactDetails from "@/views/ContactDetails.vue";
import EditContact from "@/views/EditContact.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/contacts", component: ContactListView },
  { path: "/add", component: AddContact },
  { path: "/details/:id", component: ContactDetails },
  { path: "/edit/:id", component: EditContact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

