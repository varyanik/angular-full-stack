# Angular Full Stack

> This project was generated using [Nx](https://nx.dev).

## Quick Start

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, .etc as well as the devtools to test, and build projects as well.

## Generate full stack workspace

### Pre-Install
```bash
sudo npm i -g @angular/cli @nrwl/nx @nrwl/schematics npx npm-add-dependencies npm-check
```

### 1. Use NX *full-stack* preset

```bash
npx create-nx-workspace@latest ui --style=sass --preset=full-stack
mv ui angular-full-stack
cd angular-full-stack
```

### 2. Create NX workspace yourself

#### 1) Let's create an empty workspace

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

### Upgrade node packages

```bash
npm-check --update-all --ignore=typescript
```

### Show dependencies diagram

```bash
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

## Compare branches
`https://github.com/varyanik/angular-full-stack/compare/nx-full-stack-preset...nx-step-by-step`

## NG commands

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Command&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
| --- | --- |
| `ng serve <api/ui>`         | Run a dev server for the app. By default, URLs are http://localhost:4200/ for ui and http://localhost:3333/ for api. |
| `ng build <api/ui/workers>` | Build the app to the `dist/` directory. Use the `--prod` flag for a production build |
| `ng test <api/ui/workers>`  | Execute the unit tests for the project via [Jest](https://jestjs.io) |
| `ng e2e <ui-e2e>`           | Execute the end-to-end tests via [Cypress](https://www.cypress.io) |
| `ng lint <api/ui/workers>`  | Lint the project |

### NPM commands

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Command&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
| --- | --- |
| `npm run serve`            | Run dev server with default apps and open in a browser at http://localhost:4200/ |
| `npm run build`            | Build all apps to the `dist/` directory. Use the `-- --prod` flag for a production build |
| `npm run test`             | Execute the unit tests |
| `npm run lint`             | Lint all projects |
| `npm run e2e`              | Execute the end-to-end tests |
| `npm run format`           | Overwrite un-formatted files |
| `npm run dep-list`         | Show a list of all projects |
| `npm run dep-graph`        | Show a diagram of the dependencies of your projects |
| `npm run update`           | Update workspace |
| `npm run help`             | Show help |

## Licence
[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?color=blue&style=flat-square)](http://opensource.org/licenses/MIT)
