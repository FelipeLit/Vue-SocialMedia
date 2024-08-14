<template>
  <div class="container">
    <div class="container-color"></div>

    <div class="container-info">
      <img :src="imgProfile" alt="imgPerfil" class="photo-profile" />
      <div class="info">
        <h3>Laura</h3>
        <div class="details">
          <span
            ><img
              src="../assets/images/paleta-de-color.png"
              alt=""
              width="12px"
              height="12px"
            />Coder</span
          >
          <span class="details-info"
            ><img
              src="../assets/images/ubicacion.png"
              alt=""
              width="12px"
              height="12px"
            />
            Medellin</span
          >
          <span class="details-info"
            ><img
              src="../assets/images/calendario.png"
              alt=""
              width="12px"
              height="12px"
            />
            30 June 1996</span
          >
        </div>
      </div>
      <button class="btn-connect">Connected</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import imgProfile from "../assets/images/perfil.jpg";
const imgPerfil = ref(imgProfile);
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  position: relative;
  margin-top: 2rem;

  .container-color {
    width: 100%;
    height: 200px;
    background: linear-gradient(135deg, #ffccff, #66ccff);
    border-radius: 10px 10px 0 0;
    box-shadow: 2px 4px rgba(235, 235, 235, 0.596);

    @media (max-width: 600px) {
      height: 150px;
    }
  }

  .container-info {
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 120px;
    background: white;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.596);
    padding: 20px;

    @media (max-width: 600px) {
      flex-direction: column;
      height: auto;
      padding: 1rem;
      text-align: center;
    }

    .photo-profile {
      width: 120px;
      height: 130px;
      border: 3px solid white;
      border-radius: 10px;
      position: absolute;
      left: 20px;
      top: -40px;
      object-fit: cover;

      @media (max-width: 600px) {
        position: static;
        margin-bottom: 1rem;
        width: 80px;
        height: 80px;
      }
    }

    .info {
      margin-left: 150px;

      @media (max-width: 600px) {
        margin-left: 0;
      }
    }
    .details {
      margin-top: 10px;
    }
    .details-info {
      margin-left: 20px;
    }

    .btn-connect {
      margin-left: auto;
      padding: 16px;
      border-radius: 10px;
      border: none;
      background-color: #9e59be;
      color: white;

      @media (max-width: 600px) {
        margin: 1rem 0 0;
      }
    }
  }
}
</style>
