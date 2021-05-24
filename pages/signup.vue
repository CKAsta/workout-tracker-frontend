<template>
  <section class="signup">
    <h1 class="signup__header">
      Register
    </h1>
    <form class="signup__form" @submit.prevent="signup()">
      <input
        id="name"
        v-model="form.name"
        class="signup__form--input"
        type="text"
        placeholder="Name"
      >
      <input
        id="email"
        v-model="form.email"
        class="signup__form--input"
        type="text"
        placeholder="E-Mail"
      >
      <input
        id="password"
        v-model="form.password"
        class="signup__form--input"
        type="password"
        placeholder="Password"
      >
      <div>
        <button
          type="submit"
          class="signup__form--button"
        >
          Register
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
        name: '',
        email: '',
        password: ''
      }
    }
  },
  async mounted () {
    await this.$apolloHelpers.onLogout()
  },
  methods: {
    async signup () {
      const credentials = this.form
      try {
        const { data: { signup: { token } } } = await this.$apollo.mutate({
          mutation: gql`
            mutation($name: String!, $email: String!, $password: String!) {
              signup(name: $name, email: $email, password: $password) {
                token
              }
            }
          `,
          variables: credentials
        })
        await this.$apolloHelpers.onLogin(token)
        this.$router.push('/profile')
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/_vars';

body {
  padding-bottom: 0;
}

.signup {
  width: 100%;
  height: 90vh;
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
    margin-bottom: 100px;

    &--input {
      width: 250px;
      background-color: $color-lightgrey;
      margin-top: 10px;
      padding: 20px 14px;
      border: none;
      border-radius: 2px;
      outline: none;
    }

    &--button {
      width: 278px;
      margin-top: 20px;
      padding: 20px 14px;
      border: none;
      border-radius: 2px;
      background-color: $color-card;
      font-size: $font-sm;
      font-weight: 600;
      color: $color-white;
      font-size: $font-sm;

      &:hover {
        background-color: $color-nav;
        color: $color-white;
        cursor: pointer;
      }
    }
  }
}
</style>
