import Vue from "vue";
import VueRouter from "vue-router";
import Staff from "../views/Staff.vue";
import StaffDetails from "../views/StaffDetails.vue";
import StaffDetailsEdit from "../views/StaffDetailsEdit.vue";
import CreateStaff from "../views/CreateStaff.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/staff",
    name: "staff",
    component: Staff,
    children: [
      {
        path: ":id",
        component: StaffDetails,
      },
      {
        path: ":id/edit",
        component: StaffDetailsEdit,
      },
      {
        path: "/create",
        component: CreateStaff
      },
    ],
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
