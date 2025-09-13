import { Router, Request, Response } from "express";
import { CreateUserDto, UsersService } from "./users.service";
import { error } from "console";

export class UsersController {
    public router = Router()
    public usersService = new UsersService()

    constructor(){
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.post('/users/register', this.register)
    }

    private register = async (req: Request, res: Response) => {
        try{
            const userDate: CreateUserDto = req.body

            const newUser = await this.usersService.create(userDate)

            return res.status(201).json(newUser)
        } catch (error) {
            if (error instanceof Error){
                res.status(409).json({message: error.message})
            } else {
                res.status(500).json({message: 'An unexpected error occured'})
            }
        }
    }
    
}