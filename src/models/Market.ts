import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import Image from "./Image";

@Entity("Market")
export default class Market {
  @PrimaryGeneratedColumn("increment")
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
  days_is_opening: string;

  @OneToMany(() => Image, (image) => image.market, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "market_id" })
  images: Image[];
}
