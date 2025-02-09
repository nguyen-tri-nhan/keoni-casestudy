# Keoni.ai

<!---toc start-->

* [Keoni.ai](#keoniai)
  * [Approach](#approach)
  * [Static site](#static-site)
  * [Challenges faced](#challenges-faced)
    * [UI](#ui)
    * [Design](#design)
* [React + TypeScript + Vite](#react--typescript--vite)
  * [Expanding the ESLint configuration](#expanding-the-eslint-configuration)

<!---toc end-->

## Approach
- Firstly, in `Which describe you?` sections, i used to use state to handle changes to make decision for next component. But is make `OnboardingForm` so long and complicated. So I use `redux` to store thoose state.
- This redux is from the boilerplate, it take about an hour to config and make sure it run.
- Every component I've seperated it as small as possible, if you need it, it's your.


## Static site
https://keoni-casestudy.onrender.com

## Challenges faced
### UI
- No reusable component provided --> I've built from scratch with Vite and React-TS. 
- In the last hour, I saw that the Quick start component is more complexity than the design expected. --> I've not implement it.
- Take time to explore design, some component make developers confused. --> I have added comment in Figma and have response from designer (Respected ++).
- I have challenged myself to finish this test in my **8 hours** actively. So this is all of my commision include devops and deployment and which component I have not implemented yet, I mark it comming soon.

### Design
- In `Which describe you` label, first page have info tooltip but other page not. No provide tooltip text. (The designer allowed me to ignore it <3.)

- In Radio button, not given what happens if user click to the container. I code as the presentation page provided.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
