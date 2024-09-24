import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store.js'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={false} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
)
