import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";


@Entity({ name: "action_logs" })
export class ActionLog {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name: "action_type", type: "varchar", length: 50 })
    actionType!: string;

    @Column({ name: "entity_type", type: "varchar", length: 50, nullable: true })
    entityType!: string;

    @Column({ name: "entity_id", type: "int", nullable: true })
    entityId!: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user!: User;

    @CreateDateColumn({ name: "created_at", type: "datetime2" })
    createdAt!: Date;

}