import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import Lesson from './Lesson';

@Entity('content')
export default class Content {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(type => Lesson, content => Content)
  @JoinColumn()
  lesson: Lesson;

  @Column()
  description: string;

  @Column()
  linkContent: string;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
