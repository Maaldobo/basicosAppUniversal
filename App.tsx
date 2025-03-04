import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import HomeScreen from './src/components/screens/HomeScreen';

const queryClient = new QueryClient();

const App: React.FC = () => {
  // Componente raíz de la aplicación, con react-query para manejo de caché y datos
  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  );
};

export default App;
