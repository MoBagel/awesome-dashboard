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

## Usage
For example to implement `NotificationBar` component.

```
import { NotificationBar } from 'awesome-dashboard';

...
        <NotificationBar
          styles={customStyle}
          message={formatMessage({
            id: 'common.message.upgrade',
            defaultMessage: `Your trial plan has expired. Please upgrade to an advanced plan to continue using 8ndpoint's AI services`,
          })}
          cancelButtonLabel={formatMessage({
            id: 'common.action.learn',
            defaultMessage: 'Learn more',
          })}
          cancelButtonProp={{
            href: 'https://www.8ndpoint.com/restock#pricing-plan',
            target: '_blank',
          }}
          confirmButtonLabel={formatMessage({
            id: 'common.action.upgrade',
            defaultMessage: 'Upgrade',
          })}
          confirmButtonProp={{ href: 'https://www.8ndpoint.com/contact', target: '_blank' }}
          onCloseBanner={handleCloseNotify}
        />
...
```

You can open [Storybook](https://mobagel.github.io/awesome-dashboard/ "Storybook") to see more components you can use.

## How to Develop
We advice you develop component on `storybook`. Because it can make our component's status individual. And you can demo component on storybook.

### Start local environment
```
yarn

// start storybook
yarn storybook
```

### Install lang
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

### Write unit test and storybook sample
Don't forget to update component sample on storybook. It can make next developer who can easily realize how to use component.

And update unit test to check component render or interactive case.

### Deploy step
We have already integrated `github action`. You just need create version tag on `github`. And it will automatically build and deploy on npm.

You can see `.github/workflow/publish.yml`. It's CI/CD setting.


- if you still need to deploy from your local
```
yarn build

// Update package.json version
npm version [major | minor | patch]
// major 0.0.0 -> 1.0.0
// minor 0.0.0 -> 0.1.0
// patch 0.0.0 -> 0.0.1

npm publish
```

### Storybook
You can see component's props on storybook or you can open component's type file to see what prop you can pass.

Link: [Storybook](https://mobagel.github.io/awesome-dashboard/ "Storybook")
