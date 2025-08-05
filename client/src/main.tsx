import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import Store from './store/index.ts';

interface IStore {
  store: Store;
};

const store = new Store();
export const Context = createContext<IStore>({
  store
});

createRoot(document.getElementById('root')!).render(
  <Context.Provider value={{
    store
    }}>
    <StrictMode>
      <App />
    </StrictMode>
  </Context.Provider>,
)
