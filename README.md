# propellant-components

### getting started

##### install

`npm install prpllnt`

##### use everything

```javascript
import propellant from 'prpllnt'
Vue.use(propellant)
import '~prpllnt/lib/main.css'
```

##### or just certain components

```javascript
import { pToast } from 'prpllnt'
Vue.component(pToast.name, pToast)
```

##### works outside build systems too!

```html
<link rel="stylesheet" type="text/css" href="https://unpkg.com/prpllnt/lib/main.css" />
...
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/prpllnt"></script>
```

### goals

- consider the component first, rather than wrap an existing CSS library
- balance performance and API simplicity
  - no `watch` in components unless warranted by the use-case
- use a Vue event bus to streamline components while still providing native debugging
- performant transitions/animations
- high forkability
