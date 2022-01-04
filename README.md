# Awesome Dashboard

It's built for using on Mobagel 8ndpoint's project. We wrapped ant design's component or built some component for common scenery case. To make our develop effieciency.

## How to implement

### Install

```
yarn add awesome-dashboard
or
npm install awesome-dashboard
```

- install antd

```
yarn add antd
or
npm install antd
```

### How to use

```
import { NotificationBar } from 'awesome-dashboard';

import type { NotificationBarProps } from 'awesome-dashboard';
```

### Storybook

You can see component's props on storybook or you can open component's type file to see what prop you can pass.

Link: [Storybook](https://mobagel.github.io/awesome-dashboard/ "Storybook")

### Update package version

- Local deploy ( need login on local )
```
// Update package.json version
npm version [major | minor | patch]
// major 0.0.0 -> 1.0.0
// minor 0.0.0 -> 0.1.0
// patch 0.0.0 -> 0.0.1

// you need to login ur npm account to publish
npm publish
```