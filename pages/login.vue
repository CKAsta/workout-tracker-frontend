<template>
  <section class="login">
    <h1 class="login__header">
      Login
    </h1>
    <form class="login__form" @submit.prevent="login()">
      <input
        id="email"
        v-model="form.email"
        class="login__form--input"
        type="text"
        placeholder="E-Mail"
      >
      <input
        id="password"
        v-model="form.password"
        class="login__form--input"
        type="password"
        placeholder="Password"
      >
      <div>
        <button
          type="submit"
          class="login__form--button"
        >
          Sign In
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  async mounted () {
    await this.$apolloHelpers.onLogout()
  },
  methods: {
    async login () {
      const credentials = this.form
      try {
        const { data: { login: { token } } } = await this.$apollo.mutate({
          mutation: gql`
            mutation($email: String!, $password: String!) {
              login(email: $email, password: $password) {
                token
              }
            }
          `,
          variables: credentials
        })
        await this.$apolloHelpers.onLogin(token)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/_vars';

.login {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__header {
    font-size: $font-md;
  }

  &__form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    &--input {
      width: 250px;
      margin-top: 10px;
      padding: 12px 6px;
      border: 2px solid $color-text-light;
      border-radius: 2px;
    }

    &--button {
      width: 266px;
      margin-top: 5px;
      padding: 12px 6px;
      border: 2px solid $color-info;
      border-radius: 2px;
      background-color: $color-info-light;
      font-size: $font-sm;
      font-weight: 600;g

      &:hover {
        background-color: $color-info;
        color: $color-white;
        cursor: pointer;
      }
    }
  }
}
</style>
