interface Device {
  width: number;
  height: number;
}

interface Common {
  white: string;
  black: string;
}

interface Text {
  primary: string;
  secondary: string;
  disabled: string;
  hint: string;
}

interface Button {
  primary: string;
  secondary: string;
  disabled: string;
  hint: string;
}

interface Input {
  color: string;
  backgroundColor: string;
  placeholder: string;
}

interface Loading {
  indicator: string;
}

interface Main {
  primary: string;
  secondary: string;
  accent: string;
  extra: string;
}

interface Palette {
  type: string;
  main: Main;
  common: Common;
  text: Text;
  button: Button;
  loading: Loading;
  input: Input;
  divider: string;
}

export interface ThemeContextProps {
  device: Device;
  palette: Palette;
}
