import { Module } from '@nestjs/common';
import { QuotesController } from './app.controller';
import { QuotesService } from './app.service';

@Module({
  imports: [],
  controllers: [QuotesController],
  providers: [QuotesService],
})
export class AppModule {}
