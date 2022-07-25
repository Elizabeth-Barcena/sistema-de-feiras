import { PartialType } from '@nestjs/swagger';
import { CreateFeiraDto } from './create-feira.dto';

export class UpdateFeiraDto extends PartialType(CreateFeiraDto) {}
