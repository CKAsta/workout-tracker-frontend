<template>
  <div>
    <div class="edit-workout">
      <h1>{{ getWorkoutById.name }}</h1>
      <form class="edit-workout__form">
        <div
          v-for="(exerciseOnWorkout, exerciseIndex) in getWorkoutById.exercisesOnWorkouts"
          :id="exerciseOnWorkout.id"
          :key="exerciseOnWorkout.id"
          class="edit-workout__form--exercise"
        >
          <div :class="{ curtain: 'exercise-' + exerciseOnWorkout.id == openExerciseSelection && isExerciseSelectionActive}" />
          <div class="edit-workout__form--exercise-header">
            <h2 class="edit-workout__form--exercise-header__title">
              {{ exerciseOnWorkout.exercise.name }}
            </h2>
            <div class="edit-workout__form--exercise-header__actions">
              <img :src="require('~/assets/icons/edit_black.png')" class="edit-workout__form--exercise-header__open" @click="openExerciseSelection = 'exercise-' + exerciseOnWorkout.id, setExerciseSelectionActive()">
              <img :src="require('~/assets/icons/delete_black.png')" class="edit-workout__form--exercise-header__delete" @click="deleteExercise(exerciseOnWorkout.id, exerciseIndex)">
            </div>
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
          <div
            v-for="(setTarget, setIndex) in exerciseOnWorkout.setTargets"
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
            <img class="edit-workout__form--exercise--target-delete" :src="require('~/assets/icons/delete_white.png')" @click="deleteSet(exerciseIndex, setIndex)">
          </div>
          <button class="edit-workout__form--exercise--target-add" type="button" @click="addSet(exerciseIndex, exerciseOnWorkout.id)">
            Add Set
          </button>
        </div>
      </form>
      <div :class="{ curtain: openAddExerciseSelection}" />
      <ExerciseSelection
        :show-overlay="openAddExerciseSelection"
        :workout-id="parseInt($route.params.id)"
        @toggleShowOverlay="openAddExerciseSelection = false"
        @add-exercise="addExercise"
      />
      <button class="edit-workout__form--save" type="button" @click="openAddExerciseSelection = true">
        Add Exercise
      </button>
      <button class="edit-workout__form--save" @click="updateExercisesOnWorkouts(), addExercises()">
        <img class="edit-workout__form--save-img" :src="require('~/assets/icons/save_white.png')">
      </button>
    </div>
    <Navigation />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Navigation from '@/components/Navigation'
import ExerciseSelection from '@/components/ExerciseSelection'

