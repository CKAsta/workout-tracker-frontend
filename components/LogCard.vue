<template>
  <section class="log-card" @click="$router.push({ name: 'Profile-history-id', params: { id: logId } })">
    <div class="log-card__header">
      <h2 class="log-card__name">
        {{ name }} from {{ date }}
      </h2>
    </div>
    <div class="log-card__info">
      <img class="log-card__info--image" :src="require('~/assets/icons/list_white.png')">
      <span class="log-card__info--text">{{ numberOfExercises }} Exercises</span>
      <img class="log-card__info--image" :src="require('~/assets/icons/time_white.png')">
      <span class="log-card__info--text">{{ trainingTime }} Minutes</span>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'

export default {
  props: {
    name: {
      type: String,
      default: 'Workout'
    },
    trainingTime: {
      type: Number,
      default: 90
    },
    numberOfExercises: {
      type: Number,
      default: 8
    },
    date: {
      type: String,
      default: '01.01.2000'
    },
    logId: {
      type: Number,
      default: 0
    }
  },
  apollo: {
    me: {
      query: gql`
        query {
          me {
            id
            email
            name
            workouts{
              id
              name
            }
          }
        }
      `
    }
  }
}
</script>

<style lang="scss">
@import '../assets/_vars';
  .log-card {
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
