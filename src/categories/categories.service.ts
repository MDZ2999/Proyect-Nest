import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {
  constructor(
      @InjectRepository(Category) 
      private categoryRepository: Repository<Category>
    ){ }
  
  
  async create(createCategoryDto: CreateCategoryDto) {
      const categories = this.categoryRepository.create(createCategoryDto);
      return await this.categoryRepository.save(categories);
    }
  
  async findAll() {
    const categories = await this.categoryRepository.find();
    return categories;
  }

  async findOne(id: number) {
    const categories = await this.categoryRepository.findOneBy({id});
    if (!categories) {
      throw new NotFoundException(`La categoría con el id ${id} no fue encontrada`);
    }
    return categories;
  }
  
  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const categories = await this.categoryRepository.findOneBy({id});
    if (!categories) {
      throw new NotFoundException(`La categoría con el id ${id} no fue encontrada`);
    }
    const updatedCategories = this.categoryRepository.merge(categories, updateCategoryDto);
    return await this.categoryRepository.save(updatedCategories);
  }
  
  async remove(id: number) {
    const categories= await this.categoryRepository.findOneBy({id});
    if (!categories) {
      throw new NotFoundException(`La categoría con el id ${id} no fue encontrada`);
    }
    await this.categoryRepository.delete(id);
    return {
      message: `La categoría con el id ${id} ha sido eliminada`
    }
  }
}
