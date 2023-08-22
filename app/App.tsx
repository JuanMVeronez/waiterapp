import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Main } from './src/Main';

// Adds intl polyfill because some Android devices not have this lib by default
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFontsLoaded) return null; // not render if fonts not rendereds;

  return (
    <>
      <Main />
      <StatusBar style="dark" />
    </>
  );
}
