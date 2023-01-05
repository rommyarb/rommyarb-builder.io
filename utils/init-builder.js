import KomponenSaya from "../components/KomponenSaya.vue";

export const REGISTERED_COMPONENTS = [
  {
    component: KomponenSaya,
    name: "Komponen Saya",
    canHaveChildren: true,
    image:
      "https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png",
    inputs: [
      {
        name: "text",
        type: "string",
        defaultValue: "Akhirat",
      },
    ],
  },
];
