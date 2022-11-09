import { ApiProperty } from '@nestjs/swagger';
import { BaseDTO } from '../base.dto';

export class CreateUserDto extends BaseDTO {
  @ApiProperty()
  name: string;

  @ApiProperty({ type: Number })
  age: number;

  @ApiProperty()
  description: string;
}
