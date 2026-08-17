import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// No StrictMode: its double-invoked effects revert GSAP timelines mid-flight and
// leave split lines parked at their from-state.
createRoot(document.getElementById('root')!).render(<App />);
