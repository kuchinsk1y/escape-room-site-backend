import { UserDataService } from './user.data-service';
import { User } from './user.model';
export declare class UserService {
    private userData;
    constructor(userData: UserDataService);
    findAll(): Promise<User[]>;
    findByEmail(email: string): Promise<User | null>;
    create(data: {
        email: string;
        password: string;
        name?: string;
    }): Promise<User>;
}
