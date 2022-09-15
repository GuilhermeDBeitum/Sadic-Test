<template>
  <v-card height="400" @click="changeRouter()">
    <v-container>
      <v-card height="100%">
        <v-row align="center" justify="space-around">
          <v-col class="text-center" cols="8" sm="4">
            <h1>😞 Estou 100% Triste</h1>
            <h2>Preciso ler piadas para ficar feliz!</h2>
            <p>Click para iniciar</p>
          </v-col>
        </v-row>
      </v-card>
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
      this.$router.push({ name: "poker-face" });
    },
  },
};
</script>
