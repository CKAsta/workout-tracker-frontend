import gql from 'graphql-tag'

export default async function ({ app, redirect }) {
  const hasToken = !!app.$apolloHelpers.getToken()
  if (!hasToken) {
    return redirect('/login')
  }
  try {
    const { data: { me } } = await app.apolloProvider.defaultClient.query({
      query: gql`
        query {
          me{
            id
            email
            name
          }
        }
      `
    })
    if (!Object.keys(me).length) {
      return redirect('/login')
    }
  } catch (e) {
    try {
      return redirect('/login')
    } catch (e) {
      console.error(e)
    }
  }
}
