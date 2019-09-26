export interface BaseAssembler<Entity, DomainEntity, DTO> {

    applyEntityToDto(entity: Entity): Promise<DTO>; // po -> dto

    applyDomainToDto(domainEntity: DomainEntity): Promise<DTO>; // domain -> dto
}
