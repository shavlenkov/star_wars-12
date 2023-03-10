import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Planets {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    rotation_period: number;
    @Column()
    orbital_period:number;

}