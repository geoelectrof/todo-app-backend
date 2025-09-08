import "reflect-metadata";
import { DataSource } from "typeorm";
import { Role } from "./entities/role.entity";
import { User } from "./entities/user.entity";
import { TodoList } from "./entities/todo_list.entity";
import { TodoItemStatus } from "./entities/todo_item_status.entity";
import { TodoItem } from "./entities/todo_item.entity";
import { ActionLog } from "./entities/action_log.entity";

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "sa",
    password: "TodoAppDev123",
    database: "todo",
    synchronize: true,
    logging: false,
    entities: [Role, User, TodoList, TodoItemStatus, TodoItem, ActionLog],
    migrations: [],
    subscribers: [],
    extra: {
      trustServerCertificate: true,
    },
});

