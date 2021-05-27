<template>
  <div :class="{ hide: !showOverlay}" class="exercise-selection">
    <form>
      <select
        v-model="exerciseId"
        class="exercise-selection__list"
        type="text"
        :size="getAllExercises.length"
      >
        <option v-for="exercise in getAllExercises" :key="exercise.id" class="exercise-selection__list-item" :value="exercise.id">
          {{ exercise.name }}
        </option>
      </select>
      <button class="exercise-selection__list-add" type="submit" @click="addExerciseOnWorkout()">
        Add
      </button>
    </form>
    <button class="exercise-selection__list-close" type="button" @click="toggleShowOverlay()">
      Close
    </button>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  props: {
    showOverlay: {
      type: Boolean,
      default: false
    },
    workoutId: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      getAllExercises: {},
      exerciseId: null
    }
  },
  methods: {
    toggleShowOverlay () {
      this.$emit('toggleShowOverlay')
    },
    async addExerciseOnWorkout () {
      try {
        await this.$apollo.mutate({
          mutation: gql`
              mutation($exerciseId: ID!, $workoutId: ID!) {
                addExercisesOnWorkouts(exerciseId: $exerciseId, workoutId: $workoutId) {
                  id
                }
              }
            `,
          variables: {
            exerciseId: this.exerciseId,
            workoutId: this.workoutId
          }
        })
        await this.$nuxt.refresh()
      } catch (e) {
        console.error(e)
      }
    }
  },
  apollo: {
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
@import '../assets/_vars';

.hide {
  display: none !important;
}

.exercise-selection {
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
    height: 380px;
  }

  &__list {
    width: 100%;
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

    &-add {
      width: 100%;
      border: none;
      border-radius: 3px;
      background-color: $color-success;
      color: white;
      padding: 20px 14px;
      font-size: $font-selectbox;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
}
</style>
