<template>
  <section>
    <label for>Name</label>
    <input type="text" v-model="newEmployee.name" />
    <label for>Titel</label>
    <input type="text" v-model="newEmployee.titel" />
    <label for>Mobil</label>
    <input type="text" v-model="newEmployee.mobil" />
    <label for>Email</label>
    <input type="text" v-model="newEmployee.email" />
    <button @click="createEmployee">Create</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newEmployee: {
        id: "",
        name: "",
        titel: "",
        mobil: "",
        email: "",
      },
    };
  },
  methods: {
    createEmployee() {
      this.$store.dispatch("createEmployee", this.newEmployee);
    },
  },
};
</script>

<style></style>
