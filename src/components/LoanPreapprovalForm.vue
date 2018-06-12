<template>
<b-form @submit.prevent="onSubmit" novalidate>
  <b-form-group horizontal :label-cols="3" label="Name" label-for="name" required>
    <b-form-input id="name" v-model="applicant.name" :state="validated ? !errors.name : null" />
    <div class="invalid-feedback">
      {{ errors.name }}
    </div>
  </b-form-group>

  <b-button type="submit" variant="primary">Submit</b-button>
</b-form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class LoanPreapprovalForm extends Vue {
  public validated: boolean = false;

  public applicant = {
    name: "",
  };

  private errors: any = {};

  private onSubmit(): void {
    this.validated = false;
    this.errors = {};

    if (this.applicant.name === "") {
      this.errors.name = "Please provide your name.";
    }

    this.validated = true;

    if (Object.keys(this.errors).length === 0) {
      alert("Valid! Go ahead and make the API call.");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
