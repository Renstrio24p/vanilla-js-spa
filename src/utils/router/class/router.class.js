
export class JSRouter {
   routes = [];

  constructor(routes) {
    this.routes = routes;
    window.addEventListener('popstate', this.handlePopState.bind(this));
    this.handlePopState();
  }

   handlePopState() {
    const currentPath = window.location.pathname;
    const matchingRoute = this.findMatchingRoute(currentPath, this.routes);

    if (matchingRoute) {
      const errorElement = document.createElement('div'); 
      matchingRoute.element(errorElement);
    } else {
      const notFoundRoute = this.findMatchingRoute('*', this.routes); 
      if (notFoundRoute) {
        const errorElement = document.createElement('div'); 
        notFoundRoute.element(errorElement);
      }
    }
  }

   findMatchingRoute(path, routes) {
    for (const route of routes) {
      const routePath = route.path;
      const isDefaultRoute = routePath === '*';

      if (!isDefaultRoute) {
        const paramNames = [];
        const regexPattern = routePath.replace(/:[^\s/]+/g, (match) => {
          paramNames.push(match.substring(1));
          return '([^\\s/]+)';
        });

        const regex = new RegExp(`^${regexPattern}(?:/|$)`);
        const match = path.match(regex);

        if (match) {
          const params = {};
          paramNames.forEach((name, index) => {
            params[name] = match[index + 1];
          });

          if (route.children) {
            const nestedPath = path.slice(match[0].length);
            const matchingChild = this.findMatchingRoute(nestedPath, route.children);
            if (matchingChild) {
              matchingChild.params = params;
              return matchingChild;
            }
          }

          return { ...route, params };
        }
      } else {
        return route; 
      }
    }

    return undefined;
  }

  navigate(path) {
    history.pushState(null, '', path);
    this.handlePopState();
  }
}
