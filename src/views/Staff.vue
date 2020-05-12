<template>
  <section class="staff-grid-container">
    <div class="employee-wrapper">
      <h1>Anställda</h1>
      <router-link
        :to="'/staff/' + employee.id"
        v-for="employee in employeeArray"
        :key="employee.id"
      >
        <Employee :employee="employee"/>
      </router-link>

    <router-link to="/create">Create staff</router-link>
    </div>
    <router-view />
  </section>
</template>

<script>
import Employee from "../components/Employee";

export default {
  components: {
    Employee
  },

  data() {
    return {
      
      employeeArray: this.$root.employeeArray,
    };
  },
  methods: {
    createEmployee() {
      this.newEmployee.id = this.currId
      this.employeeArray.push(this.newEmployee);
      this.currId++;
      this.newEmployee = {

      }
    },
    deleteEmployee(value) {
     this.employeeArray = this.employeeArray.filter(employee => employee.id != value.id)
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #2c3e50;
}



.router-link-active {
  display: block;
  background-color: gray;
  
}

.staff-grid-container {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.employee-wrapper {
  height: 100%;
  box-sizing: border-box;
  background: rgb(226, 226, 226);
  grid-column: 1/2;
  padding: 1rem;
}
.router-div {
  padding: 1rem;
}
</style>
