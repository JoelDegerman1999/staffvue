<template>
  <section>
    <EmployeeDetails :employee="getEmployee"/>
  </section>
</template>

<script>
import EmployeeDetails from "../components/EmployeeDetails";

export default {
  components: {
    EmployeeDetails
    },
  data() {
    return {};
  },
  computed: {
    getEmployee() {
      return this.$root.getEmployee(this.$route.params.id);
    }
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>
