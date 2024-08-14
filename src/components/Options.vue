<template>
  <div class="container-options">
    <div class="opt">
      <div>
        <a class="option"
          ><img
            src="../assets/images/usuario.png"
            alt="usuario"
            width="15px"
            height="15px"
            class="img"
          />
          Profile</a
        >
        <a class="option"
          ><img
            src="../assets/images/team-building.png"
            alt="usuario"
            width="15px"
            height="15px"
            class="img"
          />
          Team</a
        >
      </div>

      <div class="opt-2">
        <a class="option"
          ><img
            src="../assets/images/briefing.png"
            alt="usuario"
            width="15px"
            height="15px"
            class="img"
          />Projects</a
        >
        <a class="option"
          ><img
            src="../assets/images/enlace.png"
            alt="usuario"
            width="15px"
            height="15px"
            class="img"
          />Connections</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container-options {
  margin-top: 10rem;

  @media (max-width: 600px) {
    margin-top: 18rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.opt {
  display: flex;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column; /* Cambia a columna en móvil */
  }
}

.opt-2 {
  margin-top: 0; /* Estilo por defecto para escritorio */

  @media (max-width: 600px) {
    margin-top: 1.3rem; /* Espaciado adicional para móvil */
  }
}

.option {
  cursor: pointer;
  padding: 1rem;
  text-align: left; /* Estilo por defecto para escritorio */
  width: auto; /* Restablece el ancho para escritorio */

  &:hover {
    background-color: #9e59be;
    border-radius: 10px;
    color: white;
  }

  @media (max-width: 600px) {
    width: 100%; /* Aumenta el ancho en móvil */
    text-align: center; /* Centra el texto en móvil */
  }
}
</style>
