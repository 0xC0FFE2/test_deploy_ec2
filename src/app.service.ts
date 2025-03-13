import { Injectable } from '@nestjs/common';

@Injectable()
export class QuotesService {
  private quotes = [
    { text: '실패는 성공의 어머니이다.', author: '토마스 에디슨' },
    { text: '행복은 습관이다. 그것을 몸에 지니라.', author: '허버트 제임스' },
    { text: '미래를 예측하는 최선의 방법은 미래를 창조하는 것이다.', author: '알랜 케이' },
    { text: '모든 일의 시작과 끝에는 열정이 있다.', author: '한석봉' },
    { text: '성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.', author: '톰 모나건' },
    { text: '나는 생각한다, 고로 나는 존재한다.', author: '데카르트' },
    { text: '인생은 자전거를 타는 것과 같다. 균형을 유지하려면 계속 움직여야 한다.', author: '알버트 아인슈타인' },
    { text: '너 자신을 알라.', author: '소크라테스' },
    { text: '할 수 있다고 믿는 사람은 결국 그렇게 된다.', author: '나폴레옹 힐' },
    { text: '오늘 할 수 있는 일을 내일로 미루지 마라.', author: '벤자민 프랭클린' },
  ];

  getRandomQuote() { 
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  }

  getAllQuotes() {
    return this.quotes;
  }

  addQuote(quote: { text: string; author: string }) {
    this.quotes.push(quote);
    return quote;
  }
}