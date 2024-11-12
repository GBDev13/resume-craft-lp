interface Window {
  umami: {
    track: (event: string, payload?: unknown) => void;
  };
}
