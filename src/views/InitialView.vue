<template>
  <v-card height="400" @click="changeRouter()">
    <v-container>
      <v-card height="100%">
        <v-row align="center" justify="space-around">
          <v-col class="text-center" cols="8" sm="4">
            <h1>😐 Vamos iniciar?</h1>
            <p>Click para continuar</p>
          </v-col>
        </v-row>
      </v-card>
      <router-view></router-view>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: `InitialView`,

  data() {
    return {};
  },

  methods: {
    changeRouter() {
      this.$router.push({ name: "triste" });
    },
  },
};
</script>
