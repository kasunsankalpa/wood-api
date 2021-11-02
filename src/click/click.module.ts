import { Module } from '@nestjs/common';
import { ClickService } from './click.service';
import { ClickController } from './click.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Click } from 'src/entity/click.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Click])],
  providers: [ClickService],
  controllers: [ClickController]
})
export class ClickModule { }
