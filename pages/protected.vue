<template>
  <div>
    <div>
      <div>
        <pre>{{ JSON.stringify(me, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  middleware: ['authenticated'],
  data () {
    return {
      me: {}
    }
  },
  apollo: {
    me: {
      query: gql`
        query {
          me{
            id
            email
            name
          }
        }
      `
    }
  }
}
</script>
