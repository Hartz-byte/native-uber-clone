/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/sign-in` | `/(auth)/sign-up` | `/(auth)/welcome` | `/(auth)\_layout` | `/(auth)\sign-in` | `/(auth)\sign-up` | `/(auth)\welcome` | `/(root)` | `/(root)/(auth)` | `/(root)/(auth)/sign-in` | `/(root)/(auth)/sign-up` | `/(root)/(auth)/welcome` | `/(root)/(tabs)` | `/(root)/(tabs)/chat` | `/(root)/(tabs)/home` | `/(root)/(tabs)/profile` | `/(root)/(tabs)/rides` | `/(root)/chat` | `/(root)/home` | `/(root)/profile` | `/(root)/rides` | `/(root)/sign-in` | `/(root)/sign-up` | `/(root)/welcome` | `/(tabs)` | `/(tabs)/chat` | `/(tabs)/home` | `/(tabs)/profile` | `/(tabs)/rides` | `/..\components\CustomButton` | `/..\constants\` | `/_sitemap` | `/chat` | `/home` | `/profile` | `/rides` | `/sign-in` | `/sign-up` | `/welcome`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
