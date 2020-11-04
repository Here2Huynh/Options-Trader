import Home from "./components/Home.vue";
import Portfolio from "./components/portfolio/Portfolio.vue";
import Stocks from "./components/stocks/Stocks.vue";
import Options from "./components/options/Options.vue";

export const routes = [
  {
    path: "/",
    component: Options,
  },
  {
    path: "/portfolio",
    component: Portfolio,
  },
  {
    path: "/stocks",
    component: Stocks,
  },
  // {
  //   path: "/options",
  //   component: Options,
  // },
];
