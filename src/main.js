import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Employee from "./assets/employees.json";

Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      employeeArray: Employee.employees,
    };
  },
  methods: {
    getEmployee(id) {
      return this.employeeArray.find((employee) => employee.id == id);
    },
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
