import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn
} from 'typeorm'

@Entity('Market')
export default class Market {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  sunday: string

  @Column()
  sunStart: string

  @Column()
  sunEnd: string

  @Column()
  monday: string

  @Column()
  monStart: string

  @Column()
  monEnd: string

  @Column()
  tuesday: string

  @Column()
  tueStart: string

  @Column()
  tueEnd: string

  @Column()
  wednesday: string

  @Column()
  wedStart: string

  @Column()
  wedEnd: string

  @Column()
  thursday: string

  @Column()
  thuStart: string

  @Column()
  thuEnd: string

  @Column()
  friday: string

  @Column()
  friStart: string

  @Column()
  friEnd: string

  @Column()
  saturday: string

  @Column()
  satStart: string

  @Column()
  satEnd: string
}
