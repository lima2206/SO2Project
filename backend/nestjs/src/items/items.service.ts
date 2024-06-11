import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { EntityManager, Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemsService {

  constructor(
    @InjectRepository(Item)
    private readonly itemsRepository: Repository<Item>,
    private readonly entityManager: EntityManager
  ) {}

  async create(createItemDto: CreateItemDto) {
    const item = new Item(createItemDto);
    await this.entityManager.save(item);
  }

  async findAll() {
    return this.itemsRepository.find();
  }

  async findOne(id: number) {
    return this.itemsRepository.findOneBy({ id });
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const item = await this.itemsRepository.findOneBy({ id });
    item.nome = updateItemDto.nome;
    item.foto = updateItemDto.foto;
    item.descricao = updateItemDto.descricao
    item.valor_compra = updateItemDto.valor_compra;
    item.valor_venda = updateItemDto.valor_venda;
    item.quantidade_estoque = updateItemDto.quantidade_estoque;
    item.estoque_min = updateItemDto.estoque_min;
    item.categoria = updateItemDto.categoria;
    item.local_estoque = updateItemDto.local_estoque;
    item.info_extra = updateItemDto.info_extra;

    await this.entityManager.save(item);
  }

  async remove(id: number) {
    return this.itemsRepository.delete(id)
  }
}
