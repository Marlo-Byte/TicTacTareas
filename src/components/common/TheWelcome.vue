<script setup>
import WelcomeItem from '@/components/common/WelcomeItem.vue'
import SupportIcon from '@/components/icons/IconSupport.vue'
import CommunityIcon from '@/components/icons/IconCommunity.vue'
import EcosystemIcon from '@/components/icons/IconEcosystem.vue'
import ToolingIcon from '@/components/icons/IconTooling.vue'
import DocumentationIcon from '@/components/icons/IconDocumentation.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Acceso desde cualquier dispositivo</template>

    TicTacTareas es totalmente responsive, lo que significa que puedes gestionar tus tareas
    desde tu computadora, tablet o móvil, manteniendo tu productividad en cualquier lugar.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Organiza tus tareas</template>

    Crea, edita y elimina tareas fácilmente para mantener un control claro
    de tus pendientes y prioridades diarias.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Incrementa tu productividad</template>

    Establece recordatorios y fechas límite para tus tareas y asegúrate de cumplirlas
    a tiempo, mejorando tu eficiencia diaria.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Interfaz amigable</template>

    Disfruta de un diseño limpio y fácil de usar, para que enfocarte en tus tareas sea
    rápido y sencillo.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Soporte y mejoras</template>

    Estamos comprometidos con mantener TicTacTareas actualizado y funcional, 
    recibiendo sugerencias de los usuarios para mejorar continuamente.
  </WelcomeItem>
</template>
