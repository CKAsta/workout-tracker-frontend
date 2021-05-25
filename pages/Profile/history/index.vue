<template>
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
</template>

<script>
import gql from 'graphql-tag'
import LogCard from '@/components/LogCard'

export default {
  components: {
    LogCard
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
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  width: 90%;

  &__title {
    color: $color-text;
  }

  &__cards {
    margin-bottom: 10px;
  }
}

</style>
