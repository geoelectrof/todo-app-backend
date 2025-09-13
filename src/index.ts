import express from "express";
import { AppDataSource } from "./data-source";
import { UsersController } from "./api/users/users.controller";

const app = express();
const port = 3000;

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((error) => {
        console.error("Error during Data Source initialization", error);
    });

// app.get("/", (req, res) => {
//     res.send("Hello New World");
// });

    app.use(express.json())

    const usersController = new UsersController()   
    app.use('/api', usersController.router)

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
});