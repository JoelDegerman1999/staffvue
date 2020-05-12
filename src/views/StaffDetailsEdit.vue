<template>
  <section>
    <EmployeeDetailsEdit :employee="getEmployee" @deleteEmployee="deleteEmployee"/>
  </section>
</template>

<script>
import EmployeeDetailsEdit from '../components/EmployeeDetailsEdit'
export default {
  components: {
    EmployeeDetailsEdit
  },
  computed: {
    getEmployee() {
      return this.$root.getEmployee(this.$route.params.id);
    }
  },
  methods: {
    deleteEmployee(value) {
       this.$emit("deleteEmployee", value)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
