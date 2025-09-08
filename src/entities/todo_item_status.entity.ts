import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "todo_item_statuses" })
export class TodoItemStatus {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 50, unique: true })
    name!: string;

}