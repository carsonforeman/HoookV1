export default {
  "meta": {},
  "id": "_default",
  "_regex": {},
  "_paramKeys": {},
  "file": {
    "path": "src/routes",
    "dir": "src",
    "base": "routes",
    "ext": "",
    "name": "routes"
  },
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default_index_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "index",
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "asyncModule": () => import('../src/routes/index.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_venture_profile",
      "_regex": {},
      "_paramKeys": {},
      "name": "venture-profile",
      "file": {
        "path": "src/routes/venture-profile",
        "dir": "src/routes",
        "base": "venture-profile",
        "ext": "",
        "name": "venture-profile"
      },
      "asyncModule": () => import('../src/routes/venture-profile'),
      "children": [
        {
          "meta": { "dynamic": true },
          "id": "_default_venture_profile_ventureName",
          "_regex": {},
          "_paramKeys": {},
          "name": "[ventureName]",
          "file": {
            "path": "src/routes/venture-profile/[ventureName].svelte",
            "dir": "src/routes/venture-profile",
            "base": "[ventureName].svelte",
            "ext": ".svelte",
            "name": "[ventureName]"
          },
          "asyncModule": () => import('../src/routes/venture-profile/[ventureName].svelte'),
          "children": []
        }
      ]
    }
  ]
}
