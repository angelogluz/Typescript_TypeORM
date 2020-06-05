import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
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
}
