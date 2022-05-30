import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UserListProvider } from './context/UserListContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserListProvider>
      <App />
    </UserListProvider>
  </React.StrictMode>
)
