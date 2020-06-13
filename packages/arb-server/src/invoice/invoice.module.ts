import { HumanModule } from '../human/human.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceResolver } from './invoice.resolver';
import { InvoiceModel } from './invoice.model';
import { ConfigModule } from '../shared/config'

@Module({
  imports: [
    TypeOrmModule.forFeature([InvoiceModel]),
    forwardRef(() => HumanModule),
    ConfigModule // required this to use config service
  ],
  providers: [InvoiceService, InvoiceResolver],
  exports: [InvoiceService]
})
export class InvoiceModule {}
