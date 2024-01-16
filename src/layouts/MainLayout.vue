<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title> Dashboard </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <q-item @click="logout" clickable>
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Log Out</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="layout-style">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Dashboard",
    caption: "",
    icon: "dashboard",
    link: "/dashboard/",
  },
  {
    title: "Users",
    caption: "",
    icon: "group",
    link: "/dashboard/userlist",
  },
  {
    title: "Add New",
    caption: "",
    icon: "add_box",
    link: "/dashboard/addnew",
  },
  {
    title: "My Content",
    caption: "",
    icon: "widgets",
    link: "/dashboard/mycontent",
  },
];

export default {
  name: "MainLayout",
  components: {
    EssentialLink,
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "login" });
    },

    mounted() {
      let user = localStorage.getItem("apiToken");
      if (!user) {
        this.$router.push({ name: "login" });
      }
    },
  },
};
</script>

<style>
.layout-style {
  background-color: #f1f1f1;
  height: 100vh;
}
</style>
