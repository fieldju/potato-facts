export interface StreamDeckManifest {
    Actions: StreamDeckAction[]
    SDKVersion: number,
    Author: string,
    CodePath: string,
    Description: string,
    Name: string,
    NameSpace: string,
    Icon: string,
    URL: string,
    Version: string,
    OS: StreamDeckOS[]
    Software: { MinimumVersion: string }
}

export interface StreamDeckAction {
    Icon: string,
    Name: string,
    States: StreamDeckActionState[],
    SupportedInMultiActions: boolean,
    Tooltip: string,
    UUID: string
}

export interface StreamDeckActionState {
    Image: string,
    TitleAlignment: string,
    FontSize: string,
}

export interface StreamDeckOS {
    Platform: string,
    MinimumVersion: string
}