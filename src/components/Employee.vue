<template>
  <div class="employee">
    <img src="@/assets/img/profile.png" alt />
    <h3>{{employee.name}}</h3>
  </div>
</template>

<script>
export default {
    props: {
        employee: Object
    }
};
</script>

<style lang="scss" scoped>
.employee {
    display: flex;
    align-items: center;
    img {
      width: 4rem;
      border-radius: 50%;
      margin-right: 1rem;
    }
  }

.checked {
  background-color: darkslategray;
}
</style>