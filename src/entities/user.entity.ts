import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Role } from "./role.entity";

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column({ type: "varchar", length: 255, unique: true })
    email!: string;

    @Column({ type: "varchar", length: 255 })
    password!: string; // Note: We will hash this later

    @Column({ type: "varchar", length: 255, nullable: true })
    nickname!: string;

    @ManyToOne(() => Role)
    @JoinColumn({ name: "role_id" })
    role!: Role;

    @CreateDateColumn({ name: "created_at", type: "datetime2" })
    createdAt!: Date;

    @UpdateDateColumn({ name: "updated_at", type: "datetime2" })
    updateAt!: Date
}