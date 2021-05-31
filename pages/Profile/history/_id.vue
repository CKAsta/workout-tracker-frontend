<template>
  <div>
    <section class="log-detail">
      <div v-for="exercise in Object.keys(logEntryList)" :key="exercise">
        <h2 class="log-detail__title">
          {{ exercise }}
        </h2>
        <div class="log-detail__info" />
        <div v-for="logEntry in logEntryList[exercise]" :key="logEntry.name" class="log-detail__detail">
          <span class="log-detail__detail--setNumber">{{ logEntry.setNumber }}</span>
          <div class="log-detail__detail--field">
            <span class="log-detail__detail--label">Reps</span>
            <span class="log-detail__detail--entry">{{ logEntry.reps }}</span>
          </div>
          <div class="log-detail__detail--field">
            <span class="log-detail__detail--label">Weigth</span>
            <span class="log-detail__detail--entry">{{ logEntry.weight }}</span>
          </div>
          <div class="log-detail__detail--field">
            <span class="log-detail__detail--label">RIR</span>
            <span class="log-detail__detail--entry"> {{ logEntry.rir }}</span>
          </div>
        </div>
      </div>
    </section>
    <Navigation />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Navigation from '@/components/Navigation'

export default {
  components: {
    Navigation
  },
  middleware: ['authenticated'],
  data () {
    return {
      getLogById: {}
    }
  },
  computed: {
    logEntryList () {
      if (!this.getLogById.logEntries) {
        return []
      }
      const exercises = {}
      for (let i = 0; i < this.getLogById.logEntries.length; i++) {
        const key = this.getLogById.logEntries[i].exercisesOnWorkouts.exercise.name
        exercises[key] = []
      }
      for (let i = 0; i < this.getLogById.logEntries.length; i++) {
        const key = this.getLogById.logEntries[i].exercisesOnWorkouts.exercise.name
        exercises[key].push({
          setNumber: this.getLogById.logEntries[i].setNumber,
          reps: this.getLogById.logEntries[i].reps,
          weight: this.getLogById.logEntries[i].weight,
          rir: this.getLogById.logEntries[i].rir
        })
      }
      return exercises
    }
  },
  apollo: {
    getLogById: {
      query: gql`
        query getLogById($id: ID!){
          getLogById(id: $id){
            id
            logEntries {
              id
              exercisesOnWorkouts {
                id
                exercise {
                  id
                  name
                }
              }
              setNumber
              reps
              weight
              rir
            }
          }
        }
      `,
      variables () {
        return {
          id: this.$route.params.id
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/_vars';

.log-detail {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 80px;

  &__info {
    display: flex;
    justify-content: space-between;
    margin-right: 80px;
    font-weight: 500;
  }

  &__detail {
    display: flex;
    justify-content: space-between;
    margin-right: 80px;
    margin-bottom: 10px;

    &--setNumber {
      font-weight: 500;
      align-self: flex-end;
      margin-bottom: 10px;
      font-size: $font-selectbox;
    }

    &--field {
      display: flex;
      flex-direction: column;
    }

    &--label {
      font-size: $font-xs;
      color: $color-info;
      font-weight: 500;
    }

    &--entry {
      width: 40px;
      text-align: center;
      border: none;
      border-radius: 2px;
      padding: 10px 7px;
      background-color: $color-lightgrey;
      font-size: $font-selectbox;
      font-weight: 600;
      outline: none;
    }
  }
}
</style>
