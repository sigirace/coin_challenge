import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

export const headerTitleAtom = atom({
  key: "headerTitle",
  default: "Coin Challenge",
});
