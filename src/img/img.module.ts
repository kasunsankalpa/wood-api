import { Module } from '@nestjs/common';
import { ImgController } from './img.controller';
import { ImgService } from './img.service';
import { Img } from 'src/entity/img.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Img])
  ],
  controllers: [ImgController],
  providers: [ImgService]
})
export class ImgModule {}
