<template>
  <div>
    <div>
      <h4 style="text-align: center; margin-top: 15px">User List</h4>
    </div>

    <div class="flex">
      <table class="table-style">
        <thead class="heading-style">
          <th>SL</th>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>

          <th>Email</th>
          <th>Status</th>
        </thead>
        <tr v-for="(item, index) in items">
          <td>{{ index + 1 }}</td>
          <td>{{ item.id }}</td>
          <td>{{ item.user.name }}</td>
          <td>{{ item.user.gender }}</td>

          <td>{{ item.user.email }}</td>

          <td>{{ item.user.status }}</td>
        </tr>
      </table>
    </div>
    <div class="flex">
      <div class="loader" v-if="loading"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UsersList",
  data() {
    return {
      items: [],
      loading: false,
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      const config = {
        url: "https://icircles.app/api/massociation/members/25?type=employee&current_page=1&keyword=&status=1",
        method: "GET",
      };
      try {
        const res = await axios(config);
        if (res.status == 200) {
          this.items = res.data.data;
          this.loading = false;
        }
      } catch (error) {
        this.loading = true;
        console.log(error);
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
.flex {
  display: flex;
  justify-content: center;
}
.table-style {
  background-color: rgb(243, 248, 246);
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  margin-top: 0;
}

.heading-style th {
  background-color: rgb(227, 232, 236);
  min-width: 100px;
  height: 40px;
  text-align: left;
  padding: 5px;
}

.table-style tr td {
  /* text-align: center; */
  padding: 5px;
}

/* loading */

.loader {
  border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top: 6px solid #000000;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
