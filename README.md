# Awesome Dashboard

It's built for using on Mobagel 8ndpoint's project. We wrapped ant design's component or built some component for common scenery case. To make our develop effieciency.

## How to implement

### Install

- Install plugin 
```
yarn add awesome-dashboard
or
npm install awesome-dashboard
```

You can open [Storybook](https://mobagel.github.io/awesome-dashboard/ "Storybook") to see which component you can use.


### How to Develop

#### Start local environment

We can develop component on `storybook`.

```
yarn 

// start storybook
yarn storybook
```

- After you finish component, deploy plugin to npm.
```
yarn build

// Update package.json version
npm version [major | minor | patch]
// major 0.0.0 -> 1.0.0
// minor 0.0.0 -> 0.1.0
// patch 0.0.0 -> 0.0.1

npm publish
```


If you need to build component working with i18n.

- Add .env file fill airtable key
```
# AirTable parameters, plz check these in airtable doc
AIRTABLE_KEY="key6GROo24nOw13pZ"
AIRTABLE_I18N_BASE_COMMON="appguIubkT0Hrh2Pb"
AIRTABLE_I18N_TABLE_COMMON="8ndpoint_common"
AIRTABLE_I18N_VIEW_COMMON="Grid view"
```

- Install lang
```
// download lang.json
yarn i18n:fetch
```

### Storybook

You can see component's props on storybook or you can open component's type file to see what prop you can pass.

Link: [Storybook](https://mobagel.github.io/awesome-dashboard/ "Storybook")
