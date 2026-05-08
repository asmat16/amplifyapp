# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project State

This repository is in its earliest stage — it has a single initial commit containing only a README, LICENSE, and `.gitignore`. No application code, package manager files, or build configuration exists yet.

The README describes the intent as "my first react app", suggesting this will become a React application (likely deployed via AWS Amplify based on the repo name).

## Notable Discrepancy

The current `.gitignore` is Python-oriented (covers `__pycache__`, `.venv`, Django/Flask artifacts, etc.) and does not match the stated React intent. Before adding source code, replace it with a Node.js/React-appropriate `.gitignore`.

## Expected Setup (once scaffolded)

For a standard React app bootstrapped with Create React App or Vite, typical commands will be:

```bash
npm install       # install dependencies
npm start         # start dev server
npm run build     # production build
npm test          # run tests
```

For an AWS Amplify deployment:

```bash
amplify init      # initialize Amplify project
amplify push      # deploy backend resources
amplify publish   # deploy frontend + backend
```

This section should be updated once the project is scaffolded with actual tooling.
