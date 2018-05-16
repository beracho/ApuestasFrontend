<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Nombre">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Grupo A">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Grupo B">{{ item.salary }}</md-table-cell>
        <md-table-cell md-label="Grupo C">{{ item.country }}</md-table-cell>
        <md-table-cell md-label="Grupo D">{{ item.city }}</md-table-cell>
        <md-table-cell md-label="Grupo E">{{ item.city }}</md-table-cell>
        <md-table-cell md-label="Grupo F">{{ item.city }}</md-table-cell>
        <md-table-cell md-label="Grupo G">{{ item.city }}</md-table-cell>
        <md-table-cell md-label="Grupo H">{{ item.city }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'ordered-table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
      users: [
        {
          id: 1,
          name: 'Dakota Rice',
          salary: '$36,738',
          country: 'Niger',
          city: 'Oud-Turnhout'
        },
        {
          id: 2,
          name: 'Minerva Hooper',
          salary: '$23,738',
          country: 'Curaçao',
          city: 'Sinaai-Waas'
        },
        {
          id: 3,
          name: 'Sage Rodriguez',
          salary: '$56,142',
          country: 'Netherlands',
          city: 'Overland Park'
        },
        {
          id: 4,
          name: 'Philip Chaney',
          salary: '$38,735',
          country: 'Korea, South',
          city: 'Gloucester'
        }
      ]
    }
  }
}
</script>
