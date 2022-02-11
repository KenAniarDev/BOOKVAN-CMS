import './App.css';
import { useRoutes } from 'react-router-dom';
import useRouteHooks from './hooks/useRouteHooks';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const mdTheme = createTheme();
  const routesHandler = useRouteHooks();
  const MainContent = useRoutes(routesHandler);

  return <ThemeProvider theme={mdTheme}>{MainContent}</ThemeProvider>;
}

export default App;
