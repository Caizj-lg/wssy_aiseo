// Global state management placeholder
// You can use Redux, Zustand, or Context API here

interface AppState {
  user: {
    name: string;
    role: string;
  } | null;
  theme: 'light' | 'dark';
}

// Example initial state
export const initialState: AppState = {
  user: null,
  theme: 'light',
};

// Add state management implementation here
// For now, this is just a placeholder
