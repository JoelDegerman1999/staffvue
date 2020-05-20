<template>
  <section>
    <EmployeeDetailsEdit :employee="getEmployee" />
  </section>
</template>

<script>
import EmployeeDetailsEdit from "../components/EmployeeDetailsEdit";
export default {
  components: {
    EmployeeDetailsEdit,
  },
  computed: {
    getEmployee() {
      return this.$store.getters.getEmployeeById(
        Number.parseInt(this.$route.params.id)
      );
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
