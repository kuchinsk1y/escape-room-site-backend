import { Injectable } from '@nestjs/common';
import { UserDataService } from './user.data-service';

@Injectable()
export class UserService {
  constructor(private userData: UserDataService) {}

  findAll() {
    return this.userData.findAll();
  }

  create(data: { email: string; name?: string }) {
    return this.userData.create(data);
  }
}
