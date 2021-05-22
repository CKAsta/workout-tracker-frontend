<template>
  <div class="navigation">
    <nuxt-link class="navigation__link" tag="img" :src="require('~/assets/icons/account_white.png')" to="/profile" />
    <nuxt-link class="navigation__link" tag="img" :src="require('~/assets/icons/workout_list_white.png')" to="/profile/workouts" />
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
  position: sticky;
  bottom: 0;

  &__link {
    width: 28px;
    height: 28px;
  }
}
</style>
