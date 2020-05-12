<template>
  <article class="employee-details">
    <h1>Detaljer</h1>
    <div class="profile-div">
      <img src="@/assets/img/profile.png" alt />
      <div class="edit-name">
        <h2>{{employee.name}}</h2>
        <router-link :to="'/staff/' + employee.id + '/edit'">
          <img src="@/assets/img/edit.svg" alt />
        </router-link>
      </div>
      <div class="title">
        <h4>{{employee.titel}}</h4>
      </div>

      <div class="email-and-number">
        <p>{{employee.email}}</p>
        <p>{{employee.mobil}}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    employee: Object
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
    margin: 1rem;
  }
}
</style>