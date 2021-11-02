import { Module } from '@nestjs/common';
import { FeturesController } from './fetures.controller';
import { FeturesService } from './fetures.service';
import { Feture } from 'src/entity/Feture.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Feture])
  ],
  controllers: [FeturesController],
  providers: [FeturesService]
})
export class FeturesModule {}
