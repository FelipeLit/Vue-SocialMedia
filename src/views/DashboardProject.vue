<template>
  <div class="project-card-container">
    <div class="row" v-for="(row, rowIndex) in chunkedProjects" :key="rowIndex">
      <div class="project-card" v-for="project in row" :key="project.id">
        <div class="header">
          <div class="icon">
            <img src="../assets/images/equipo.png" alt="icon" />
          </div>
          <div class="details">
            <h3>{{ project.title }}</h3>
            <p>Client: {{ project.client }}</p>
          </div>
        </div>
        <div class="budget">
          <p>${{ project.budget }} | ${{ project.spent }}</p>
          <p>Total Budget</p>
        </div>
        <div class="dates">
          <div>Start Date: {{ project.startDate }}</div>
          <div>Deadline: {{ project.deadline }}</div>
        </div>
        <p class="description">{{ project.description }}</p>
        <hr />
        <div class="hours">
          <div>All Hours: {{ project.hours }} / {{ project.totalHours }}</div>
          <div class="days-left">{{ project.daysLeft }} Days left</div>
        </div>
        <div class="tasks">
          <div>
            Task: {{ project.tasksCompleted }} / {{ project.totalTasks }}
          </div>
          <div class="progress-bar">
            <div
              class="progress"
              :style="{ width: project.completionPercentage + '%' }"
            ></div>
          </div>
        </div>

        <div class="comments">
          <p>{{ project.comments }} comments</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Social Banners",
          client: "Christian Jimenez",
          budget: 24.8,
          spent: 18.2,
          startDate: "14/2/21",
          deadline: "28/2/22",
          description:
            "We are Consulting, Software Development and Web Development Services.",
          hours: 380,
          totalHours: 244,
          daysLeft: 28,
          tasksCompleted: 290,
          totalTasks: 344,
          completionPercentage: 95,
          members: [
            {
              id: 1,
              name: "Member 1",
              avatar: "https://via.placeholder.com/32",
            },
            {
              id: 2,
              name: "Member 2",
              avatar: "https://via.placeholder.com/32",
            },
            {
              id: 3,
              name: "Member 3",
              avatar: "https://via.placeholder.com/32",
            },
          ],
          comments: 15,
        },
        {
          id: 2,
          title: "Web Development",
          client: "Maria Lopez",
          budget: 45.0,
          spent: 30.0,
          startDate: "10/1/21",
          deadline: "15/3/22",
          description: "Developing a new website for a local business.",
          hours: 500,
          totalHours: 450,
          daysLeft: 40,
          tasksCompleted: 400,
          totalTasks: 450,
          completionPercentage: 88,
          members: [
            {
              id: 4,
              name: "Member 4",
              avatar: "https://via.placeholder.com/32",
            },
            {
              id: 5,
              name: "Member 5",
              avatar: "https://via.placeholder.com/32",
            },
          ],
          comments: 10,
        },
        {
          id: 3,
          title: "Mobile App Design",
          client: "John Smith",
          budget: 60.0,
          spent: 50.0,
          startDate: "01/3/21",
          deadline: "01/1/23",
          description: "Designing a mobile app for a startup.",
          hours: 600,
          totalHours: 500,
          daysLeft: 100,
          tasksCompleted: 450,
          totalTasks: 500,
          completionPercentage: 90,
          members: [
            {
              id: 6,
              name: "Member 6",
              avatar: "https://via.placeholder.com/32",
            },
          ],
          comments: 25,
        },
        {
          id: 4,
          title: "E-commerce Platform",
          client: "Lisa Brown",
          budget: 70.0,
          spent: 55.0,
          startDate: "15/4/21",
          deadline: "20/2/23",
          description: "Building an e-commerce platform for a retail store.",
          hours: 800,
          totalHours: 750,
          daysLeft: 120,
          tasksCompleted: 600,
          totalTasks: 700,
          completionPercentage: 85,
          members: [
            {
              id: 7,
              name: "Member 7",
              avatar: "https://via.placeholder.com/32",
            },
          ],
          comments: 20,
        },
        {
          id: 5,
          title: "SEO Optimization",
          client: "David White",
          budget: 30.0,
          spent: 22.0,
          startDate: "01/6/21",
          deadline: "01/5/23",
          description: "Optimizing website SEO for a local business.",
          hours: 300,
          totalHours: 250,
          daysLeft: 150,
          tasksCompleted: 200,
          totalTasks: 250,
          completionPercentage: 80,
          members: [
            {
              id: 8,
              name: "Member 8",
              avatar: "https://via.placeholder.com/32",
            },
          ],
          comments: 12,
        },
        {
          id: 6,
          title: "Digital Marketing Campaign",
          client: "Emma Johnson",
          budget: 50.0,
          spent: 40.0,
          startDate: "10/7/21",
          deadline: "01/6/23",
          description: "Running a digital marketing campaign for a startup.",
          hours: 400,
          totalHours: 350,
          daysLeft: 200,
          tasksCompleted: 300,
          totalTasks: 350,
          completionPercentage: 85,
          members: [
            {
              id: 9,
              name: "Member 9",
              avatar: "https://via.placeholder.com/32",
            },
          ],
          comments: 18,
        },
      ],
    };
  },
  computed: {
    chunkedProjects() {
      const chunkSize = 3; // Para 3 cards por fila
      const result = [];
      for (let i = 0; i < this.projects.length; i += chunkSize) {
        result.push(this.projects.slice(i, i + chunkSize));
      }
      return result;
    },
  },
};
</script>

<style scoped>
.project-card-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 1.5rem;
}
.row {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.project-card {
  flex: 1 1 calc(33.33% - 20px);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
}
.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.icon img {
  width: 32px;
  height: 32px;
}
.details {
  margin-left: 10px;
}
.hours {
  display: flex;
  align-items: flex-start;
}
.days-left {
  margin-left: 4rem;
}
.budget,
.dates,
.description,
.hours,
.tasks,
.members,
.comments {
  margin-bottom: 10px;
  margin-top: 1.5rem;
}
.progress-bar {
  height: 8px;
  background-color: #eee;
  border-radius: 5px;
  overflow: hidden;
}
.progress {
  height: 100%;
  background-color: #7c3aed;
}
.days-left {
  background-color: #e0f7fa;
  padding: 2px 8px;
  border-radius: 5px;
  color: #00796b;
  font-weight: bold;
  display: inline-block;
}
.members img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 5px;
}

/* Responsivo para móviles */
@media (max-width: 768px) {
  .project-card {
    flex: 1 1 calc(100% - 20px); /* Cada card ocupará toda la fila en pantallas pequeñas */
  }
}
</style>
