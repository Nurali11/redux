import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GlobalContext } from './context/Context.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <GlobalContext>
      <App />
    </GlobalContext>,
  </Provider>
)
