<template>
  <div class="dashboard">
    <div class="sidebar">
      <div class="about">
        <h3>About</h3>
        <!-- Información personal -->
        <p><strong>Full Name:</strong> John Doe</p>
        <p><strong>Status:</strong> Active</p>
        <p><strong>Role:</strong> Developer</p>
        <p><strong>Country:</strong> COL</p>
        <p><strong>Language:</strong> English</p>
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
        <h3 class="info">Activity Timeline</h3>
        <h4 class="info">12 Invoices have been paid</h4>
        <p class="info">invoces have been paid to the company</p>
        <div class="invoice info">Invoice.pdf</div>
        <hr />
        <h4 class="info">Cliente meeting</h4>
        <p class="info">Project meeting with Jonh 10:15am</p>
        <div class="info">
          <div class="info-meeting">
            <img
              src="../assets/images/perfil.jpg"
              alt=""
              width="50px"
              height="50px"
            />
            <div class="info-client">
              <p>Lester McCarty (Client)</p>
              <div>CEO of Riwi</div>
            </div>
          </div>
        </div>
      </div>
      <div class="connection-teams">
        <div class="connection">
          <h3>Connection</h3>
          <div class="info-conection">
            <img
              src="../assets/images/man.jpg"
              alt=""
              width="30px"
              height="30px"
            />
            <div class="info-client">
              <p>Cecilia Payne</p>
              <div>45 connections</div>
            </div>
          </div>

          <div class="info-conection">
            <img
              src="../assets/images/perfil.jpg"
              alt=""
              width="30px"
              height="30px"
            />
            <div class="info-client">
              <p>Curtis McCarty</p>
              <div>45k connections</div>
            </div>
          </div>

          <div class="info-conection">
            <img
              src="../assets/images/man.jpg"
              alt=""
              width="30px"
              height="30px"
            />
            <div class="info-client">
              <p>Alice Stone</p>
              <div>125 connections</div>
            </div>
          </div>

          <div class="info-conection">
            <img
              src="../assets/images/perfil.jpg"
              alt=""
              width="30px"
              height="30px"
            />
            <div class="info-client">
              <p>Eugenia Moore</p>
              <div>1.2k connections</div>
            </div>
          </div>

          <div class="info-conection">
            <img
              src="../assets/images/man.jpg"
              alt=""
              width="30px"
              height="30px"
            />
            <div class="info-client">
              <p>Lester McCarty (Client)</p>
              <div>CEO of Riwi</div>
            </div>
          </div>
        </div>
        <div class="teams-list">
          <h3>Teams</h3>
          <div class="info-conection">
            <img
              src="../assets/images/React.png"
              alt=""
              width="30px"
              height="30px"
            />
            <div class="info-client">
              <p>React Developers</p>
              <div>72 members</div>
            </div>
          </div>

          <div class="info-conection">
            <img
              src="../assets/images/support.png"
              alt=""
              width="30px"
              height="30px"
            />
            <div class="info-client">
              <p>Support team</p>
              <div>122 members</div>
            </div>
          </div>

          <div class="info-conection">
            <img
              src="../assets/images/Figma.png"
              alt=""
              width="30px"
              height="30px"
            />
            <div class="info-client">
              <p>IU Designer</p>
              <div>7 members</div>
            </div>
          </div>

          <div class="info-conection">
            <img
              src="../assets/images/vue.png"
              alt=""
              width="30px"
              height="30px"
            />
            <div class="info-client">
              <p>Vue.js Developers</p>
              <div>289 members</div>
            </div>
          </div>

          <div class="info-conection">
            <img
              src="../assets/images/x.png"
              alt=""
              width="30px"
              height="30px"
            />
            <div class="info-client">
              <p>Digital Marketing</p>
              <div>24 members</div>
            </div>
          </div>
        </div>
      </div>
      <div class="project-list">
        <h3>Project List</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
