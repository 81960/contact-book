import { createRouter, createWebHistory } from "vue-router";
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

export default router;
