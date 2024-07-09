import { CssBaseline } from '@mui/material';
import Onboarding from './pages/OnboardingPage'
import AppProvider from './provider/AppProvider';

function App() {
  return (
    <AppProvider>
      <CssBaseline />
      <Onboarding />
    </AppProvider>
  );
}

export default App;
