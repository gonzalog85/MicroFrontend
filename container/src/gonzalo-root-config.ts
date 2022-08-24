import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@gonzalo/mf-header",
  app: () => System.import("@gonzalo/mf-header"),
  activeWhen: ["/"]
});
registerApplication({
  name: "@gonzalo/mf-main",
  app: () => System.import("@gonzalo/mf-main"),
  activeWhen: ["/"]
});
registerApplication({
  name: "@gonzalo/mf-images",
  app: () => System.import("@gonzalo/mf-images"),
  activeWhen: ["/"]
});
registerApplication({
  name: "@gonzalo/mf-footer",
  app: () => System.import("@gonzalo/mf-footer"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
