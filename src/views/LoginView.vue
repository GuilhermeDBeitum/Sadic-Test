<template>
  <v-card height="400">
    <v-container>
      <v-col></v-col>
      <v-col></v-col>
      <v-col></v-col>
      <v-row align="center" justify="space-around">
        <v-col class="text-center" cols="12" sm="4">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              color="green"
              filled
              autocomplete="off"
              v-model="vLogin"
              :rules="[rules.email]"
              label="E-mail"
              :prepend-icon="'mdi-account'"
            ></v-text-field>
            <v-text-field
              color="green"
              autocomplete="off"
              filled
              v-model="vPassword"
              label="Senha"
              :type="show1 ? 'text' : 'password'"
              :rules="[rules.characters]"
              name="input-10-2"
              class="input-group--focused"
              @click:append="show1 = !show1"
              :prepend-icon="'mdi-lock'"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            ></v-text-field>
          </v-form>
        </v-col>
      </v-row>

      <v-row align="center">
        <v-col cols="12" sm="4"></v-col>
        <v-col class="text-center" cols="12" sm="4">
          <router-link :to="rota" style="text-decoration: none; color: inherit">
            <v-btn
              class="ma-2 white--text"
              color="green"
              @click="initializeLogin()"
              >Login</v-btn
            >
          </router-link>
        </v-col>
      </v-row>
    </v-container>

    <v-snackbar
      color="red"
      absolute
      top
      multi-line
      vertical
      tag
      hide-details
      text
      shaped
      elevation="24"
      class="text-center ma-2"
      v-model="bar"
    >
      {{ print }}
    </v-snackbar>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: `LoginView`,
  data: () => ({
    print: "E-mail ou Senha Incorreto!  Tente novamente.",
    rota: "",
    valid: true,
    bar: false,
    show1: false,
    vLogin: "",
    vPassword: "",
    session: "",
    rules: {
      characters: (value) => value.length >= 8 || "Min 8 caracteres.",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "E-mail invalido.";
      },
    },
  }),

  watch: {
    vLogin: function (newLogin) {
      this.login = newLogin;
    },

    vPassword: function (newPassword) {
      this.password = newPassword;
    },
  },

  computed: {
    ...mapState({
      token: (state) => state.modlogin.token,
    }),

    login: {
      get() {
        return this.$store.state.vLogin;
      },

      set(newLogin) {
        this.$store.commit("SET_LOGIN", newLogin);
      },
    },

    password: {
      get() {
        return this.$store.state.vPassword;
      },

      set(newPassword) {
        this.$store.commit("SET_PASSWORD", newPassword);
      },
    },
  },

  methods: {
    async initializeLogin() {
      await this.generateToken();
      this.validateLogin();
    },

    async generateToken() {
      await this.$store.dispatch("generateToken");
    },

    validateLogin() {
      if (this.$refs.form.validate()) {
        if (this.token) {
          this.session = "sessionStarted";
          localStorage.setItem("session", this.session);
          this.$router.push({ name: "inicial" });
        } else {
          this.bar = true;
        }
      }
    },

    validSession() {
      if (
        window.localStorage.getItem("tokenCached") &&
        window.localStorage.getItem("session") === "sessionStarted"
      ) {
        this.$router.push({ name: "inicial" });
      }
    },

    validate() {
      this.bar = true;
    },
  },
  mounted() {
    this.validSession();
  },
};
</script>
