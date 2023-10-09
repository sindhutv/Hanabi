// src/form/form.controller.ts
import { Controller, Post, Get, Body } from '@nestjs/common';
import { FormService } from './form.service';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  async createForm(@Body() formData: any) {
    return this.formService.create(formData);
  }

  @Get()
  async getAllForms() {
    return this.formService.findAll();
  }
}
