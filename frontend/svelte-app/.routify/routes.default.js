

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
        "path": "src/routes/venture-profile/_module.svelte",
        "dir": "src/routes/venture-profile",
        "base": "_module.svelte",
        "ext": ".svelte",
        "name": "_module"
      },
      "asyncModule": () => import('../src/routes/venture-profile/_module.svelte'),
      "children": [
        {
          "meta": {},
          "id": "_default_venture_profile_index_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "index",
          "file": {
            "path": "src/routes/venture-profile/index.svelte",
            "dir": "src/routes/venture-profile",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/venture-profile/index.svelte'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_venture_profile_new_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "new",
          "file": {
            "path": "src/routes/venture-profile/new.svelte",
            "dir": "src/routes/venture-profile",
            "base": "new.svelte",
            "ext": ".svelte",
            "name": "new"
          },
          "asyncModule": () => import('../src/routes/venture-profile/new.svelte'),
          "children": []
        }
      ]
    },
    {
      "meta": {
        "dynamic": true,
        "dynamicSpread": true
      },
      "_regex": {},
      "_paramKeys": {},
      "name": "[...404]",
      "file": {
        "path": ".routify/components/[...404].svelte",
        "dir": ".routify/components",
        "base": "[...404].svelte",
        "ext": ".svelte",
        "name": "[...404]"
      },
      "asyncModule": () => import('./components/[...404].svelte'),
      "children": []
    }
  ]
}