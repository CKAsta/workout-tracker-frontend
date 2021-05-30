<template>
  <div>
    <section class="history">
      <h1 class="history__title">
        History
      </h1>
      <div v-if="sortedLogs">
        <LogCard
          v-for="log in sortedLogs"
          :key="log.id"
          :name="log.name"
          :date="months[new Date(log.date).getMonth()] + ' ' + new Date(log.date).getDate()"
          :log-id="parseInt(log.id)"
          class="history__cards"
        />
      </div>
    </section>
    <Navigation />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import LogCard from '@/components/LogCard'
import Navigation from '@/components/Navigation'

export default {
  components: {
    LogCard,
    Navigation
  },
  filters: {
    sortByDate (value) {
      if (!value) { return '' }
    }
  },
  middleware: ['authenticated'],
  data () {
    return {
      me: {},
      componentLoaded: false,
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
    }
  },
  computed: {
    sortedLogs () {
      if (!this.me.workouts) {
        return []
      }
      const logs = []
      this.me.workouts.forEach((workout) => {
        workout.logs.forEach((log) => {
          log.name = log.workout.name
          logs.push(log)
        })
      })

      logs.sort(function (log1, log2) {
        return new Date(log2.date) - new Date(log1.date)
      })
      return logs
    }
  },
  apollo: {
    me: {
      query: gql`
        query{
        me{
          id
          workouts {
            id
            logs {
              id
              date
              workout {
                id
                name
                exercisesOnWorkouts {
                  id
                }
              }
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

.history {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 80px;

  @media screen and(min-width: $breakpoint-desktop) {
    width: 30%;
    padding-bottom: 0px;
  }

  &__title {
    color: $color-text;
  }

  &__cards {
    margin-bottom: 10px;
  }
}

</style>
