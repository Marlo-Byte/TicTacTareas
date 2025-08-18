<template>
  <LoginLayout :isLogin="false">
    <AuthForm :isLogin="false" @toggle="goToLogin" />
  </LoginLayout>
</template>

<script setup>
import { useRouter } from "vue-router";
import LoginLayout from "@/components/layout/LoginLayout.vue"; // asumimos que ya lo tenés
import AuthForm from "@/components/forms/AuthForm.vue";

const router = useRouter();
const goToLogin = () => router.push("/login");
</script>
