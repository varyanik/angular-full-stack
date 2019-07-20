# Angular Full Stack

> This project was generated using [Nx](https://nx.dev).

## Quick Start

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, .etc as well as the devtools to test, and build projects as well.

## Generate full stack workspace

### Pre-Install
```bash
sudo npm i -g @angular/cli @nrwl/schematics npx npm-add-dependencies npm-check
```

### 1. Use NX *full-stack* preset

```bash
npx create-nx-workspace@latest ui --style=sass --preset=full-stack
mv ui angular-full-stack
cd angular-full-stack
```

### 2. Create NX workspace yourself

#### 1) Let's create an empty workspace for later filling.

```bash
npx create-nx-workspace@latest app --style=sass --preset=empty --skip-install
mv app angular-full-stack
cd angular-full-stack
```

#### 2) Add plugins to the workspace

```bash
npm-add-dependencies --dev @nrwl/angular @nrwl/nest @nrwl/node
npm install
```
<details>
<summary>or with <code>ng add</code></summary>
<pre>
ng add @nrwl/angular --unit-test-runner=jest --e2e-test-runner=cypress
ng add @nrwl/nest
ng add @nrwl/node
</pre>
</details>

## Upgrade node packages and show dependencies diagram

```bash
npm-check --update-all --ignore=typescript

npm run dep-graph
```

## Code scaffolding

### Add Angular library
```bash
ng generate lib common --directory= --parent-module=./apps/ui/src/app/app.module.ts --publishable=true --routing=true --style=sass --unit-test-runner=none
```

### Generate Storybook
```bash
npx -p @storybook/cli sb init --type angular
```

### Add controller to api
```bash
ng generate @nestjs/schematics:controller todos --sourceRoot=apps/api/src --path=app
```

### Add component to ui
```bash
ng g component todos --project=ui
```

## Ng commands

| Command | Description |
| ------- | ----------- |
| `ng serve <ui/api>` | Run a dev server (for ui at http://localhost:4200/). The app will automatically reload if you change any of the source files. |
| `ng build <ui/api>` | Build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. |
| `ng test <ui/api>` | Execute the unit tests via [Jest](https://jestjs.io). |
| `npm run affected:test` | Execute the unit tests affected by a change. |
| `ng e2e <ui/api>` | Execute the end-to-end tests via [Cypress](https://www.cypress.io). |
| `npm run affected:e2e` | Execute the end-to-end tests affected by a change. |
| `npm run dep-graph` | Show a diagram of the dependencies of your projects. |

## Licence
[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?color=blue&style=flat-square)](http://opensource.org/licenses/MIT)
