# Radial / Node menu

- No depedencies
- Lightweigth codebase
- Recursive
- configurable

```javascript
import { renderMenu } from "./radialMenu.js";
renderMenu(domElement, itemsElements, optionsPositions);
```

```javascript
// where to render radialMenu
const domElement = document.getElementById("exemple)
```

```javascript
const itemsElements = [
  {
    id: "exemple",
    name: "labelName",
    icon: "iconPath", // soon
    onClick: () => {}, //trigger on item click
    subItems: [], // show on hover
  },
];
```

```javascript
const optionsPositions = [
  {
    startDeg: 0, // first item start at xdeg from 0 deg
    maxDeg: 360, // how many deg items cover (180 demi-circle)
    maxSpan: 100, // max span between items
  },
];
```

```css
/* Variable CSS de configuration */
.radial-menu {
  --main-diameter: 200px;
  --sub-diameter: 200px;
  --dot-diameter: 30px;
}
```

## Exemples

- [Exemple 1](https://overglass.github.io/RadialMenu/exemple.html)
- [Exemple 2](https://overglass.github.io/RadialMenu/exemple2.html)
- [Exemple 3](https://overglass.github.io/RadialMenu/exemple3.html)
