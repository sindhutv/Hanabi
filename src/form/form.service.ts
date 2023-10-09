// src/form/form.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form } from './form.model';

@Injectable()
export class FormService {
  constructor(@InjectModel(Form.name) private readonly formModel: Model<Form>) {}

  async create(formData: any): Promise<Form> {
    const createdForm = new this.formModel(formData);
    return createdForm.save();
  }

  async findAll(): Promise<Form[]> {
    return this.formModel.find().exec();
  }
}
