export interface ConverterInterface<T, R> {

    serialize(t: T): R; // 将领域对象转为dataobject

    deserialize(r: R): T; // 将dataobject转为领域对象
}
