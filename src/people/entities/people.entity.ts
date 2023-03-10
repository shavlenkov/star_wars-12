import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class People {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    height: number;
    @Column()
    mass: number;
    @Column()
    hair_color: string;
    @Column()
    skin_color: string;
    @Column()
    eye_color: string;
    @Column()
    birth_year: string;
    @Column()
    gender: string;

}