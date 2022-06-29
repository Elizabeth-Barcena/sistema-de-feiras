import { ApiProperty } from '@nestjs/swagger';

class cadatroDeFeirasDto {
  @ApiProperty({ description: 'Data da feira' })
  'Data': Date;
  @ApiProperty({ description: 'Local que será realizado a feira' })
  'Local': string;
  @ApiProperty()
  'createdAt': string;
  @ApiProperty()
  'updatedAt': string;
}
export default cadatroDeFeirasDto;
