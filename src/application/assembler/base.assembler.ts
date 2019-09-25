export interface BaseAssembler<Entity, DTO> {

    apply(entity: Entity): Promise<DTO>;
}
