import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product } from 'src/entity/Product.entity';
import { Img } from 'src/entity/Img.entity';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ImgModule } from 'src/img/img.module';
import { Feture } from 'src/entity/Feture.entity';
import { FeturesModule } from 'src/fetures/fetures.module';

import { Com } from 'src/entity/com.entity';
import { ComModule } from 'src/com/com.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product , Img ,Feture ,Com]),
    ImgModule,
    FeturesModule,
    ComModule
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
