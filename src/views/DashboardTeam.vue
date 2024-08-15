<template>
  <div class="dashboard-team">
    <div class="content" v-for="(team, index) in teams" :key="index">
      <div class="team-name">
        <h4>{{ team.name }}</h4>
        <img
          src="../assets/images/estrella-blanca.png"
          alt="Star"
          class="star-icon"
        />
      </div>
      <div class="team-description">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
          repudiandae. Illo ipsa nostrum, placeat, sint omnis modi, minus
          repellendus delectus accusamus est dolorem dignissimos eos tenetur
          architecto. Quibusdam, ad libero.
        </p>
      </div>
      <div class="team-members">
        <img
          src="../assets/images/equipo.png"
          alt="Members"
          class="members-icon"
        />
        <div class="tags-container">
          <button class="tag">{{ team.tecnology }}</button>
          <button class="tag-role">{{ team.role }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const teams = [
  { name: "Backend Developer", tecnology: "C++", role: "Developer" },
  { name: "VueJS Developer", tecnology: "Front-end", role: "Frontend" },
  { name: "React Developer", tecnology: "Front", role: "Frontend" },
  { name: "Support Team", tecnology: "Support", role: "Support" },
  { name: "UI Designer", tecnology: "Designer", role: "Designer" },
  { name: "Digital Marketing", tecnology: "Marketing", role: "Marketing" },
  { name: "Support Team", tecnology: "Support", role: "Support" },
  { name: "UI Designer", tecnology: "Designer", role: "Designer" },
  { name: "Digital Marketing", tecnology: "Marketing", role: "Marketing" },
];
</script>

<style lang="scss" scoped></style>
