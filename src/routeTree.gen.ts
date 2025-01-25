/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LangImport } from './routes/$lang'
import { Route as LangOperateImport } from './routes/$lang/operate'

// Create Virtual Routes

const LangIndexLazyImport = createFileRoute('/$lang/')()
const LangResourcesLazyImport = createFileRoute('/$lang/resources')()
const LangLearnLazyImport = createFileRoute('/$lang/learn')()
const LangCommunityLazyImport = createFileRoute('/$lang/community')()
const LangBuildLazyImport = createFileRoute('/$lang/build')()
const LangAboutLazyImport = createFileRoute('/$lang/about')()

// Create/Update Routes

const LangRoute = LangImport.update({
  id: '/$lang',
  path: '/$lang',
  getParentRoute: () => rootRoute,
} as any)

const LangIndexLazyRoute = LangIndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LangRoute,
} as any).lazy(() => import('./routes/$lang/index.lazy').then((d) => d.Route))

const LangResourcesLazyRoute = LangResourcesLazyImport.update({
  id: '/resources',
  path: '/resources',
  getParentRoute: () => LangRoute,
} as any).lazy(() =>
  import('./routes/$lang/resources.lazy').then((d) => d.Route),
)

const LangLearnLazyRoute = LangLearnLazyImport.update({
  id: '/learn',
  path: '/learn',
  getParentRoute: () => LangRoute,
} as any).lazy(() => import('./routes/$lang/learn.lazy').then((d) => d.Route))

const LangCommunityLazyRoute = LangCommunityLazyImport.update({
  id: '/community',
  path: '/community',
  getParentRoute: () => LangRoute,
} as any).lazy(() =>
  import('./routes/$lang/community.lazy').then((d) => d.Route),
)

const LangBuildLazyRoute = LangBuildLazyImport.update({
  id: '/build',
  path: '/build',
  getParentRoute: () => LangRoute,
} as any).lazy(() => import('./routes/$lang/build.lazy').then((d) => d.Route))

const LangAboutLazyRoute = LangAboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => LangRoute,
} as any).lazy(() => import('./routes/$lang/about.lazy').then((d) => d.Route))

const LangOperateRoute = LangOperateImport.update({
  id: '/operate',
  path: '/operate',
  getParentRoute: () => LangRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/$lang': {
      id: '/$lang'
      path: '/$lang'
      fullPath: '/$lang'
      preLoaderRoute: typeof LangImport
      parentRoute: typeof rootRoute
    }
    '/$lang/operate': {
      id: '/$lang/operate'
      path: '/operate'
      fullPath: '/$lang/operate'
      preLoaderRoute: typeof LangOperateImport
      parentRoute: typeof LangImport
    }
    '/$lang/about': {
      id: '/$lang/about'
      path: '/about'
      fullPath: '/$lang/about'
      preLoaderRoute: typeof LangAboutLazyImport
      parentRoute: typeof LangImport
    }
    '/$lang/build': {
      id: '/$lang/build'
      path: '/build'
      fullPath: '/$lang/build'
      preLoaderRoute: typeof LangBuildLazyImport
      parentRoute: typeof LangImport
    }
    '/$lang/community': {
      id: '/$lang/community'
      path: '/community'
      fullPath: '/$lang/community'
      preLoaderRoute: typeof LangCommunityLazyImport
      parentRoute: typeof LangImport
    }
    '/$lang/learn': {
      id: '/$lang/learn'
      path: '/learn'
      fullPath: '/$lang/learn'
      preLoaderRoute: typeof LangLearnLazyImport
      parentRoute: typeof LangImport
    }
    '/$lang/resources': {
      id: '/$lang/resources'
      path: '/resources'
      fullPath: '/$lang/resources'
      preLoaderRoute: typeof LangResourcesLazyImport
      parentRoute: typeof LangImport
    }
    '/$lang/': {
      id: '/$lang/'
      path: '/'
      fullPath: '/$lang/'
      preLoaderRoute: typeof LangIndexLazyImport
      parentRoute: typeof LangImport
    }
  }
}

// Create and export the route tree

