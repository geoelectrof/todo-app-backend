import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { TodoList } from "./todo_list.entity";
import { TodoItemStatus } from "./todo_item_status.entity";

@Entity({ name: "todo_items" })
export class TodoItem {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "text" })
    text!: string;

    @ManyToOne(() => TodoList)
    @JoinColumn({ name: "todo_list_id" })
    todoList!: TodoList;

    @ManyToOne(() => TodoItemStatus)
    @JoinColumn({ name: "status_id" })
    status!: TodoItemStatus;

    @ManyToOne((() => TodoItem))
    @JoinColumn({ name: "parent_id" })
    parent!: TodoItem;

    @CreateDateColumn({ name: "created_at", type: "datetime2" })
    createdAt!: Date;

    @UpdateDateColumn({ name: "updated_at", type: "datetime2" })
    updateAt!: Date
    

}
