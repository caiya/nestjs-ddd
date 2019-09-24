import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    userId: number;
}
