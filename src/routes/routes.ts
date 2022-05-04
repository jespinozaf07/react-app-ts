import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export const routes: Route[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: lazy(
      () =>
        import(
          /* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'
        )
    ),
    name: 'Lazy Page 1',
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    Component: lazy(
      () =>
        import(
          /* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'
        )
    ),
    name: 'Lazy Page 2',
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: lazy(
      () =>
        import(
          /* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'
        )
    ),
    name: 'Lazy Page 3',
  },
];
