<template>
  <LoginLayout :isLogin="false">
    <RegisterForm @toggle="goToLogin" />
  </LoginLayout>
</template>

<script>
import LoginLayout from "@/components/layout/LoginLayout.vue";
import RegisterForm from "@/components/forms/RegisterForm.vue";

export default {
  name: "RegisterView",
  components: {
    LoginLayout,
    RegisterForm,
  },
  methods: {
    goToLogin() {
      this.$router.push("/login"); // redirige al login
    },
  },
};
</script>
