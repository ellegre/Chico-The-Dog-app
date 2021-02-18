<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">Add New Project</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h3>Add a new Project</h3>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="edit"></v-textarea>

            <v-menu max-width="290">
              <template v-slot:activator="{ on }">
                <v-text-field :value="due" label="Due date" prepend-icon="mdi-calendar-range" v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="due"></v-date-picker>
            </v-menu>
            <v-btn text class="success mx-0 mt-3" @click="submit">
              Add project
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      content: '',
      due: null,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    }
  },
  methods: {
    submit () {
      console.log(this.title, this.content)
    }
  }
}
</script>
