<template>
  <div>
    <section class="history">
      <h1 class="history__title">
        History
      </h1>
      <div v-for="workout in me.workouts" :key="workout.id">
        <LogCard
          v-for="log in workout.logs"
          :key="log.id"
          :name="log.workout.name"
          :training-time="log.workout.exercisesOnWorkouts.length * 10"
          :number-of-exercises="log.workout.exercisesOnWorkouts.length"
          class="history__cards"
        />
      </div>
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
        query{
        me{
          id
          workouts {
            logs {
              id
              workout {
                id
                name
                exercisesOnWorkouts {
                  id
                }
              }
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
  margin: 0 auto;

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
