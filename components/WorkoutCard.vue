<template>
  <section class="workout-card">
    <div class="workout-card__header">
      <h2 class="workout-card__name">
        {{ name }}
      </h2>
      <nuxt-link class="workout-card__edit" tag="img" :src="require('~/assets/icons/edit_white.png')" :to="{ name: 'Profile-Workouts-EditWorkout-id', params: { id: workoutId } }" />
    </div>
    <div class="workout-card__info">
      <img class="workout-card__info--image" :src="require('~/assets/icons/list_white.png')">
      <span class="workout-card__info--text">{{ numberOfExercises }} Exercises</span>
      <img class="workout-card__info--image" :src="require('~/assets/icons/time_white.png')">
      <span class="workout-card__info--text">{{ estimatedTime }} Minutes</span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Workout'
    },
    estimatedTime: {
      type: Number,
      default: 90
    },
    numberOfExercises: {
      type: Number,
      default: 8
    },
    workoutId: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
@import '../assets/_vars';
  .workout-card {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: $color-card;
    border-radius: 3px;
    color: $color-white;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
    }

    &__edit {
      width: 24px;
      height: 24px;
      margin: 0 10px 0 0;
    }

    &__name {
      margin: 0 0 0 10px;
      font-size: $font-card;
      font-weight: 500;
    }
    &__info {
      display: flex;
      margin: 0 0 10px 10px;

      &--image {
        width: 16px;
        height: 16px;
      }

      &--text {
        font-size: $font-xs;
        margin-left: 5px;
        margin-right: 20px;
      }
    }

  }
</style>
