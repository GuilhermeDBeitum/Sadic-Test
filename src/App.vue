<template>
  <v-app>
    <template>
      <v-card color="green" height="20%">
        <v-app-bar app color="green">
          <v-row align="center" justify="space-around">
            <v-col class="text-center white--text" cols="8" sm="4">
              <h1>SADIC TEST</h1>
            </v-col>
          </v-row>
        </v-app-bar>
      </v-card>
      <router-view></router-view>
    </template>
  </v-app>
</template>

<script>
export default {
  name: `App`,
};
</script>
