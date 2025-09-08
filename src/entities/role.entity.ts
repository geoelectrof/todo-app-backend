import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "roles" })
export class Role {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 255, unique: true })
    name!: string;
}