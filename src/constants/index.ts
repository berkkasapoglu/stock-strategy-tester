const development = {
  url: import.meta.env.VITE_API_URL,
};

const production = {
  url: import.meta.env.VITE_API_URL,
};

export const config =
  import.meta.env.MODE === 'development' ? development : production;
