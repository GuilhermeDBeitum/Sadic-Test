<template>
  <v-dialog v-model="dialog" hide-overlay persistent width="80%">
    <v-col cols="12" md="12">
      <v-row align="center" justify="space-around">
        <v-col class="text-center" cols="10" sm="6">
          <v-card width="100%">
            <br />
            <v-row align="center" justify="space-around">
              <v-card width="20%">
                <h1>{{ this.emoji }}</h1>
              </v-card>
            </v-row>
            <br />
            <v-col>
              <p>{{ this.$store.state.modjoke.joke }}</p>
            </v-col>
          </v-card>

          <v-card>
            <v-progress-linear color="green" v-model="happyPercent" height="25">
              <strong>{{ Math.ceil(happyPercent) }}% Feliz</strong>
            </v-progress-linear>

            <br />

            <v-progress-linear color="red" v-model="sadPercent" height="25">
              <strong>{{ Math.ceil(sadPercent) }}% Triste</strong>
            </v-progress-linear>

            <br />
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-dialog>
</template>

<script>
export default {
  name: `InitialView`,

  data() {
    return {
      dialog: true,
      happyPercent: 0,
      sadPercent: 100,
      emoji: "😞",
    };
  },

  watch: {
    sadPercent(val) {
      val >= 0 ? this.switchEmoji() : (this.sadPercent = 0);
      val === 80 ? (this.$store.state.modjoke.joke = this.listJoke()) : null;
      val === 60 ? (this.$store.state.modjoke.joke = this.listJoke()) : null;
      val === 40 ? (this.$store.state.modjoke.joke = this.listJoke()) : null;
      val === 20 ? (this.$store.state.modjoke.joke = this.listJoke()) : null;
    },
  },

  methods: {
    startBuffer() {
      this.sadPercent > 0
        ? setInterval(() => {
            this.sadPercent -= 1;
            this.happyPercent += 1;
          }, 1000)
        : null;
    },

    switchEmoji() {
      switch (this.sadPercent) {
        case 100:
          this.emoji = "😞";
          break;
        case 80:
          this.emoji = "🙁";
          break;
        case 60:
          this.emoji = "😐";
          break;
        case 40:
          this.emoji = "🙂";
          break;
        case 20:
          this.emoji = "😀";
          break;
        case 0:
          this.changeRouter();
          break;
      }
    },

    changeRouter() {
      this.$router.push({ name: "feliz" });
    },
    async listJoke() {
      await this.$store.dispatch("listJoke");
    },
  },

  mounted() {
    this.startBuffer();
  },

  created() {
    this.listJoke();
  },
};
</script>
