import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { throwError } from 'rxjs';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly entityManager: EntityManager
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = new User(createUserDto)
    await this.entityManager.save(user);
  }

  async authenticate(authUserDTO: CreateUserDto):Promise<Boolean> {
    const email = authUserDTO.email
    const password = authUserDTO.password

    const user = await this.usersRepository.findOne({ where: {email} })
      if (user && user.password === password){
        return true

    }else{
      throw new UnauthorizedException('Credênciais invalidas')
    }
  }

  async findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({ id })
    user.email = updateUserDto.email
    user.password = updateUserDto.password

    await this.entityManager.save(user)
  }

  remove(id: number) {
    return this.usersRepository.delete( id );
  }
}
