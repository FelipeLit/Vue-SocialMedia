<template>
  <div class="card-container">
    <div class="row" v-for="(row, rowIndex) in chunkedProfiles" :key="rowIndex">
      <div class="profile-card" v-for="profile in row" :key="profile.id">
        <div class="card-header">
          <img :src="profile.avatar" alt="Profile Picture" class="avatar" />
          <div class="card-info">
            <h3>{{ profile.name }}</h3>
            <p>{{ profile.role }}</p>
          </div>
        </div>
        <div class="card-skills">
          <span v-for="skill in profile.skills" :key="skill" class="skill">{{
            skill
          }}</span>
        </div>
        <div class="card-stats">
          <div>
            <h4>{{ profile.projects }}</h4>
            <p>Projects</p>
          </div>
          <div>
            <h4>{{ profile.tasks }}</h4>
            <p>Tasks</p>
          </div>
          <div>
            <h4>{{ profile.connections }}</h4>
            <p>Connections</p>
          </div>
        </div>
        <div class="card-actions">
          <button class="connect-btn">Connected</button>
          <button class="message-btn">✉</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import perfilImage from "../assets/images/perfil.jpg";
import perfilImageMen from "../assets/images/man.jpg";

const profiles = [
  {
    id: 1,
    name: "Mark Gilbert",
    role: "UI Designer",
    avatar: perfilImage,
    skills: ["Figma", "Sketch"],
    projects: 18,
    tasks: 834,
    connections: 129,
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Web Developer",
    avatar: perfilImageMen,
    skills: ["HTML", "CSS", "JavaScript"],
    projects: 24,
    tasks: 900,
    connections: 200,
  },
  {
    id: 3,
    name: "John Smith",
    role: "Backend Developer",
    avatar: perfilImage,
    skills: ["Node.js", "Express", "MongoDB"],
    projects: 10,
    tasks: 450,
    connections: 75,
  },
  {
    id: 4,
    name: "Sara Williams",
    role: "Graphic Designer",
    avatar: perfilImageMen,
    skills: ["Photoshop", "Illustrator"],
    projects: 30,
    tasks: 1000,
    connections: 250,
  },
  {
    id: 5,
    name: "David Brown",
    role: "Mobile Developer",
    avatar: perfilImage,
    skills: ["React Native", "Swift"],
    projects: 20,
    tasks: 600,
    connections: 150,
  },
  {
    id: 6,
    name: "Emily Johnson",
    role: "Product Manager",
    avatar: perfilImageMen,
    skills: ["JIRA", "Confluence"],
    projects: 40,
    tasks: 1200,
    connections: 300,
  },
];

const chunkedProfiles = computed(() => {
  const chunkSize = 3;
  const result = [];
  for (let i = 0; i < profiles.length; i += chunkSize) {
    result.push(profiles.slice(i, i + chunkSize));
  }
  return result;
});
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 2rem;
}

.row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.profile-card {
  flex: 1;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 10px;
}

.card-info {
  text-align: left;
}

.card-skills {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.skill {
  background-color: #e0f7fa;
  padding: 2px 8px;
  border-radius: 5px;
  color: #00796b;
  font-weight: bold;
  display: inline-block;
}

.card-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.card-stats div {
  text-align: center;
}

.card-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.connect-btn {
  background-color: #7c3aed;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.message-btn {
  background-color: #f0f0f0;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
    gap: 15px;
  }

  .profile-card {
    width: 100%;
  }
}
</style>
