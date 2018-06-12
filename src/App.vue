<template>
  <div id="app" class="container">
    <h1>Get pre-approved for a loan today</h1>
    <p>
      We just need a few pieces of information to get started on your loan
      application. In many cases, your loan will be pre-approved within minutes!
    </p>

    <p>
      Fields with a <span class="text-danger">*</span> are required.
    </p>

    <LoanPreapprovalForm msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoanPreapprovalForm from "./components/LoanPreapprovalForm.vue";

@Component({
  components: {
    LoanPreapprovalForm,
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.form-group[required] label::after {
  content: " *";
  color: #dc3545 !important; // .text-danger
}
</style>
