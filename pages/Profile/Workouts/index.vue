<template>
  <div>
    <div :class="{ curtain: isOverlayActive}" />
    <div v-show="isOverlayActive" class="workouts__create">
      <h2 class="workouts__create--title">
        Enter Workout Name
      </h2>
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
        <button class="workouts__create--buttons__cancel" @click="closeOverlay()">
          Cancel
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
import Navigation from '@/components/navigation'
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
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;

  &__header {
    font-size: $font-md;
    color: $color-text;
    margin: 20px 0 0 0;
  }

  &__cards {
    z-index: 1;
    margin-top: 15px;
  }

  &__add {
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    margin-top: 15px;
    color: $color-white;
    font-size: $font-md;
    background-color: $color-nav;
    border: none;
    border-radius: 50%;
    align-self: center;

    &--icon {
      width: 32px;
      height: 32px;
    }
  }

  &__create {
    height: 170px;
    width: 300px;
    z-index: 3;
    background-color: $color-white;
    border-radius: 2px;
    font-size: $font-sm;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &--title {
      margin: 0;
    }
    &--form {
      &__input {
        width: 250px;
        margin-top: 10px;
        padding: 12px 6px;
        border: 1px solid $color-card;
        border-radius: 2px;
      }
    }

    &--buttons {
      width: 250px;
      display: flex;
      justify-content: space-evenly;
      margin-top: 20px;

      &__create {
        background-color: $color-success;
        border-radius: 3px;
        border: none;
        padding: 10px 15px;
        font-size: $font-xs;
        color: $color-white;
      }

      &__cancel {
        background-color: $color-danger;
        border-radius: 3px;
        border: none;
        padding: 10px 15px;
        font-size: $font-xs;
        color: $color-white;
      }
    }
  }
}

.curtain {
  content: " ";
  z-index: 2;
  display: block;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
}
</style>
