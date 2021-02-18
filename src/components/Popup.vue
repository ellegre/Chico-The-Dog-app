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
          <v-form class="px-3" ref="form">
            <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>

            <v-menu max-width="290">
              <template v-slot:activator="{ on }">
                <v-text-field :value="formattedDate" label="Due date" prepend-icon="mdi-calendar-range" v-on="on" :rules="inputRules"></v-text-field>
              </template>
              <v-date-picker v-model="due"></v-date-picker>
            </v-menu>
            <v-spacer></v-spacer>
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
import moment from 'moment'

export default {
  data () {
    return {
      title: '',
      content: '',
      due: null,
      inputRules: [
        v => (v && v.length >= 3) || 'Minimum length is 3 characters'
      ],
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    }
  },
  computed: {
    formattedDate () {
      return this.due ? moment(this.due).format('Do MMMM YYYY') : ''
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        console.log(this.title, this.content)
        this.$refs.form.reset()
      }
    }
  }
}
</script>
