const defaultOptions = {
  startDeg: 0,
  maxDeg: 360,
  maxSpan: 100,
};

export function renderMenu(rootElement, items, options = defaultOptions) {
  rootElement.innerHTML = generateMenu(items, options);
  registerMenuEvents(items);
}

function registerMenuEvents(items) {
  items.forEach(item => {
    const li = document.getElementById(item.id);
    if (item.onClick) {
      li.addEventListener("click", e => {
        e.stopPropagation();
        item.onClick();
      });
    }
    if (item.subItems && item.subItems.length > 0) {
      li.addEventListener("mouseover", () => toggleMenu(true, item));
      li.addEventListener("mouseout", () => toggleMenu(false, item));
      registerMenuEvents(item.subItems);
    }
  });
}

function toggleMenu(show, { id }) {
  const li = document.getElementById(id);
  const subMenu = li.querySelector(".sub-menu");
  li.classList[show ? "add" : "remove"]("active");
  subMenu.classList[show ? "add" : "remove"]("open");
}

export function generateMenu(items, { startDeg, maxSpan, maxDeg }, isSub) {
  let degSpan = maxDeg / (items.length - (Math.abs(maxDeg) < 360 ? 1 : 0));
  degSpan = Math.abs(degSpan) > Math.abs(maxSpan) ? maxSpan : degSpan;
  return `
    <div class="radial-menu">
      <ul style="${!isSub ? "z-index:0;" : ""}">
        ${items.map((x, i) => generateItem(x, i)).join("")}
      </ul>
    </div>
  `;

  function generateItem(item, index) {
    const deg = Math.floor(degSpan * index) + (startDeg + 45);
    const isLeft = Math.abs(deg) < 180;
    return `
      <li
        class="menu-item" 
        id="${item.id}" 
        style="transform: rotate(${deg}deg);"
      >
        <div 
          class="menu-item-container" 
          style="transform: rotate(${deg * -1}deg)"
        >
        <!-- <i class="material-icons">${item.icon}</i> --!>
          <span class="menu-item-text">${item.name}</span>
          ${
            item.subItems && item.subItems.length > 0
              ? `<div class="sub-menu">
                  ${generateMenu(
                    item.subItems,
                    {
                      startDeg: deg,
                      maxSpan: -45,
                      maxDeg,
                    },
                    true
                  )}
                </div>`
              : ""
          }
        </div>
      </li>
    `;
  }
}
