import type { Languages } from "@/types/languages";

export const years = [
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
] as const;

export type Years = (typeof years)[number];

type DocumentsPages = Record<Years, Record<Languages, string>>;

export const documentsPages: DocumentsPages = {
  2016: {
    it: "16sJxj4IbZpr8qagch1-GD4Cn12uqRzEO",
    de: "1mYneXwuMEKJKYhw0JUpGUfgv84ppAm-H",
  },
  2017: {
    it: "1hoF-kYv5FGr2wSuSl67Ihe8IIB3m43Kq",
    de: "1s6WW7Cpzk0kuEUWNgfdBQlDRMSvO5PJ-",
  },
  2018: {
    it: "1sloNw0tU6WnmTODKfwFEwtB9-ms9wOuh",
    de: "1r-W_UXdGORRO9a6sHo6V62DTkRiaBHLE",
  },
  2019: {
    it: "1_uvCn8zfDv3iOJLlkjpL3fB1YhfoFGG9",
    de: "1hBTL51VZvfzhH-u8uXnfnlDKxqLNaM4j",
  },
  2020: {
    it: "1GxT51n11ULQ-t2CVNRY2GG-6PkwlnjrU",
    de: "1MaVR9KMEVmgaS_jidSMyPdVtN0hpV-d3",
  },
  2021: {
    it: "1kDCZLqVTaSpGJ8njojyu8Pn0DPRGfhND",
    de: "1SQmZ7pne1H83pQ8QHx8Mg43EJVG801Vn",
  },
  2022: {
    it: "1ySWSC5rIM1C7bBAUYtDIGMMwZ5twbEud",
    de: "1MwTl1mxh0b-rYZhtlY2NAxHzyKnal7V8",
  },
  2023: {
    it: "1q40gIqxzJ605F0zYqFYp7e6lK1XYeaYk",
    de: "1Pb66ClHo-9LMs1GGGDumzEfGtUykizrN",
  },
  2024: {
    it: "1PHYYTY18bpxy-v7EWc920Nwf-dovuGvF",
    de: "170Yb9Dlt1woDTnMnpSdaFfjTBQ2lWZ-e",
  },
  2025: {
    it: "1dyCcGnvJQ6rCRC3Quf_tW-Kyls7RhP-2",
    de: "1gykyOp5_d9bYR0jxTF2sKlYTIjszhk6r",
  },
};
