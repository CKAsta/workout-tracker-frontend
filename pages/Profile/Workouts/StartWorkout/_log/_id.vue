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
          <div
            v-for="setTarget in exerciseOnWorkout.setTargets"
            :key="setTarget.id"
            class="edit-workout__form--exercise--target"
          >
            <span class="edit-workout__form--exercise--target-setnumber">{{ setTarget.setNumber }}</span>
            <div class="edit-workout__form--exercise--target-field">
              <label class="edit-workout__form--exercise--target-label">Reps</label>
              <input
                v-model.number="setTarget.reps"
                type="text"
                placeholder="Reps"
                class="edit-workout__form--exercise--target-input"
              >
            </div>
            <div class="edit-workout__form--exercise--target-field">
              <label class="edit-workout__form--exercise--target-label">Weight</label>
              <input
                v-model.number="setTarget.weight"
                type="text"
                placeholder="Weight"
                class="edit-workout__form--exercise--target-input"
              >
            </div>
            <div class="edit-workout__form--exercise--target-field">
              <label class="edit-workout__form--exercise--target-label">RIR</label>
              <input
                v-model.number="setTarget.rir"
                type="text"
                placeholder="RIR"
                class="edit-workout__form--exercise--target-input"
              >
            </div>
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
              mutation($logId: ID!, $exercisesOnWorkoutsId: ID!, $setNumber: Int!, $reps: Int!, $weight: Float!, $rir: Float!) {
                addLogEntry(logId: $logId, exercisesOnWorkoutsId: $exercisesOnWorkoutsId, setNumber: $setNumber, reps: $reps, weight: $weight, rir: $rir) {
                  id
                }
              }
            `,
              variables: {
                logId: this.$route.params.log,
                exercisesOnWorkoutsId: exerciseOnWorkout.id,
                setNumber: parseInt(setTarget.setNumber),
                reps: parseInt(setTarget.reps),
                weight: setTarget.weight,
                rir: setTarget.rir
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
                rir
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
  padding-bottom: 80px;

  @media screen and(min-width: $breakpoint-desktop) {
    width: 30%;
    padding-bottom: 80px;
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
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

         &__text {
          font-weight: 500;
         }
      }

      &--target {
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
        margin-right: 20px;

        &-setnumber {
          font-size: $font-selectbox;
          font-weight: 500;
        }

        &-reps {
          width: 40px;
          text-align: center;
          border: none;
          border-radius: 2px;
          background-color: $color-lightgrey;
          font-size: $font-sm;
          font-weight: 600;
          outline: none;
        }

        &-weight {
          width: 40px;
          text-align: center;
          border: none;

          background-color: $color-lightgrey;
          font-size: $font-sm;
          font-weight: 600;
          outline: none;
        }
      }
    }
  }
}
</style>
