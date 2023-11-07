import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';


// 데코레이터 - 클래스에 함수 기능을 추가할 수 있음 / 클래스 위의 함수. 클래스를 위해 움직임 / 데코레이터는 꾸며주는 함수나 클래스랑 붙어있어야함
// 컨트롤러 - 기본적으로 url 가져오고, 함수를 실행함(express의 라우터같은 존재)
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
