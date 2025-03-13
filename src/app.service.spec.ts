import { Test, TestingModule } from '@nestjs/testing';
import { QuotesService } from './app.service';

describe('QuotesService', () => {
  let service: QuotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuotesService],
    }).compile();

    service = module.get<QuotesService>(QuotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a random quote', () => {
    const quote = service.getRandomQuote();
    expect(quote).toHaveProperty('text');
    expect(quote).toHaveProperty('author');
  });

  it('should return all quotes', () => {
    const quotes = service.getAllQuotes();
    expect(Array.isArray(quotes)).toBe(true);
    expect(quotes.length).toBeGreaterThan(0);
  });

  it('should add a new quote', () => {
    const initialQuotes = service.getAllQuotes();
    const newQuote = { text: '테스트 명언입니다', author: '테스트 작성자' };
    service.addQuote(newQuote);
    
    const updatedQuotes = service.getAllQuotes();
    expect(updatedQuotes.length).toBe(initialQuotes.length);
    expect(updatedQuotes).toContainEqual(newQuote);
  });
});
