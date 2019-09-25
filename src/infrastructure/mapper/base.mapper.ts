import { InjectRepository } from "@nestjs/typeorm";
import { Repository, FindManyOptions } from "typeorm";

export abstract class BaseMapperService<T>{

    constructor(protected repo: Repository<T>) {}

    async find(id: number): Promise<T> {
        return await this.repo.findOne(id)
    }

    async findAll(options: FindManyOptions<T>): Promise<T[]> {
        return await this.repo.find(options)
    }

    async delete(id: number): Promise<boolean> {
        const deleteResult = await this.repo.delete(id)
        return deleteResult.affected > 0
    }

    async findWithPage(options: FindManyOptions<T>) {
        return await this.repo.findAndCount(options)
    }

    async add(t: T): Promise<T> {
        const insertResult = await this.repo.insert(t)
        return insertResult.raw
    }

    async update(id: number, t: T): Promise<T> {
        const updateResult = await this.repo.update(id, t)
        return updateResult.raw
    }
}