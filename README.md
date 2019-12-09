# Server Side Rendering

## settings

#### 1. `$ yarn eject`

#### 2. create `index.server.js`

#### 3. update `config/paths.js`

#### 4. create `config/webpack.config.server.js`

- `$ yarn add webpack-node-externals`

#### 5. create `scripts/build.server.js`

#### 6. Command execution

- `$ node scripts/build.server.js`

- `$ node dist/server.js`

#### 7. update scripts in package.json

``` JSON
"start:server": "node dist/server.js",
"build:server": "node scripts/build.server.js"
```

You can execute this command.

`$ yarn build:server`

`$ yarn start:server`

#### 8. Server

#### 8-1) Express (Node.js Framework)

- `$ yarn add express`

- update `index.server.js`

#### 9. Data loading

#### 9-1) redux-thunk

- `$ yarn add redux react-redux redux-thunk axios`

- create `modules/users.js`

- create `modules/index.js`

- update `src/index.js`

- create `components/Users.js`, `containers/UsersContainer.js`, `pages/UsersPage.js`, `components/Menu.js`

- create `lib/Preloadcontext.js` for Promise
 
<br>

#### 9-2) redux-saga

- `$ yarn add redux-saga`

- update `modules/users.js`

- update `modules/index.js`

- update `src/index.js`

- create `components/User.js`, `containers/UserContainer.js`, `pages/UserPage.js` 

- update `index.server.js`

<br>
<br>

### Code Splitting

#### 1) Loadable Components

`$ yarn add @loadable/component @loadable/server @loadable/webpack-plugin @loadable/babel-plugin`

**App.js**

``` JavaScript
...
import loadable from '@loadable/component';
const RedPage = loadable(() => import('./pages/RedPage'));
...
```

UI Flickers when this way.

#### 2) apply webpack and babel plugin 

**package.json - babel**

``` JavaScript
...
"babel": {
    "presets": [
        "react-app"
    ],
    "plugins": [
        "@loadable/babel-plugin"
    ]
}
...
```

<br>

**webpack.config.js**

``` JavaScript
const LoadablePlugin = require('@loadable/webpack-plugin');
(...)
plugins: [
    new LoadablePlugin(),
    (...)
]
```

<br>

`$ yarn build`
 
Check 'build/loadable-stats.json' file.

<br>

#### 3) Extract the chunk file paths

use 'ChunkExtractor, ChunkExtractorManager' in Loadable Components

<br>

#### 4) loadableReady and hydrate

- loadableReady is for redering after all scripts loading

- hydrate function can use instead of render function for performance optimization

<br>
<br>

### Alternatives

- **Next.js** (Not compatible with react-router)

- **Razzle.js** (Flickering & Not working on Loadable Components)


