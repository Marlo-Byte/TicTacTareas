<template>
  <LoginLayout :isLogin="true">
    <AuthForm :isLogin="true" @toggle="goToRegister" />
  </LoginLayout>
</template>

<script setup>
import { useRouter } from "vue-router";
import LoginLayout from "@/components/layout/LoginLayout.vue"; // asumimos que ya lo tenés
import AuthForm from "@/components/forms/AuthForm.vue";

const router = useRouter();
const goToRegister = () => router.push("/register");
</script>
