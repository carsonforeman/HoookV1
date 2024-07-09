

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
      "id": "_default_explore",
      "_regex": {},
      "_paramKeys": {},
      "name": "explore",
      "module": false,
      "file": {
        "path": "src/routes/explore",
        "dir": "src/routes",
        "base": "explore",
        "ext": "",
        "name": "explore"
      },
      "children": [
        {
          "meta": {},
          "id": "_default_explore_venturepage_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "venturepage",
          "file": {
            "path": "src/routes/explore/venturepage.svelte",
            "dir": "src/routes/explore",
            "base": "venturepage.svelte",
            "ext": ".svelte",
            "name": "venturepage"
          },
          "asyncModule": () => import('../src/routes/explore/venturepage.svelte'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_explore_ventures",
          "_regex": {},
          "_paramKeys": {},
          "name": "ventures",
          "module": false,
          "file": {
            "path": "src/routes/explore/ventures",
            "dir": "src/routes/explore",
            "base": "ventures",
            "ext": "",
            "name": "ventures"
          },
          "children": [
            {
              "meta": {},
              "id": "_default_explore_ventures_index_svelte",
              "_regex": {},
              "_paramKeys": {},
              "name": "index",
              "file": {
                "path": "src/routes/explore/ventures/index.svelte",
                "dir": "src/routes/explore/ventures",
                "base": "index.svelte",
                "ext": ".svelte",
                "name": "index"
              },
              "asyncModule": () => import('../src/routes/explore/ventures/index.svelte'),
              "children": []
            }
          ]
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_feed_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "feed",
      "file": {
        "path": "src/routes/feed.svelte",
        "dir": "src/routes",
        "base": "feed.svelte",
        "ext": ".svelte",
        "name": "feed"
      },
      "asyncModule": () => import('../src/routes/feed.svelte'),
      "children": []
    },
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
      "id": "_default_myhub_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "myhub",
      "file": {
        "path": "src/routes/myhub.svelte",
        "dir": "src/routes",
        "base": "myhub.svelte",
        "ext": ".svelte",
        "name": "myhub"
      },
      "asyncModule": () => import('../src/routes/myhub.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_sign_in_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "sign-in",
      "file": {
        "path": "src/routes/sign-in.svelte",
        "dir": "src/routes",
        "base": "sign-in.svelte",
        "ext": ".svelte",
        "name": "sign-in"
      },
      "asyncModule": () => import('../src/routes/sign-in.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_sign_up_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "sign-up",
      "file": {
        "path": "src/routes/sign-up.svelte",
        "dir": "src/routes",
        "base": "sign-up.svelte",
        "ext": ".svelte",
        "name": "sign-up"
      },
      "asyncModule": () => import('../src/routes/sign-up.svelte'),
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
        },
        {
          "meta": {},
          "id": "_default_venture_profile_overview_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "overview",
          "file": {
            "path": "src/routes/venture-profile/overview.svelte",
            "dir": "src/routes/venture-profile",
            "base": "overview.svelte",
            "ext": ".svelte",
            "name": "overview"
          },
          "asyncModule": () => import('../src/routes/venture-profile/overview.svelte'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_venture_profile_owner",
          "_regex": {},
          "_paramKeys": {},
          "name": "owner",
          "module": false,
          "file": {
            "path": "src/routes/venture-profile/owner",
            "dir": "src/routes/venture-profile",
            "base": "owner",
            "ext": "",
            "name": "owner"
          },
          "children": [
            {
              "meta": {
                "dynamic": true
              },
              "id": "_default_venture_profile_owner__ventureName__svelte",
              "_regex": {},
              "_paramKeys": {},
              "name": "[ventureName]",
              "file": {
                "path": "src/routes/venture-profile/owner/[ventureName].svelte",
                "dir": "src/routes/venture-profile/owner",
                "base": "[ventureName].svelte",
                "ext": ".svelte",
                "name": "[ventureName]"
              },
              "asyncModule": () => import('../src/routes/venture-profile/owner/[ventureName].svelte'),
              "children": []
            }
          ]
        },
        {
          "meta": {},
          "id": "_default_venture_profile_repository_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "repository",
          "file": {
            "path": "src/routes/venture-profile/repository.svelte",
            "dir": "src/routes/venture-profile",
            "base": "repository.svelte",
            "ext": ".svelte",
            "name": "repository"
          },
          "asyncModule": () => import('../src/routes/venture-profile/repository.svelte'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_venture_profile_resources_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "resources",
          "file": {
            "path": "src/routes/venture-profile/resources.svelte",
            "dir": "src/routes/venture-profile",
            "base": "resources.svelte",
            "ext": ".svelte",
            "name": "resources"
          },
          "asyncModule": () => import('../src/routes/venture-profile/resources.svelte'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_venture_profile_team_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "team",
          "file": {
            "path": "src/routes/venture-profile/team.svelte",
            "dir": "src/routes/venture-profile",
            "base": "team.svelte",
            "ext": ".svelte",
            "name": "team"
          },
          "asyncModule": () => import('../src/routes/venture-profile/team.svelte'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_venture_profile_venturepage_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "venturepage",
          "file": {
            "path": "src/routes/venture-profile/venturepage.svelte",
            "dir": "src/routes/venture-profile",
            "base": "venturepage.svelte",
            "ext": ".svelte",
            "name": "venturepage"
          },
          "asyncModule": () => import('../src/routes/venture-profile/venturepage.svelte'),
          "children": []
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_what_is_hoook_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "what-is-hoook",
      "file": {
        "path": "src/routes/what-is-hoook.svelte",
        "dir": "src/routes",
        "base": "what-is-hoook.svelte",
        "ext": ".svelte",
        "name": "what-is-hoook"
      },
      "asyncModule": () => import('../src/routes/what-is-hoook.svelte'),
      "children": []
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