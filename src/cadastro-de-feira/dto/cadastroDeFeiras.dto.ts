import { ApiProperty } from '@nestjs/swagger';

class cadastroDeFeirasDto {
  @ApiProperty({ description: 'Data da feira' })
  'Data': Date;
  @ApiProperty({ description: 'Local que será realizado a feira' })
  'Local': string;
  @ApiProperty()
  'createdAt': Date;
  @ApiProperty()
  'updatedAt': Date;
}

export default cadastroDeFeirasDto;
