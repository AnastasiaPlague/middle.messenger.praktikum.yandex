import { expect } from "chai";
import Router from "./Router";
import { Block } from "./Block";
import { Routes } from "const";

describe("Router", () => {
  beforeEach(() => {
    Router.routes = [];
    Router.use(Routes.Index, MockBlock);
    Router.use(Routes.Register, MockBlock);
  });

  class MockBlock extends Block {}

  it("Router should accept new routes with .use()", () => {
    const routesLength = Router.routes.length;

    expect(routesLength).to.equal(2);
  });

  it("Router should navigate to /", () => {
    const route = Routes.Index;

    Router.go(route);

    const currentRoute = Router.currentRoute?.getPathname();

    expect(currentRoute).to.equal(route);
  });

  it("Router should navigate back with .back()", () => {
    const routeFirst = Routes.Index;
    const routeBack = Routes.Register;

    Router.go(routeFirst);
    Router.go(routeBack);
    Router.back();

    const currentRoute = Router.currentRoute?.getPathname();

    expect(currentRoute).to.equal(routeBack);
  });

  it("Router should navigate forward with .forward()", () => {
    const route = Routes.Register;

    Router.go(route);
    Router.back();
    Router.forward();

    const currentRoute = Router.currentRoute?.getPathname();

    expect(currentRoute).to.equal(route);
  });
});
