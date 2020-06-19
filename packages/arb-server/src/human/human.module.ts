import { InvoiceModule } from '../invoice/invoice.module'
import { HumanModel } from './human.model'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module, forwardRef } from '@nestjs/common'
import { HumanService } from './human.service'
import { HumanResolver } from './human.resolver'

@Module({
  imports: [
    forwardRef(() => InvoiceModule),
    TypeOrmModule.forFeature([HumanModel]),
  ],
  providers: [HumanService, HumanResolver],
  exports: [HumanService],
})
export class HumanModule {}
