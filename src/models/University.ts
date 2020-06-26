import { Entity, Column } from 'typeorm';
import Identifier from './Identifier';

@Entity()
export default class University {
  @Column(type => Identifier)
  identification: Identifier;

  @Column()
  graduations: string;

  @Column()
  doctors: string;

  @Column()
  masters: string;
}
