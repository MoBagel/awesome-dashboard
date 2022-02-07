<h1 align="center">
    Awesome Dashboard
</h1>

<div align="center">

It's built for using on Mobagel 8ndpoint's project. We wrapped ant design's component or built some component for common scenery case. To make our develop effieciency.

</div>

## Installation

- Install plugin 
```
yarn add awesome-dashboard
// or with npm
npm install awesome-dashboard
```

You can open [Storybook](https://mobagel.github.io/awesome-dashboard/ "Storybook") to see which component you can use.


## How to Develop
We advice you develop component on `storybook`. Because it can make our component's status individual. And you can demo component on storybook.

### Start local environment
```
yarn

// start storybook
yarn storybook
```

### Write unit test and storybook sample
Don't forget to update component sample on storybook. It can make next developer who can easily realize how to use component.

And update unit test to check component render or interactive case.

### Deploy step
We have already integrated `github action`. You just need create version tag on `github`. And it will automatically build and deploy on npm.

You can see `.github/workflow/publish.yml`. It's CI/CD setting.

But if you need to deploy from your local.(Not recommend)
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
AIRTABLE_KEY=
AIRTABLE_I18N_BASE_COMMON=
AIRTABLE_I18N_TABLE_COMMON=
AIRTABLE_I18N_VIEW_COMMON=
```

- Install lang
```
// download lang.json
yarn i18n:fetch
```

### Storybook
You can see component's props on storybook or you can open component's type file to see what prop you can pass.

Link: [Storybook](https://mobagel.github.io/awesome-dashboard/ "Storybook")
