<template>
  <article class="employee-details">
    <h1>Detaljer</h1>
    <div class="profile-div">
      <img src="@/assets/img/profile.png" alt />
      <div class="edit-name">
        <input type="text" v-model="employee.name" />
        <router-link :to="'/staff/' + employee.id">
          <img src="@/assets/img/check.svg" alt />
        </router-link>
      </div>
      <div class="title">
        <input type="text" v-model="employee.titel" />
      </div>

      <div class="email-and-number">
        <input type="text" v-model="employee.email" />
        <input type="text" v-model="employee.mobil" />
      </div>
      <router-link to="/staff">
        <button @click="deleteMe()">Delete me</button>
      </router-link>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    employee: Object
  },

  data() {
    return {};
  },
  methods: {
    deleteMe() {
      confirm("Do you want to delete");
      this.$emit("deleteEmployee", this.employee);
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  display: flex;
  margin-left: 0.5rem;
}
.employee-details {
  grid-column: 2/3;

  .profile-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 6rem;
      border-radius: 50%;
    }
  }

  input {
    font-family: "Montserrat", sans-serif;
    font-size: 1.2rem;
    height: 1.8rem;
    width: 110%;
  }

  .title {
    margin: 1rem;
  }

  .edit-name {
    display: flex;
    margin: 1rem;

    img {
      width: 1.5rem;
    }
  }

  .email-and-number {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
}
</style>