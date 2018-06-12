import LoanPreapprovalForm from "@/components/LoanPreapprovalForm.vue";
import { createLocalVue, mount, Wrapper } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";
import { expect } from "chai";

let wrapper: Wrapper<LoanPreapprovalForm>;

describe("LoanPreapprovalForm.vue", () => {
  before(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);

    wrapper = mount(LoanPreapprovalForm, { localVue });
  });

  it("validates the form on submit", () => {
    expect(wrapper.vm.validated).to.be.false;
    wrapper.find("form").trigger("submit");
    expect(wrapper.vm.validated).to.be.true;
  });

  it("shows an error if name is empty", () => {
    // name defaults to empty, so just trigger submit
    wrapper.find("form").trigger("submit");
    expect(wrapper.text()).to.include("Please provide your name.");
  });
});
