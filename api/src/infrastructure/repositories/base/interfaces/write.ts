export interface Write<T> {
  create: (key: string, item: T) => Promise<T>
  delete: (key: any) => Promise<boolean>
}
