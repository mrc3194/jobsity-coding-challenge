export enum AuthOptions {
  PIN = "Pin",
  BIO = "Bio",
}

export interface LocalStorageAutoOptions {
  currentOption: string | null;
  pinCode: string | null;
}
