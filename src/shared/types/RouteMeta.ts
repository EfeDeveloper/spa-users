export interface RouteMeta {
  name: string
  path: string
}

export const MODULES = ['home', 'users'] as const
export type ModuleName = (typeof MODULES)[number]
export type RouteMap = Record<ModuleName, RouteMeta>