interface LangRouteChildren {
  LangOperateRoute: typeof LangOperateRoute
  LangAboutLazyRoute: typeof LangAboutLazyRoute
  LangBuildLazyRoute: typeof LangBuildLazyRoute
  LangCommunityLazyRoute: typeof LangCommunityLazyRoute
  LangLearnLazyRoute: typeof LangLearnLazyRoute
  LangResourcesLazyRoute: typeof LangResourcesLazyRoute
  LangIndexLazyRoute: typeof LangIndexLazyRoute
}

const LangRouteChildren: LangRouteChildren = {
  LangOperateRoute: LangOperateRoute,
  LangAboutLazyRoute: LangAboutLazyRoute,
  LangBuildLazyRoute: LangBuildLazyRoute,
  LangCommunityLazyRoute: LangCommunityLazyRoute,
  LangLearnLazyRoute: LangLearnLazyRoute,
  LangResourcesLazyRoute: LangResourcesLazyRoute,
  LangIndexLazyRoute: LangIndexLazyRoute,
}

const LangRouteWithChildren = LangRoute._addFileChildren(LangRouteChildren)

export interface FileRoutesByFullPath {
  '/$lang': typeof LangRouteWithChildren
  '/$lang/operate': typeof LangOperateRoute
  '/$lang/about': typeof LangAboutLazyRoute
  '/$lang/build': typeof LangBuildLazyRoute
  '/$lang/community': typeof LangCommunityLazyRoute
  '/$lang/learn': typeof LangLearnLazyRoute
  '/$lang/resources': typeof LangResourcesLazyRoute
  '/$lang/': typeof LangIndexLazyRoute
}

export interface FileRoutesByTo {
  '/$lang/operate': typeof LangOperateRoute
  '/$lang/about': typeof LangAboutLazyRoute
  '/$lang/build': typeof LangBuildLazyRoute
  '/$lang/community': typeof LangCommunityLazyRoute
  '/$lang/learn': typeof LangLearnLazyRoute
  '/$lang/resources': typeof LangResourcesLazyRoute
  '/$lang': typeof LangIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/$lang': typeof LangRouteWithChildren
  '/$lang/operate': typeof LangOperateRoute
  '/$lang/about': typeof LangAboutLazyRoute
  '/$lang/build': typeof LangBuildLazyRoute
  '/$lang/community': typeof LangCommunityLazyRoute
  '/$lang/learn': typeof LangLearnLazyRoute
  '/$lang/resources': typeof LangResourcesLazyRoute
  '/$lang/': typeof LangIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/$lang'
    | '/$lang/operate'
    | '/$lang/about'
    | '/$lang/build'
    | '/$lang/community'
    | '/$lang/learn'
    | '/$lang/resources'
    | '/$lang/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/$lang/operate'
    | '/$lang/about'
    | '/$lang/build'
    | '/$lang/community'
    | '/$lang/learn'
    | '/$lang/resources'
    | '/$lang'
  id:
    | '__root__'
    | '/$lang'
    | '/$lang/operate'
    | '/$lang/about'
    | '/$lang/build'
    | '/$lang/community'
    | '/$lang/learn'
    | '/$lang/resources'
    | '/$lang/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LangRoute: typeof LangRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  LangRoute: LangRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/$lang"
      ]
    },
    "/$lang": {
      "filePath": "$lang.tsx",
      "children": [
        "/$lang/operate",
        "/$lang/about",
        "/$lang/build",
        "/$lang/community",
        "/$lang/learn",
        "/$lang/resources",
        "/$lang/"
      ]
    },
    "/$lang/operate": {
      "filePath": "$lang/operate.tsx",
      "parent": "/$lang"
    },
    "/$lang/about": {
      "filePath": "$lang/about.lazy.tsx",
      "parent": "/$lang"
    },
    "/$lang/build": {
      "filePath": "$lang/build.lazy.tsx",
      "parent": "/$lang"
    },
    "/$lang/community": {
      "filePath": "$lang/community.lazy.tsx",
      "parent": "/$lang"
    },
    "/$lang/learn": {
      "filePath": "$lang/learn.lazy.tsx",
      "parent": "/$lang"
    },
    "/$lang/resources": {
      "filePath": "$lang/resources.lazy.tsx",
      "parent": "/$lang"
    },
    "/$lang/": {
      "filePath": "$lang/index.lazy.tsx",
      "parent": "/$lang"
    }
  }
}
ROUTE_MANIFEST_END */
