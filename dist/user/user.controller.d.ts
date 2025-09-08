import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<import("./user.model").User[]>;
    createUser(body: {
        email: string;
        password: string;
        name?: string;
    }): Promise<import("./user.model").User>;
}
