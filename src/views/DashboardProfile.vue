<template>
  <div class="dashboard">
    <div class="sidebar">
      <div class="about">
        <h3>About</h3>
        <!-- Información personal -->
        <p><strong>Full Name:</strong> John Doe</p>
        <p><strong>Status:</strong> Active</p>
        <p><strong>Role:</strong> Developer</p>
        <!-- Más detalles -->
      </div>
      <div class="teams">
        <h3>Teams</h3>
        <!-- Equipos -->
        <p>Backend Developer (126 Members)</p>
        <p>VueJS Developer (98 Members)</p>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        <!-- Resumen -->
        <p><strong>Task Completed:</strong> 13.5k</p>
        <p><strong>Connections:</strong> 897</p>
        <p><strong>Projects Compiled:</strong> 146</p>
      </div>
    </div>
    <div class="main-content">
      <div class="activity-timeline">
        <h3>Activity Timeline</h3>
        <!-- Actividades recientes -->
      </div>
      <div class="connection-teams">
        <div class="connection">
          <h3>Connection</h3>
          <!-- Lista de conexiones -->
        </div>
        <div class="teams-list">
          <h3>Teams</h3>
          <!-- Lista de equipos -->
        </div>
      </div>
      <div class="project-list">
        <h3>Project List</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  gap: 2rem;

  .sidebar {
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .about,
    .teams,
    .overview {
      background-color: #fff;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  }

  .main-content {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .activity-timeline,
    .connection-teams,
    .project-list {
      background-color: #fff;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .connection-teams {
      display: flex;
      gap: 2rem;

      .connection,
      .teams-list {
        flex: 1;
      }
    }
  }
}
</style>
