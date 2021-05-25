<template>
  <div>
    <div class="edit-workout">
      <h1>{{ getWorkoutById.name }}</h1>
      <form class="edit-workout__form">
        <div
          v-for="exerciseOnWorkout in getWorkoutById.exercisesOnWorkouts"
          :id="exerciseOnWorkout.id"
          :key="exerciseOnWorkout.id"
          class="edit-workout__form--exercise"
        >
          <div class="edit-workout__form--exercise-header">
            <h2 class="edit-workout__form--exercise-header__title">
              {{ exerciseOnWorkout.exercise.name }}
            </h2>
          </div>
          <div class="edit-workout__form--exercise-info">
            <span class="edit-workout__form--exercise-info__text">Set</span>
            <span class="edit-workout__form--exercise-info__text">Reps</span>
            <span class="edit-workout__form--exercise-info__text">Weight</span>
          </div>
          <div
            v-for="setTarget in exerciseOnWorkout.setTargets"
            :key="setTarget.id"
            class="edit-workout__form--exercise--target"
          >
            <span class="edit-workout__form--exercise--target-setnumber">{{ setTarget.setNumber }}</span>
            <input
              v-model="setTarget.reps"
              type="text"
              placeholder="Reps"
              class="edit-workout__form--exercise--target-reps"
            >
            <input
              v-model="setTarget.weight"
              type="text"
              placeholder="Weight"
              class="edit-workout__form--exercise--target-weight"
            >
          </div>
        </div>
      </form>
      <button class="edit-workout__form--save" @click="finishWorkout()">
        <img class="edit-workout__form--save-img" :src="require('~/assets/icons/save_white.png')">
      </button>
    </div>
    <Navigation />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Navigation from '@/components/Navigation'

export default {
  components: {
    Navigation
  },
  middleware: ['authenticated'],
  data () {
    return {
      getWorkoutById: {}
    }
  },
  methods: {
    async finishWorkout () {
      try {
        for (const exerciseOnWorkout of this.getWorkoutById.exercisesOnWorkouts) {
          for (const setTarget of exerciseOnWorkout.setTargets) {
            await this.$apollo.mutate({
              mutation: gql`
              mutation($logId: ID!, $exercisesOnWorkoutsId: ID!, $setNumber: Int!, $reps: Int!, $weight: Int!) {
                addLogEntry(logId: $logId, exercisesOnWorkoutsId: $exercisesOnWorkoutsId, setNumber: $setNumber, reps: $reps, weight: $weight) {
                  id
                }
              }
            `,
              variables: {
                logId: this.$route.params.log,
                exercisesOnWorkoutsId: exerciseOnWorkout.id,
                setNumber: parseInt(setTarget.setNumber),
                reps: parseInt(setTarget.reps),
                weight: parseInt(setTarget.weight)
              }
            })
          }
        }
      } catch (e) {
        console.error(e)
      }
      this.$router.push('/profile/workouts')
    }
  },
  apollo: {
    getWorkoutById: {
      query: gql`
        query getWorkoutById($id: ID!){
          getWorkoutById(id: $id){
            id
            name
            exercisesOnWorkouts {
              id
              exercise {
                id
                name
              }
              setTargets {
                id
                setNumber
                reps
                weight
              }
            }
          }
        }
      `,
      variables () {
        return {
          id: this.$route.params.id
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../../../../assets/_vars';

.edit-workout {
  width: 90%;
  margin: 0 auto;

  @media screen and(min-width: $breakpoint-desktop) {
    width: 30%;
  }

  &__form {
    display: flex;
    flex-direction: column;

    &--save {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 20px;
      margin-bottom: 20px;
      background-color: $color-info-dark;
      border: none;
      padding: 20px 14px;
      color:white;
      border-radius: 2px;

      &-img {
        width: 24px;
        height: 24px;
      }
    }

    &--exercise {
      display: flex;
      flex-direction: column;
      padding-bottom: 20px;
      border-bottom: 1px solid $color-lightgrey;

      &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &-info {
        margin-bottom: 10px;

         &__text {
          font-weight: 500;
          margin-right: 70px;
         }
      }

      &--target {
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;

        &-setnumber {
          margin-left: 5px;
          font-size: $font-target;
          font-weight: 500;
        }

        &-reps {
          width: 40px;
          text-align: center;
          border: none;
          border-radius: 2px;
          padding: 5px;
          background-color: $color-lightgrey;
          font-size: $font-sm;
          font-weight: 600;
          margin-left: 10px;
          outline: none;
        }

        &-weight {
          width: 40px;
          text-align: center;
          border: none;
          padding: 5px;
          background-color: $color-lightgrey;
          font-size: $font-sm;
          font-weight: 600;
          margin-right: 18px;
          outline: none;
        }
      }
    }
  }
}
</style>
