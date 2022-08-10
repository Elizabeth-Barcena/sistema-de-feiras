import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArremateService } from './arremate.service';
import { CreateArremateDto } from './dto/create-arremate.dto';
import { UpdateArremateDto } from './dto/update-arremate.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Arremate')
@Controller('arremate')
export class ArremateController {
  constructor(private readonly arremateService: ArremateService) {}

  @Post()
  async create(@Body() createArremateDto: CreateArremateDto) {
    const response = await this.arremateService.cadastroDeArremate(
      createArremateDto,
    );
    console.log(response);
    return response;
  }

  @Get()
  findAll() {
    return this.arremateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') feiraId: string) {
    return this.arremateService.findOne(+feiraId);
  }

  @Patch(':id')
  update(
    @Param('id') feiraId: string,
    @Body() updateArremateDto: UpdateArremateDto,
  ) {
    return this.arremateService.update(+feiraId, updateArremateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.arremateService.remove(+id);
  }
}
