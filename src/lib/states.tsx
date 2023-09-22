import { atom, RecoilState } from "recoil";

export const upLoadImageBoolState = atom<boolean>({
  key: "UpLoadImageBoolState",
  default: false,
});

export const depositAmountState = atom<number>({
  key: "DepositAmountState",
  default: 0,
});

export const isSignedIn = atom<boolean>({
  key: "IsSignedIn",
  default: false,
});
