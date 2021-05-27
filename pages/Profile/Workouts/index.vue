<template>
  <div>
    <div :class="{ curtain: isOverlayActive}" />
    <div v-show="isOverlayActive" class="workouts__create">
      <button class="workouts__create--buttons__close" @click="closeOverlay()">
        <img :src="require('~/assets/icons/close_black.png')" class="workouts__create--buttons__close-img">
      </button>
      <div class="workouts__create-header">
        <h2 class="workouts__create--title">
          Enter Workout Name
        </h2>
      </div>
      <form class="workouts__create--form">
        <input
          id="name"
          v-model="form.name"
          class="workouts__create--form__input"
          type="text"
          placeholder="Name"
        >
      </form>
      <div class="workouts__create--buttons">
        <button class="workouts__create--buttons__create" @click="createWorkout()">
          Create
        </button>
      </div>
    </div>
    <div class="workouts">
      <h1 class="workouts__header">
        Workouts
      </h1>
      <WorkoutCard
        v-for="workout in me.workouts"
        :key="workout.id"
        :name="workout.name"
        :estimated-time="workout.exercisesOnWorkouts.length * 10"
        :number-of-exercises="workout.exercisesOnWorkouts.length"
        :workout-id="parseInt(workout.id)"
        :exercise-ids="fillExerciseIds(workout.exercisesOnWorkouts)"
        class="workouts__cards"
      />
      <button class="workouts__add" @click="openOverlay">
        <img class="workouts__add--icon" :src="require('~/assets/icons/add_white.png')">
      </button>
    </div>
    <Navigation />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Navigation from '@/components/Navigation'
import WorkoutCard from '@/components/WorkoutCard'

export default {
  components: {
    Navigation,
    WorkoutCard
  },
  middleware: ['authenticated'],
  data () {
    return {
      me: {},
      isOverlayActive: false,
      form: {
        name: ''
      }
    }
  },
  methods: {
    fillExerciseIds (exerciseList) {
      const exerciseIds = []
      exerciseList.forEach(exercise => exerciseIds.push(exercise.id))
      return exerciseIds
    },
    openOverlay () {
      this.isOverlayActive = true
    },
    closeOverlay () {
      this.isOverlayActive = false
    },
    async createWorkout () {
      const info = this.form
      try {
        const { data: { addWorkout: { id } } } = await this.$apollo.mutate({
          mutation: gql`
            mutation($name: String!) {
              addWorkout(name: $name) {
                id
              }
            }
          `,
          variables: info
        })
        this.$router.push({ name: 'Profile-Workouts-EditWorkout-id', params: { id } })
      } catch (e) {
        console.error(e)
      }
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

.workouts {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;

  @media screen and(min-width: $breakpoint-desktop) {
    width: 30%;
  }

  &__header {
    font-size: $font-md;
    color: $color-text;
    margin: 20px 0 0 0;
  }

  &__cards {
    margin-top: 15px;
  }

  &__add {
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    margin-top: 25px;
    color: $color-white;
    font-size: $font-md;
    background-color: $color-info;
    border: none;
    border-radius: 50%;
    align-self: center;
    margin-bottom: 25px;
    cursor: pointer;

    &:hover {
      background-color: $color-info-dark;
    }

    &--icon {
      width: 32px;
      height: 32px;
    }
  }

  &__create {
    height: 250px;
    width: 325px;
    z-index: 3;
    background-color: $color-white;
    border-radius: 3px;
    font-size: $font-sm;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 0 15px 0px;

    &-header {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    &--form {
      &__input {
        width: 250px;
        margin-top: 10px;
        padding: 20px 14px;
        border: none;
        background-color: $color-lightgrey;
        border-radius: 2px;
        outline: none;
      }
    }

    &--buttons {
      width: 278px;
      display: flex;
      justify-content: space-evenly;
      margin-top: 20px;

      &__create {
        width: 278px;
        background-color: $color-success;
        border-radius: 3px;
        border: none;
        padding: 20px 14px;
        font-size: $font-sm;
        color: $color-white;
      }

      &__close {
        border-radius: 50%;
        width: 24px;
        height: 24px;
        border: none;
        font-size: $font-xs;
        color: $color-white;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: flex-end;
        margin-right: 20px;
        background-color: $color-lightgrey;

        &-img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}

.curtain {
  content: " ";
  z-index: 2;
  display: block;
  position: absolute;
  height: 110vh;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
}
</style>
