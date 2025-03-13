import { Test, TestingModule } from '@nestjs/testing';
import { QuotesController } from './app.controller';
import { QuotesService } from './app.service';

describe('QuotesController', () => {
  let controller: QuotesController;
  let service: QuotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuotesController],
      providers: [QuotesService],
    }).compile();

    controller = module.get<QuotesController>(QuotesController);
    service = module.get<QuotesService>(QuotesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a random quote', () => {
    const mockQuote = { text: '테스트 명언', author: '테스트 작가' };
    jest.spyOn(service, 'getRandomQuote').mockImplementation(() => mockQuote);

    const result = controller.getRandomQuote();
    
    expect(result).toEqual({
      success: true,
      data: mockQuote,
    });
    expect(service.getRandomQuote).toHaveBeenCalled();
  });

  it('should return all quotes', () => {
    const mockQuotes = [
      { text: '명언 1', author: '작가 1' },
      { text: '명언 2', author: '작가 2' },
    ];
    jest.spyOn(service, 'getAllQuotes').mockImplementation(() => mockQuotes);

    const result = controller.getAllQuotes();
    
    expect(result).toEqual({
      success: true,
      data: mockQuotes,
    });
    expect(service.getAllQuotes).toHaveBeenCalled();
  });

  it('should add a new quote', () => {
    const newQuote = { text: '새 명언', author: '새 작가' };
    jest.spyOn(service, 'addQuote').mockImplementation(() => newQuote);

    const result = controller.addQuote(newQuote);
    
    expect(result).toEqual({
      success: true,
      data: newQuote,
    });
    expect(service.addQuote).toHaveBeenCalledWith(newQuote);
  });
});
