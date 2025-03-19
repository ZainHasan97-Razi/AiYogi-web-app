import AppRoutes from './routes';

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>

        <AppRoutes />
      </QueryClientProvider>

    </div>
  );
}

export default App;