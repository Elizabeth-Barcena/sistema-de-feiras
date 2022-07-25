import { ApiProperty } from '@nestjs/swagger';

export class CreateFeiraDto {
  @ApiProperty({ description: 'Data da feira' })
  'data': Date;
  @ApiProperty({ description: 'Local que será realizado a feira' })
  'local': string;
  @ApiProperty()
  'createdAt': Date;
  @ApiProperty()
  'updatedAt': Date;
}
