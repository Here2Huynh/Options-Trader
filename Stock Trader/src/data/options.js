export default [
  {
    id: 1,
    openDate: "2020/10/23",
    expiry: "2020/11/27",
    close: "2020/11/04",
    product: "INTC",
    type: "CSP",
    strike: 46.5,
    openPrice: 2.12,
    filledPrice: 1.97,
    pnl: 15,
    notes: "",
    adjustments: {
      rolled: {
        count: 1,
        pnl: 4,
      },
      wheel: {
        costBasis: 2500,
        pnl: 0,
        CC: 0,
        CSP: 0,
      },
    },
  },
  {
    id: 2,
    openDate: "2020/10/30",
    expiry: "2020/12/04",
    close: "-",
    product: "RKT",
    type: "CC",
    strike: 25,
    openPrice: 0.42,
    filledPrice: "-",
    pnl: "-",
    notes: "",
    adjustments: {
      rolled: null,
      wheel: {
        costBasis: 2500,
        pnl: ["+87", "+70", "-85", "+30", "+39"],
        CC: 2,
        CSP: 1,
      },
    },
  },
  {
    id: 3,
    openDate: "2020/11/05",
    expiry: "2020/12/11",
    close: "-",
    product: "MOS",
    type: "CSP",
    strike: 16,
    openPrice: 0.57,
    filledPrice: "-",
    pnl: "-",
    notes: "",
    adjustments: {
      rolled: null,
      wheel: null,
    },
  },
];
