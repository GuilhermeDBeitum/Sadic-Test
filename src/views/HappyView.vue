<template>
  <v-card height="400" @click="changeRouter()">
    <v-container>
      <v-card height="100%">
        <v-row align="center" justify="space-around">
          <v-col class="text-center" cols="8" sm="4">
            <h1>🤩 100% Feliz</h1>
            <h2>Agora estou muito feliz!</h2>
            <p>Click para reiniciar</p>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: `HappyView`,

  data() {
    return {};
  },

  methods: {
    changeRouter() {
      this.$router.push({ name: "inicial" });
    },
  },
};
</script>
