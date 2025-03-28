

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Contact</router-link>
    <router-link to="/contacts">Contact List</router-link>
  </nav>
  <router-view />  
</template> 

<style scoped>
nav {
  display: flex;
  gap: 20px;
  background: #eee;
  padding: 10px;
}
</style>
