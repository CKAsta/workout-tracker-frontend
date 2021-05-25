<template>
  <div class="navigation">
    <nuxt-link class="navigation__link" tag="img" :src="require('~/assets/icons/account_white.png')" to="/profile" />
    <nuxt-link class="navigation__link" tag="img" :src="require('~/assets/icons/workout_list_white.png')" to="/profile/workouts" />
    <nuxt-link class="navigation__link" tag="img" :src="require('~/assets/icons/history_white.png')" to="/profile/history" />
    <img class="navigation__link" :src="require('~/assets/icons/logout_white.png')" @click="onLogout()">
  </div>
</template>

<script>
export default {
  methods: {
    async onLogout () {
      await this.$apolloHelpers.onLogout()
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss">
@import '../assets/_vars';

.navigation {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: $color-nav;
  position: fixed;
  bottom: 0;

  @media screen and(min-width: $breakpoint-desktop) {
    left: 0;
    width: 80px;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
  }

  &__link {
    width: 28px;
    height: 28px;
    @media screen and(min-width: $breakpoint-desktop) {
      margin-top: 50px;
    }
  }
}
</style>
