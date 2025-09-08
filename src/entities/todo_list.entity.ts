import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity({ name: "todo_lists" })
export class TodoList {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 255 })
    title!: string;

    @Column({ type: "text", nullable: true })
    description!: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user!: User;

    @CreateDateColumn({ name: "created_at", type: "datetime2" })
    createdAt!: Date;

    @UpdateDateColumn({ name: "updated_at", type: "datetime2" })
    updateAt!: Date
}
