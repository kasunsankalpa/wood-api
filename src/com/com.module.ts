import { Module } from '@nestjs/common';
import { ComController } from './com.controller';
import { ComService } from './com.service';
import { Com } from 'src/entity/com.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Com])
  ],
  controllers: [ComController],
  providers: [ComService]
})
export class ComModule {}