export default {
  components: {
    Navigation,
    ExerciseSelection
  },
  middleware: ['authenticated'],
  data () {
    return {
      getWorkoutById: {},
      getAllExercises: {},
      isExerciseSelectionActive: false,
      openExerciseSelection: '',
      openAddExerciseSelection: false,
      addedSets: [],
      deletedSets: [],
      deletedExercises: [],
      addedExercises: []
    }
  },
  methods: {
    addSet (exerciseIndex, exerciseOnWorkoutId) {
      const set = {
        reps: 10,
        setNumber: this.getWorkoutById.exercisesOnWorkouts[exerciseIndex].setTargets.length + 1,
        weight: 50,
        rir: 2,
        exerciseId: parseInt(exerciseOnWorkoutId)
      }
      // Push to Object to see the added set
      this.getWorkoutById.exercisesOnWorkouts[exerciseIndex].setTargets.push(set)
      // Push to the list of added Sets
      this.addedSets.push(set)
    },
    deleteSet (exerciseIndex, setIndex) {
      const setId = this.getWorkoutById.exercisesOnWorkouts[exerciseIndex].setTargets[setIndex].id
      if (setId) {
        this.deletedSets.push(setId)
        this.getWorkoutById.exercisesOnWorkouts[exerciseIndex].setTargets.splice(setIndex, 1)
      } else {
        const setNumber = this.getWorkoutById.exercisesOnWorkouts[exerciseIndex].setTargets[setIndex].setNumber
        this.getWorkoutById.exercisesOnWorkouts[exerciseIndex].setTargets.splice(setIndex, 1)
        if (this.addedSets.length === 1) {
          this.addedSets.splice(0, 1)
        } else {
          for (let i = 0; i < this.addedSets.length; i++) {
            if (setNumber === this.addedSets[i].setNumber) {
              this.addedSets.splice(this.addedSets[i], 1)
            }
          }
        }
      }
      for (let i = setIndex; i < this.getWorkoutById.exercisesOnWorkouts[exerciseIndex].setTargets.length; i++) {
        this.getWorkoutById.exercisesOnWorkouts[exerciseIndex].setTargets[i].setNumber -= 1
      }
    },
    deleteExercise (exerciseId, exerciseIndex) {
      this.getWorkoutById.exercisesOnWorkouts.splice(exerciseIndex, 1)
      this.deletedExercises.push(exerciseId)
    },
    addExercise (value) {
      // Create a new exerciseOnWorkout
      const exerciseOnWorkout = {}
      exerciseOnWorkout.exercise = {}
      exerciseOnWorkout.setTargets = []
      exerciseOnWorkout.exercise.id = value

      // Get name of exercise
      this.getAllExercises.forEach((exercise) => {
        if (exercise.id === value) {
          exerciseOnWorkout.exercise.name = exercise.name
        }
      })

      this.getWorkoutById.exercisesOnWorkouts.push(exerciseOnWorkout)
      this.addedExercises.push(exerciseOnWorkout)
    },
    setExerciseSelectionActive () {
      this.isExerciseSelectionActive = true
    },
    setExerciseSelectionInactive () {
      this.isExerciseSelectionActive = false
    },
    async addExercises () {
      for (const addedExercise of this.addedExercises) {
        try {
          const { data: { addExercisesOnWorkouts: { id } } } = await this.$apollo.mutate({
            mutation: gql`
              mutation($exerciseId: ID!, $workoutId: ID!) {
                addExercisesOnWorkouts(exerciseId: $exerciseId, workoutId: $workoutId) {
                  id
                }
              }
            `,
            variables: {
              exerciseId: parseInt(addedExercise.exercise.id),
              workoutId: this.$route.params.id
            }
          })
          for (const setTarget of addedExercise.setTargets) {
            await this.$apollo.mutate({
              mutation: gql`
              mutation($exercisesOnWorkoutsId: ID!, $setNumber: Int!, $reps: Int!, $weight: Float!, $rir: Float!) {
                addSetTarget(exercisesOnWorkoutsId: $exercisesOnWorkoutsId, setNumber: $setNumber, reps: $reps, weight: $weight, rir: $rir) {
                  id
                }
              }
            `,
              variables: {
                exercisesOnWorkoutsId: id,
                setNumber: setTarget.setNumber,
                reps: setTarget.reps,
                weight: setTarget.weight,
                rir: parseFloat(setTarget.rir)
              }
            })
          }
        } catch (e) {
          console.log(e)
        }
      }
    },
    async updateExercisesOnWorkouts () {
      for (const deletedExercise of this.deletedExercises) {
        try {
          await this.$apollo.mutate({
            mutation: gql`
                mutation($exercisesOnWorkoutsId: ID!) {
                  deleteSetTargetByExercise(exercisesOnWorkoutsId: $exercisesOnWorkoutsId) {
                    exercisesOnWorkouts {
                      id
                    }
                  }
                }
              `,
            variables: {
              exercisesOnWorkoutsId: deletedExercise
            }
          })
        } catch (e) {
          console.error(e)
        }

        // Delete the ExerciseOnWorkout
        try {
          await this.$apollo.mutate({
            mutation: gql`
                mutation($id: ID!) {
                  deleteExercisesOnWorkouts(id: $id) {
                    workout {
                      id
                    }
                  }
                }
              `,
            variables: {
              id: deletedExercise
            }
          })
        } catch (e) {
          console.error(e)
        }
      }

      // Delete sets
      for (const deletedSet of this.deletedSets) {
        try {
          await this.$apollo.mutate({
            mutation: gql`
              mutation($id: ID!) {
                deleteSetTarget(id: $id) {
                  id
                }
              }
            `,
            variables: {
              id: deletedSet
            }
          })
        } catch (e) {
          console.error(e)
        }
      }

      // Send a request for all added Sets
      for (const addedSet of this.addedSets) {
        if (addedSet.exerciseId !== null) {
          try {
            await this.$apollo.mutate({
              mutation: gql`
              mutation($exercisesOnWorkoutsId: ID!, $setNumber: Int!, $reps: Int!, $weight: Float!, $rir: Float!) {
                addSetTarget(exercisesOnWorkoutsId: $exercisesOnWorkoutsId, setNumber: $setNumber, reps: $reps, weight: $weight, rir: $rir) {
                  id
                }
              }
            `,
              variables: {
                exercisesOnWorkoutsId: addedSet.exerciseId,
                setNumber: addedSet.setNumber,
                reps: addedSet.reps,
                weight: addedSet.weight,
                rir: parseFloat(addedSet.rir)
              }
            })
          } catch (e) {
            console.error(e)
          }
        }
      }

      // Update all existing Sets
      for (const exerciseOnWorkout of this.getWorkoutById.exercisesOnWorkouts) {
        try {
          for (const setTarget of exerciseOnWorkout.setTargets) {
            await this.$apollo.mutate({
              mutation: gql`
              mutation($id: ID!, $exercisesOnWorkoutsId: ID!, $setNumber: Int!, $reps: Int!, $weight: Float!, $rir: Float!) {
                updateSetTarget(id: $id, exercisesOnWorkoutsId: $exercisesOnWorkoutsId, setNumber: $setNumber, reps: $reps, weight: $weight, rir: $rir) {
                  id
                }
              }
            `,
              variables: {
                id: setTarget.id,
                exercisesOnWorkoutsId: exerciseOnWorkout.id,
                setNumber: setTarget.setNumber,
                reps: setTarget.reps,
                weight: setTarget.weight,
                rir: setTarget.rir
              }
            })
          }
        } catch (e) {
          console.error(e)
        }
      }

      for (const exerciseOnWorkout of this.getWorkoutById.exercisesOnWorkouts) {
        try {
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
        } catch (e) {
          console.error(e)
        }
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
  padding-bottom: 80px;

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
      cursor: pointer;

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

        &__open {
          width: 26px;
          height: 26px;
          cursor: pointer;
        }

        &__delete {
          width: 26px;
          height: 26px;
          cursor: pointer;
        }
      }

      &-selection {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 3;
        background-color: $color-white;
        width: 300px;
        border: none;
        border-radius: 3px;
        padding: 20px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        @media screen and (min-width: $breakpoint-desktop) {
          height: 300px;
        }

        &__list {
          border: none;
          margin-bottom: 10px;
          outline: none;
          padding: 20px 14px;
          background-color: $color-lightgrey;

          @media screen and (min-width: $breakpoint-desktop) {
            height: 250px;
          }

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
            padding: 20px 14px;
            font-size: $font-selectbox;
            cursor: pointer;
          }
        }
      }

      &-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        width: 260px;
        @media screen and(min-width: $breakpoint-desktop) {
          margin-right: 188px;
          width: 75%;
        }

        &__text {
          font-weight: 500;
        }
      }

      &--target {
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;

        &-field {
          display: flex;
          flex-direction: column;
        }

        &-label {
          font-size: $font-xs;
          color: $color-info;
          font-weight: 500;
          margin-bottom: 5px;
        }

        &-delete {
          background-color: $color-danger;
          width: 24px;
          height: 24px;
          border-radius: 2px;
          padding: 5px;
          cursor: pointer;
          align-self: flex-end;
        }

        &-setnumber {
          font-size: $font-selectbox;
          font-weight: 500;
          align-self: flex-end;
          margin-bottom: 10px;
        }

        &-input {
          width: 40px;
          text-align: center;
          border: none;
          border-radius: 2px;
          padding: 10px 7px;
          background-color: $color-lightgrey;
          font-size: $font-selectbox;
          font-weight: 600;
          outline: none;
        }

        &-add {
          margin-top: 5px;
          background-color: $color-info-dark;
          border: none;
          padding: 20px 14px;
          color:white;
          border-radius: 2px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
