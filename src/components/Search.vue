<template>
  <div class="container">
    <div class="container-search">
      <i class="fas fa-search"></i>
      <input type="text" placeholder="search" />
    </div>

    <div class="container-icons">
      <img
        :src="imgTranslate"
        alt=""
        width="35vh"
        height="33vh"
        class="img img-profile"
      />
      <img
        :src="imgTheme"
        alt=""
        width="35vh"
        height="33vh"
        class="img img-profile"
      />
      <img
        :src="imgAccess"
        alt=""
        width="35vh"
        height="33vh"
        class="img img-profile"
      />
      <img
        :src="imgProfile"
        alt=""
        width="35vh"
        height="33vh"
        class="img img-profile"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import imgTranslate from "@/assets/images/traducir.png";
import imgTheme from "@/assets/images/noche.png";
import imgAccess from "@/assets/images/accesibilidad.png";
import imgProfile from "@/assets/images/perfil.jpg";

const imgTraductor = ref(imgTranslate);
const imgTema = ref(imgTheme);
const imgAcceso = ref(imgAccess);
const imgPerfil = ref(imgProfile);
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.596);
  border-radius: 10px;
  padding: 0.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 1rem;
  }
}

.container-search {
  padding-left: 3rem;

  @media (max-width: 600px) {
    padding-left: 0;
    width: 100%;
    text-align: center;
  }
}

.container-icons {
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    justify-content: center;
    margin-top: 1rem;
  }
}

.img {
  border-radius: 50px;
  margin-right: 0.3rem;
  object-fit: cover;
}

input {
  border: none;
  background: rgba(255, 255, 255, 0.534);
  outline: none;
  color: #333;
  font-size: 1em;
}
</style>
