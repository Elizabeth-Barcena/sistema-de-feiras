import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Req,
} from '@nestjs/common';
import { FeirasService } from './feiras.service';
import { CreateFeiraDto } from './dto/create-feira.dto';
import { UpdateFeiraDto } from './dto/update-feira.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Feiras ')
@Controller('feiras')
export class FeirasController {
  constructor(private readonly feirasService: FeirasService) {}

  @Post()
  async create(@Body() CreateFeiraDto: CreateFeiraDto) {
    const response = await this.feirasService.cadastroDeArremate(
      CreateFeiraDto,
    );
    console.log(response);
    return response;
  }

  @Get()
  findAll() {
    return this.feirasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feirasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFeiraDto: UpdateFeiraDto) {
    return this.feirasService.update(+id, updateFeiraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feirasService.remove(+id);
  }
}
