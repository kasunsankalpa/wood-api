import { Module } from '@nestjs/common';
import { CtypeService } from './ctype.service';
import { CtypeController } from './ctype.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ctype } from 'src/entity/ctype.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ctype])
  ],
  providers: [CtypeService],
  controllers: [CtypeController]
})
export class CtypeModule { }
