<template>
  <article class="employee-details">
    <h1>Detaljer</h1>
    <div class="profile-div">
      <img src="@/assets/img/profile.png" alt />
      <div class="edit-name">
        <input type="text" v-model="updatedEmployee.name" />
        <img src="@/assets/img/check.svg" alt @click="updateEmployee" />
      </div>
      <div class="title">
        <input type="text" v-model="updatedEmployee.titel" />
      </div>

      <div class="email-and-number">
        <input type="text" v-model="updatedEmployee.email" />
        <input type="text" v-model="updatedEmployee.mobil" />
      </div>
      <button @click="deleteMe">Delete me</button>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    employee: Object,
  },

  data() {
    return {
      updatedEmployee: {
        id: this.employee.id,
        name: this.employee.name,
        titel: this.employee.titel,
        email: this.employee.email,
        mobil: this.employee.mobil,
      },
    };
  },
  methods: {
    deleteMe() {
      if (confirm("Do you want to delete")) {
        this.$store.commit("deleteEmployee", this.employee);
        this.$router.push("/staff/");
      }
    },
    updateEmployee() {
      if (confirm("Do you want to update")) {
        this.$store.commit("updateEmployee", this.updatedEmployee);
        this.$router.push("/staff/" + this.employee.id);
      }
    },
  },
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
