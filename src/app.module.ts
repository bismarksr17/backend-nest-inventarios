import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/admin/users/users.module';
import { User } from './modules/admin/users/entities/user.entity';

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
        User
        //__dirname + './../**/*.entity{.ts, .js}' // busca todas las entidades
      ],
      synchronize: true  //migracion automatica desactivado
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
