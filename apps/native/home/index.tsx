import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';
import ctx from './ctx';

// Must be exported or Fast Refresh won't update the context
export function App() {
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
