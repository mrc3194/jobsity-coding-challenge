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

interface Palette {
    type: string;
    common: Common;
    text: Text;
    button: Button;
    loading: Loading;
    input: Input;
    divider: string;
}

export interface ThemeContextProps {
    device: Device,
    palette: Palette
}