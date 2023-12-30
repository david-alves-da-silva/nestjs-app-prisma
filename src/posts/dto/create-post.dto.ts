import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: 'Título do post do usuário.' })
  @IsString()
  @IsNotEmpty()
  title: string;
  @ApiProperty({ description: 'Conteúdo do post.' })
  @IsString()
  @IsOptional()
  content?: string;
  @ApiProperty({ description: 'Email do autor do post.' })
  @IsEmail()
  authorEmail: string;
}
