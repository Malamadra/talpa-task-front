import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import App from 'App'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloProviderHooks } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const GlobalStyle = createGlobalStyle`  
  html {
    font-size: 100%;
  }
  
  body {
    a {
      text-decoration: none;
    }
  }
  
  body, html {
    height: 100%;
    margin: 0;
    padding: 0;
  }  
  
  #root {
    min-height: 100%;
  }
`

const Root = (
  <>
    <GlobalStyle />
    <ApolloProvider client={client}>
      <ApolloProviderHooks client={client}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <App />
        </MuiPickersUtilsProvider>
      </ApolloProviderHooks>
    </ApolloProvider>
  </>
)

ReactDOM.render(Root, document.getElementById('root'))
