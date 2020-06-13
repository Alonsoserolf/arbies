import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm'
import { InvoiceModule } from './invoice/invoice.module';
import {HumanModule } from './human/human.module';

@Module({
  imports: [
    InvoiceModule,
    HumanModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'alonsogonzalez',
      password: '',
      database: 'alonsogonzalez',
      entities: ['dist/**/*.model.js'],
      synchronize: true, // false in prod, use migrations instead.
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
