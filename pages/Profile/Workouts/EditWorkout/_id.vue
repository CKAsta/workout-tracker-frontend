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
          <div :class="{ curtain: 'exercise-' + exerciseOnWorkout.id == openExerciseSelection && isExerciseSelectionActive}" />
          <div class="edit-workout__form--exercise-header">
            <h2 class="edit-workout__form--exercise-header__title">
              {{ exerciseOnWorkout.exercise.name }}
            </h2>
            <img :src="require('~/assets/icons/edit_black.png')" class="edit-workout__form--exercise-header__open" @click="openExerciseSelection = 'exercise-' + exerciseOnWorkout.id, setExerciseSelectionActive()">
          </div>
          <div
            v-show="'exercise-' + exerciseOnWorkout.id == openExerciseSelection && isExerciseSelectionActive"
            class="edit-workout__form--exercise-selection"
          >
            <select
              :id="'exercise-' + exerciseOnWorkout.id"
              v-model="exerciseOnWorkout.exercise"
              class="edit-workout__form--exercise-selection__list"
              type="text"
              :size="getAllExercises.length"
            >
              <option v-for="exercise in getAllExercises" :key="exercise.id" class="edit-workout__form--exercise-selection__list-item" :value="exercise">
                {{ exercise.name }}
              </option>
            </select>
            <button class="edit-workout__form--exercise-selection__list-close" type="button" @click="setExerciseSelectionInactive()">
              Close
            </button>
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
          <button class="edit-workout__form--exercise--target-add" type="button" @click="addSet(exerciseOnWorkout.id, exerciseOnWorkout.setTargets.length + 1)">
            Add Set
          </button>
        </div>
      </form>
      <div :class="{ curtain: openAddExerciseSelection}" />
      <ExerciseSelection
        :show-overlay="openAddExerciseSelection"
        :workout-id="parseInt($route.params.id)"
        @toggleShowOverlay="openAddExerciseSelection = false"
      />
      <button class="edit-workout__form--save" type="button" @click="openAddExerciseSelection = true">
        Add Exercise
      </button>
      <button class="edit-workout__form--save" @click="updateExercisesOnWorkouts()">
        <img class="edit-workout__form--save-img" :src="require('~/assets/icons/save_white.png')">
      </button>
    </div>
    <Navigation />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Navigation from '@/components/navigation'
import ExerciseSelection from '@/components/exerciseSelection'

export default {
  components: {
    Navigation,
    ExerciseSelection
  },
  data () {
    return {
      getWorkoutById: {},
      getAllExercises: {},
      isExerciseSelectionActive: false,
      openExerciseSelection: '',
      openAddExerciseSelection: false
    }
  },
  methods: {
    async addSet (exerciseOnWorkoutId, setNumber) {
      try {
        await this.$apollo.mutate({
          mutation: gql`
              mutation($exercisesOnWorkoutsId: ID!, $setNumber: Int!, $reps: Int!, $weight: Int!) {
                addSetTarget(exercisesOnWorkoutsId: $exercisesOnWorkoutsId, setNumber: $setNumber, reps: $reps, weight: $weight) {
                  id
                }
              }
            `,
          variables: {
            exercisesOnWorkoutsId: exerciseOnWorkoutId,
            setNumber,
            reps: 10,
            weight: 50
          }
        })
      } catch (e) {
        console.error(e)
      }
      window.location.reload(true)
    },
    setExerciseSelectionActive () {
      this.isExerciseSelectionActive = true
    },
    setExerciseSelectionInactive () {
      this.isExerciseSelectionActive = false
    },
    async updateExercisesOnWorkouts () {
      try {
        for (const exerciseOnWorkout of this.getWorkoutById.exercisesOnWorkouts) {
          await this.$apollo.mutate({
            mutation: gql`
              mutation($id: ID!, $exerciseId: ID!, $workoutId: ID!) {
                updateExercisesOnWorkouts(id: $id, exerciseId: $exerciseId, workoutId: $workoutId) {
                  id
                }
              }
            `,
            variables: {
              id: exerciseOnWorkout.id,
              exerciseId: exerciseOnWorkout.exercise.id,
              workoutId: this.$route.params.id
            }
          })
        }
      } catch (e) {
        console.error(e)
      }

      try {
        for (const exerciseOnWorkout of this.getWorkoutById.exercisesOnWorkouts) {
          for (const setTarget of exerciseOnWorkout.setTargets) {
            await this.$apollo.mutate({
              mutation: gql`
              mutation($id: ID!, $exercisesOnWorkoutsId: ID!, $setNumber: Int!, $reps: Int!, $weight: Int!) {
                updateSetTarget(id: $id, exercisesOnWorkoutsId: $exercisesOnWorkoutsId, setNumber: $setNumber, reps: $reps, weight: $weight) {
                  id
                }
              }
            `,
              variables: {
                id: setTarget.id,
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
      this.$nuxt.refresh()
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
    },
    getAllExercises: {
      query: gql`
        query getAllExercises {
          getAllExercises {
            id
            name
          }
        }
      `
    }
  }
}
</script>

<style lang="scss">
@import '../../../../assets/_vars';

.edit-workout {
  width: 90%;
  margin: 0 auto;

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
      background-color: $color-success;
      border: none;
      padding: 8px 5px;
      color:white;
      border-radius: 2px;

      &-img {
        width: 20px;
        height: 20px;
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

        &__open {
          width: 24px;
          height: 24px;
        }
      }

      &-selection {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 3;
        background-color: $color-white;
        height: 300px;
        width: 300px;
        border: none;
        border-radius: 3px;
        padding: 20px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &__list {
          border: none;
          margin-bottom: 10px;
          height: 250px;
          outline: none;

          &-item {
            padding: 5px 7px;
            border-radius: 2px;
            font-size: $font-selectbox;
          }

          &-close {
            border: none;
            border-radius: 3px;
            background-color: $color-danger;
            color: white;
            padding: 10px;
            font-size: $font-selectbox;
          }
        }
      }

      &-info {
        margin-bottom: 10px;

         &__text {
          font-weight: 500;
          margin-right: 40px;
         }
      }

      &--target {
        display: flex;
        margin-bottom: 12px;

        &-setnumber {
          margin-right: 15px;
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
          margin-right: 15px;
          margin-left: 30px;
          font-size: $font-sm;
          font-weight: 600;
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
          margin-left: 20px;
          outline: none;
        }

        &-add {
          margin-top: 5px;
          background-color: $color-success;
          border: none;
          padding: 8px 5px;
          color:white;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>
