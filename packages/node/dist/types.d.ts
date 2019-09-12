declare module "@beam-australia/react-env" {

    function bindEnvVariables(): void;

    function env(key: string): string
}