import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nextId: 5,
    employees: [
      {
        id: 1,
        name: "Rikard Virta",
        titel: "Programmer",
        mobil: "0708550020",
        email: "rikard.virta90@gmail.com",
      },
      {
        id: 2,
        name: "Joel Degerman",
        titel: "Programmer",
        mobil: "0708550020",
        email: "joel.degerman1999@gmail.com",
      },
      {
        id: 3,
        name: "Robban Svensson",
        titel: "Programmer",
        mobil: "0708550020",
        email: "robban.svensson90@gmail.com",
      },
      {
        id: 4,
        name: "Niklas Palm",
        titel: "Programmer",
        mobil: "0708550020",
        email: "niklas.palm90@gmail.com",
      },
    ],
  },
  getters: {
    getEmployeeById: (state) => (id) => {
      return state.employees.find((e) => e.id === id);
    },
  },
  mutations: {
    incrementId(state) {
      state.nextId++;
    },
    addEmployee(state, payload) {
      state.employees.push(payload);
    },
    deleteEmployee(state, payload) {
      state.employees = state.employees.filter((e) => e != payload);
    },
    updateEmployee(state, payload) {
      let index = state.employees.findIndex((e) => e.id === payload.id);
      state.employees.splice(index, 1, payload);
    },
  },
  actions: {
    createEmployee(context, payload) {
      payload.id = context.state.nextId;
      context.commit("addEmployee", payload);
      context.commit("incrementId");
    },
  },
  modules: {},
});
