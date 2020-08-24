<template>
  <v-app id="app">
    <div>
    <v-app-bar dense flat>
      <v-icon class="mr-2">mdi-arrow-left</v-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu  left bottom>
       
      </v-menu>
    </v-app-bar>
  </div>
   
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
#app {

}
</style>
