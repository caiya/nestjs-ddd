export interface BaseAssembler<Entity, DomainEntity, DTO> {

    applyEntityToDto(entity: Entity): Promise<DTO>; // po -> dto

    applyDomainEntityToDto(domainEntity: DomainEntity): Promise<DTO>; // domain -> dto
}
