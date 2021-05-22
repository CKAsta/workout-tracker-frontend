<template>
  <div>
    <div class="profile">
      <h1 class="profile__header">
        Profile
      </h1>
      <span class="profile__info">{{ me.name }}</span>
      <span class="profile__info">{{ me.email }}</span>
    </div>
    <Navigation />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Navigation from '@/components/navigation'

export default {
  components: {
    Navigation
  },
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
            workouts{
              id
              name
            }
          }
        }
      `
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/_vars';
  .profile {
    margin-left: 20px;
    display: flex;
    flex-direction: column;

    &__header {
      color: $color-text;
    }

    &__info {
      margin-top: 5px;
      color: $color-text;
    }
 }
</style>
