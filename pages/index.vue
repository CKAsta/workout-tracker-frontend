<template>
  <section class="workout-log">
    <h1 class="workout-log__header">
      Workout Log
    </h1>
    <div class="workout-log__buttons">
      <nuxt-link to="/login" class="workout-log__buttons--link">
        Login
      </nuxt-link>
      <nuxt-link to="/" class="workout-log__buttons--link">
        Register
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '../assets/_vars';

.workout-log {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__header {
    font-size: $font-lg;
    color: $color-text;
    @media screen and (max-width: $breakpoint-desktop) {
      font-size: $font-md;
    }
  }

  &__buttons {
    width: 235px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    @media screen and (max-width: $breakpoint-desktop) {
      flex-direction: column;
      align-items: center;
      height: 100px;
    }

    &--link {
      text-align: center;
      font-size: $font-sm;
      color: $color-text;
      width: 90px;
      border: 1px solid $color-info;
      border-radius: 3px;
      padding: 12px 7px;
      background-color: $color-info-light;
      text-decoration: none;
      font-weight: 500;
      @media screen and (max-width: $breakpoint-desktop) {
        width: 250px;
      }

      &:hover {
        background-color: $color-info;
        color: $color-white;
      }
    }
  }
}
</style>
