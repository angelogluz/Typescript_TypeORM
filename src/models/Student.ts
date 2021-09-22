import { IsEmail, Max, MaxLength, Min, MinLength } from 'class-validator';
import dotenv from 'dotenv';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MyCrypto } from '../helpers/crypto';
import Discipline from './Discipline';

dotenv.config();
@Entity('student')
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
    transformer: MyCrypto,
  })
  @MaxLength(50, { message: 'Nome precisar no máximo 50 caracteres' })
  @MinLength(2, { message: 'Nome deve possuir no mínimo 1 caractere' })
  name: string;

  @Column()
  @Max(99999, { message: 'Chave inválida' })
  @Min(10000)
  key: number;

  @Column({
    transformer: MyCrypto,
  })
  @IsEmail()
  email: string;

  @ManyToMany(type => Discipline, { eager: true })
  @JoinTable()
  discipline: Discipline[];

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
