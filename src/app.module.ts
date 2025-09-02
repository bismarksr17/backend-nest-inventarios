import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '77663540',
      database: 'backend_nest_inventarios',
      entities: [
        __dirname + './../**/*.entity{.ts, .js}' // busca todas las entidades
      ],
      synchronize: false  //migracion automatica desactivado
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
