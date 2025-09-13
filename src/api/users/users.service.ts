import * as bcrypt from "bcrypt";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { Role } from "../../entities/role.entity";

export interface CreateUserDto {
    name: string;
    password: string;
    email: string;
    nickname?: string;
}

export class UsersService {
    private userRepository = AppDataSource.getRepository(User);
    private roleRepository = AppDataSource.getRepository(Role);

    async create(userData: CreateUserDto){
        const existingUser = await this.userRepository.findOneBy({
            email: userData.email
        })
        if (existingUser) {
            throw new Error('User with this email already exists.')
        }

        const hashedPassword = await bcrypt.hash(userData.password, 10)

        const userRole = await this.roleRepository.findOneBy({
            name: 'user'
        })
        if (!userRole){
            throw new Error("Default 'user' role not found. Please seed the database.")
        }

        let newUser = this.userRepository.create({
            ...userData,
            password: hashedPassword,
            role: userRole
        })

        await this.userRepository.save(newUser)

        // Remove password from the returned user object in a type-safe way
        const { password, ...userWithoutPassword } = newUser
        return userWithoutPassword
    }
}