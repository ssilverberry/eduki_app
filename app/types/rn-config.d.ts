declare module 'react-native-config' {
  export interface NativeConfig {
    BEARER_TOKEN?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
