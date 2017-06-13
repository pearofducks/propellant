# propellant-components

### getting started

##### install

`npm install propellant-components`

##### use everything

```javascript
import propellant from 'propellant-components'
Vue.use(propellant)
import '~propellant-components/lib/main.css'
```

##### or just certain components

```
import { pToast } from 'propellant-components'
Vue.component(pToast.name, pToast)
```

### goals

- consider the component first, rather than wrap an existing CSS library
- balance performance and API simplicity
  - no `watch` in components unless warranted by the use-case
- use a Vue event bus to streamline components while still providing native debugging
- performant transitions/animations
- high forkability
