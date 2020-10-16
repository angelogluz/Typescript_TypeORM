import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import dotenv from 'dotenv';

import { IsEmail, Max, Min, MaxLength, MinLength } from 'class-validator';
import Discipline from './Discipline';
import { MyCrypto } from '../helpers/crypto';

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

  @ManyToMany(type => Discipline)
  @JoinTable()
  discipline: Discipline;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
