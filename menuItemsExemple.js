const menuItems = [
  {
    id: "menu-item-00",
    name: "Home 1",
    icon: "home",
    subItems: [
      {
        id: "menu-item-0-0",
        name: "Home",
        icon: "home",
        callback: () => {
          console.log("coucou");
        },
        subItems: [
          {
            id: "menu-item-0-1-1",
            name: "Home",
            icon: "home",
            callback: () => {
              console.log("coucou");
            },
          },
          {
            id: "menu-item-0-2-2",
            name: "Home",
            icon: "home",
            callback: () => {
              console.log("coucou");
            },
          },
        ],
      },
      {
        id: "menu-item-0-2",
        name: "Home",
        icon: "home",
        callback: () => {
          console.log("coucou");
        },
      },
    ],
  },
  {
    id: "menu-item-0123",
    name: "Home 2",
    icon: "home",
    subItems: [
      {
        id: "menu-item-123-0",
        name: "Home",
        icon: "home",
        callback: () => {
          console.log("coucou");
        },
        subItems: [
          {
            id: "menu-item-123-0-1",
            name: "Home",
            icon: "home",
            callback: () => {
              console.log("coucou");
            },
          },
          {
            id: "menu-item-123-0-1",
            name: "Home",
            icon: "home",
            callback: () => {
              console.log("coucou");
            },
          },
        ],
      },
      {
        id: "menu-item-123-1",
        name: "Home",
        icon: "home",
        callback: () => {
          console.log("coucou");
        },
      },
      {
        id: "menu-item-123-2",
        name: "Home",
        icon: "home",
        callback: () => {
          console.log("coucou");
        },
      },
    ],
  },
  {
    id: "menu-item-1",
    name: "Home 3",
    icon: "home",
    subItems: [
      {
        id: "menu-item-1-0",
        name: "Home",
        icon: "home",
        callback: () => {
          console.log("coucou");
        },
        subItems: [
          {
            id: "menu-item-1-0-1",
            name: "Home",
            icon: "home",
            callback: () => {
              console.log("coucou");
            },
          },
          {
            id: "menu-item-1-0-1",
            name: "Home",
            icon: "home",
            callback: () => {
              console.log("coucou");
            },
          },
        ],
      },
      {
        id: "menu-item-1-1",
        name: "Home",
        icon: "home",
        callback: () => {
          console.log("coucou");
        },
      },
      {
        id: "menu-item-1-2",
        name: "Home",
        icon: "home",
        callback: () => {
          console.log("coucou");
        },
      },
    ],
  },
  {
    id: "menu-item-2",
    name: "Home 4",
    icon: "home",
    subItems: [
      {
        id: "menu-item-2-1",
        name: "My profile",
        icon: "person",
        callback: () => {
          console.log("coucou");
        },
      },
      {
        id: "menu-item-2-2",
        name: "My profile",
        icon: "person",
        callback: () => {
          console.log("coucou");
        },
      },
    ],
  },
  {
    id: "menu-item-3",
    name: "Profile",
    icon: "person",
    callback: () => {
      console.log("coucou");
    },
    subItems: [
      {
        id: "menu-item-3-1",
        name: "My profile",
        icon: "person",
        callback: () => {
          console.log("coucou");
        },
      },
      {
        id: "menu-item-3-2",
        name: "My profile",
        icon: "person",
        callback: () => {
          console.log("coucou");
        },
      },
    ],
  },
];

export { menuItems };
