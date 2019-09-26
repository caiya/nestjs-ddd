export interface ConverterInterface<Domain, Entity> {

    toEntity(t: Domain): Entity; // 将领域对象转为dataobject

    toDomain(r: Entity): Domain; // 将dataobject转为领域对象
}
