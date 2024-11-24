# ✨ Klimate - Weather Application

![Screenshot (67)](https://github.com/user-attachments/assets/92c2ac25-9405-4ad1-ab76-08194e97db24)

- 🌟Tech Stack : Next JS, TypeScript
- ❄️ This project features weather & forecast of your current location.
- 🔑 **OpenWeatherMap** provides *API Endpoints* to fetch weather and forecast of different cities accross the world.
- 📊 **Recharts** have been used to represent next 24-hours temperatures graphically.
- 🔎 Ability to search weather of any city in the world.
- 🚀 **Tanstack Query** have been used to manage search history and adding a city to favorites.
- 🎨 **React JS**, **Shadcn UI** and **Tailwind CSS** were extensively used to make the UI reponsive and add Theme Toggler.
- 🔥 Deployed on **Vercel**



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
