<template>
  <div class="container-options">
    <div class="opt">
      <div>
        <button class="option img" @click="navigate('profile')">
          <img
            src="../assets/images/usuario.png"
            alt="Profile icon"
            width="15"
            height="15"
          />
          Profile
        </button>

        <button class="option img" @click="navigate('team')">
          <img
            src="../assets/images/team-building.png"
            alt="Team icon"
            width="15"
            height="15"
          />
          Team
        </button>
      </div>

      <div class="opt-2">
        <button class="option img" @click="navigate('projects')">
          <img
            src="../assets/images/paleta-de-color.png"
            alt="Projects icon"
            width="15"
            height="15"
          />
          Projects
        </button>
        <button class="option img" @click="navigate('connections')">
          <img
            src="../assets/images/briefing.png"
            alt="Profile icon"
            width="15"
            height="15"
          />
          Connections
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const page = ref("PROFILE");

import { useRouter } from "vue-router";

const router = useRouter();

function navigate(view: string) {
  if (view === "profile") {
    router.push("/profile");
  } else if (view === "team") {
    router.push("/team");
  } else if (view === "projects") {
    router.push("/projects");
  } else if (view === "connections") {
    router.push("/connections");
  }
}
</script>

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
    flex-direction: column;
  }
}

.opt-2 {
  margin-top: 0;

  @media (max-width: 600px) {
    margin-top: 1.3rem;
  }
}

.option {
  cursor: pointer;
  padding: 1rem;
  text-align: left;
  width: auto;
  border: none;
  border-radius: 10px;
  margin-right: 2rem;

  &:hover {
    background-color: #9e59be;
    border-radius: 10px;
    color: white;
  }

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
    margin-top: 1rem;
  }
}
</style>
