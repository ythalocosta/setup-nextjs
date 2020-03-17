# Setup NextJs

This example uses [NextJs](https://nextjs.org/), [create-next-app-cli](https://create-next-app.github.io/) and [ZEIT Now](https://zeit.co/home) as the contribution base.

## Deploy your own

Deploy the example using [ZEIT Now](https://zeit.co/now):

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/zeit/next.js/tree/canary/examples/with-next-sass)

## How to use

### Architecture
```
├── assets
│   ├── fonts
│   └── scss
│       ├── _variables.scss
│       ├── fonts.scss
│       ├── general.scss
│       ├── mixins.scss
│       └── style.scss
├── components
│   ├── Footer
│   │   ├── index.js
│   │   └── style.scss
│   ├── Header
│   │   ├── index.js
│   │   └── style.scss
│   └── Layout
│       └── index.js
├── pages
│   ├── 404.js
│   ├── index.js
│   └── single.js
└── public
    └── images
        └── favicon.ico

```

Dependencies  | Link
------------- | -------------
ReactJs  | [Clique aqui](https://reactjs.org/)
Bootstrap  | [Clique aqui](https://getbootstrap.com/)

### Download manually

Download the example:

```bash
git clone https://github.com/ythalocosta/nextjs-boilerplate.git NAME_PROJECT
cd NAME_PROJECT
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Run production build with:

```bash
npm run build_export
npm run start
# or
yarn build_export
yarn start
```

Deploy it to the cloud with [ZEIT Now](https://zeit.co/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
