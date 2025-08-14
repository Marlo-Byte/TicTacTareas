<template>
  <LoginLayout :isLogin="true">
    <LoginForm :isLogin="true" @toggle="goToRegister" />
  </LoginLayout>
</template>

<script>
import LoginLayout from "@/components/layout/LoginLayout.vue";
import LoginForm from "@/components/forms/LoginForm.vue";

export default {
  name: "LoginView",
  components: {
    LoginLayout,
    LoginForm,
  },
  methods: {
    goToRegister() {
      this.$router.push("/register"); // redirige al registro
    },
  },
};
</script>
