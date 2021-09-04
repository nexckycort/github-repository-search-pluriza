export interface Read<T> {
  findOne: (key: string) => Promise<T>
}
