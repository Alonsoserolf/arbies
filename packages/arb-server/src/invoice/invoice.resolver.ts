import { HumanModel } from '../human/human.model'
import { HumanService } from '../human/human.service'
import { InvoiceService } from './invoice.service'
import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql'
import { Inject } from '@nestjs/common'
import { InvoiceModel } from './invoice.model'
import { CreateInvoiceDTO } from './invoice.dto'
import { ConfigService } from '../shared/config/config.service'

@Resolver((of) => InvoiceModel)
export class InvoiceResolver {
  constructor(
    @Inject(InvoiceService) private invoiceService: InvoiceService,
    @Inject(HumanService) private humanService: HumanService,
    @Inject(ConfigService) private readonly configService: ConfigService,
  ) {
    console.log(this.configService, 'foo')
    // console.log({humanService,invoiceService})
  }
  @Query((returns) => InvoiceModel)
  async invoice(@Args('id') id: string): Promise<InvoiceModel> {
    return await this.invoiceService.findOne(id)
  }

  @ResolveField((returns) => HumanModel)
  async customer(@Parent() invoice) {
    const { customer } = invoice
    return this.humanService.findOne(customer)
  }

  @Query((returns) => [InvoiceModel])
  async invoices(): Promise<InvoiceModel[]> {
    return await this.invoiceService.findAll()
  }

  @Mutation((returns) => InvoiceModel)
  async createInvoice(
    @Args('invoice') invoice: CreateInvoiceDTO,
  ): Promise<InvoiceModel> {
    return await this.invoiceService.create(invoice)
  }
}
