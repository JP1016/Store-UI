# Store

##Routes
Orders List - http://localhost:4200 
Place Order - http://localhost:4200/cart

##Folder Structure
.
├── Dockerfile
├── README.md
├── angular.json
├── docker-compose.debug.yml
├── docker-compose.yml
├── e2e
│   ├── protractor.conf.js
│   ├── src
│   │   ├── app.e2e-spec.ts
│   │   └── app.po.ts
│   └── tsconfig.e2e.json
├── node_modules [+]
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── configs
│   │   │   └── app-constants.ts
│   │   ├── core
│   │   │   ├── core.module.ts
│   │   │   ├── services
│   │   │   │   ├── http-client.service.spec.ts
│   │   │   │   └── http-client.service.ts
│   │   │   └── toolbar
│   │   │       ├── toolbar.component.html
│   │   │       ├── toolbar.component.scss
│   │   │       ├── toolbar.component.spec.ts
│   │   │       └── toolbar.component.ts
│   │   ├── modules
│   │   │   └── orders
│   │   │       ├── components
│   │   │       │   └── search-bar
│   │   │       │       ├── search-bar.component.html
│   │   │       │       ├── search-bar.component.scss
│   │   │       │       ├── search-bar.component.spec.ts
│   │   │       │       └── search-bar.component.ts
│   │   │       ├── orders-routing.module.ts
│   │   │       ├── orders.module.ts
│   │   │       └── pages
│   │   │           ├── home
│   │   │           │   ├── home.component.html
│   │   │           │   ├── home.component.scss
│   │   │           │   ├── home.component.spec.ts
│   │   │           │   └── home.component.ts
│   │   │           └── place-order
│   │   │               ├── place-order.component.html
│   │   │               ├── place-order.component.scss
│   │   │               ├── place-order.component.spec.ts
│   │   │               └── place-order.component.ts
│   │   └── shared
│   │       ├── index.ts
│   │       ├── models
│   │       │   ├── index.ts
│   │       │   └── orders.model.ts
│   │       └── shared.module.ts
│   ├── assets
│   │   └── images
│   ├── browserslist
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── karma.conf.js
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── tslint.json
├── tsconfig.json
└── tslint.json


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
