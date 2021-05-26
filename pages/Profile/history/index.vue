<template>
  <div>
    <section class="history">
      <h1 class="history__title">
        History
      </h1>
      <LogCard
        v-for="workout in me.workouts"
        :key="workout.id"
        :name="workout.name"
        :training-time="workout.exercisesOnWorkouts.length * 10"
        :number-of-exercises="workout.exercisesOnWorkouts.length"
        class="history__cards"
      />
    </section>
    <Navigation />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import LogCard from '@/components/LogCard'
import Navigation from '@/components/Navigation'

export default {
  components: {
    LogCard,
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
            workouts{
              id
              name
              exercisesOnWorkouts {
                id
              }
            }
          }
        }
      `
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/_vars';

.history {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: 20px;

  @media screen and(min-width: $breakpoint-desktop) {
    width: 30%;
  }

  &__title {
    color: $color-text;
  }

  &__cards {
    margin-bottom: 10px;
  }
}

</style>
