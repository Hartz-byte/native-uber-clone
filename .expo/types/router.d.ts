/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/sign-in` | `/(auth)/sign-up` | `/(auth)/welcome` | `/(root)` | `/(root)/(tabs)` | `/(root)/(tabs)/chat` | `/(root)/(tabs)/home` | `/(root)/(tabs)/profile` | `/(root)/(tabs)/rides` | `/(root)/book-ride` | `/(root)/chat` | `/(root)/confirm-ride` | `/(root)/find-ride` | `/(root)/home` | `/(root)/profile` | `/(root)/rides` | `/(tabs)` | `/(tabs)/chat` | `/(tabs)/home` | `/(tabs)/profile` | `/(tabs)/rides` | `/_sitemap` | `/book-ride` | `/chat` | `/confirm-ride` | `/find-ride` | `/home` | `/profile` | `/rides` | `/sign-in` | `/sign-up` | `/welcome`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
