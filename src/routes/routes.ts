import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export const routes: Route[] = [
  {
    to: '/lazyload/*',
    path: 'lazyload/*',
    Component: lazy(
      () =>
        import(
          /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'
        )
    ),
    name: 'Lazy Load Layout',
  },
  {
    to: '/nolazy',
    path: 'nolazy',
    Component: NoLazy,
    name: 'No Lazy Page',
  },
];

// export const routes: Route[] = [
//   {
//     to: '/lazy1',
//     path: 'lazy1',
//     Component: lazy(
//       () =>
//         import(
//           /* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'
//         )
//     ),
//     name: 'Lazy Page 1',
//   },
//   {
//     to: '/lazy2',
//     path: 'lazy2',
//     Component: lazy(
//       () =>
//         import(
//           /* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'
//         )
//     ),
//     name: 'Lazy Page 2',
//   },
//   {
//     to: '/lazy3',
//     path: 'lazy3',
//     Component: lazy(
//       () =>
//         import(
//           /* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'
//         )
//     ),
//     name: 'Lazy Page 3',
//   },
// ];
