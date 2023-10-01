import type { Languages } from "@/types/languages";

export const years = [
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
] as const;

export type Years = (typeof years)[number];

type DocumentsPages = Record<Years, Record<Languages, string>>;

export const documentsPages: DocumentsPages = {
  "2016": {
    it: "16sJxj4IbZpr8qagch1-GD4Cn12uqRzEO",
    de: "1mYneXwuMEKJKYhw0JUpGUfgv84ppAm-H",
  },
  "2017": {
    it: "1hoF-kYv5FGr2wSuSl67Ihe8IIB3m43Kq",
    de: "1s6WW7Cpzk0kuEUWNgfdBQlDRMSvO5PJ-",
  },
  "2018": {
    it: "1sloNw0tU6WnmTODKfwFEwtB9-ms9wOuh",
    de: "1r-W_UXdGORRO9a6sHo6V62DTkRiaBHLE",
  },
  "2019": {
    it: "1_uvCn8zfDv3iOJLlkjpL3fB1YhfoFGG9",
    de: "1hBTL51VZvfzhH-u8uXnfnlDKxqLNaM4j",
  },
  "2020": {
    it: "1GxT51n11ULQ-t2CVNRY2GG-6PkwlnjrU",
    de: "1MaVR9KMEVmgaS_jidSMyPdVtN0hpV-d3",
  },
  "2021": {
    it: "1kDCZLqVTaSpGJ8njojyu8Pn0DPRGfhND",
    de: "1SQmZ7pne1H83pQ8QHx8Mg43EJVG801Vn",
  },
  "2022": {
    it: "1ySWSC5rIM1C7bBAUYtDIGMMwZ5twbEud",
    de: "1MwTl1mxh0b-rYZhtlY2NAxHzyKnal7V8",
  },
};
