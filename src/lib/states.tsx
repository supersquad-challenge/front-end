import { atom, RecoilState } from "recoil";

export const isImageUploadedState = atom<boolean>({
  key: "IsImageUploadedState",
  default: false,
});

export const depositAmountState = atom<number>({
  key: "DepositAmountState",
  default: 0,
});

export const paymentMethodState = atom<string>({
  key: "PaymentMethodState",
  default: "",
});

export const isSignedInState = atom<boolean>({
  /////여기 바꿔서
  key: "IsSignedInState",
  default: false,
});

export const isPaidWithCrpytoState = atom<boolean>({
  key: "IsPaidWithCrpytoState",
  default: false,
});

export const isPaybackReceivedState = atom<boolean>({
  key: "IsPaybackReceivedState",
  default: false,
});

export const userInfoIdState = atom<string>({
  key: "UserInfoIdState",
  default: "65157f55a2418f903092babd",
});

export const registerChallengeIdState = atom<string>({
  key: "RegisterchallengeIdState",
  default: "",
});
