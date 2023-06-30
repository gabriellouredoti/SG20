import "@emotion/react";

declare module "@emotion/react" {
    export interface Theme {
        font?: {
            family: string;
            size: {
                small: string;
                medium: string;
                large: string;
            };
        };
        color: {
            primary: {
                main: string;
            };
            secondary: {
                main: string;
            };
            warning: {
                main: string;
            };
            success: {
                main: string;
            };
            error: {
                main: string;
            };
            neutral: {
                main: string;
            };
            teste: {
                main: string;
            };
            disabled: {
                main: string;
            };
        };
    }
}
