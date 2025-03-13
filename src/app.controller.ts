import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuotesService } from './app.service';

@Controller('quotes')
export class QuotesController {
  constructor(private quotesService: QuotesService) {}

  @Get('random')
  getRandomQuote() {
    return {
      success: true,
      data: this.quotesService.getRandomQuote(),
    };
  }

  @Get()
  getAllQuotes() {
    return {
      success: true,
      data: this.quotesService.getAllQuotes(),
    };
  }

  @Post()
  addQuote(@Body() quote: { text: string; author: string }) {
    return {
      success: true,
      data: this.quotesService.addQuote(quote),
    };
  }
}