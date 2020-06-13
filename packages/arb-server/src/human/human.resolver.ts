import { InvoiceModel } from '../invoice/invoice.model';
import { InvoiceService } from '../invoice/invoice.service';
import { HumanService } from './human.service';
import { HumanModel } from './human.model';
import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

@Resolver(of => HumanModel)
export class HumanResolver {
  constructor(
    @Inject(HumanService) private humanService: HumanService,
    @Inject(InvoiceService) private invoiceService: InvoiceService
  ) {
    console.log({humanService,invoiceService})
   }

  @Query(returns => HumanModel)
  async human(@Args('id') id: string): Promise<HumanModel> {
    return await this.humanService.findOne(id);
  }

  @ResolveField(returns => [InvoiceModel])
  async invoices(@Parent() human) {
    const { id } = human;
    console.log(human);
    return this.invoiceService.findByCustomer(id);
  }

  @Query(returns => [HumanModel])
  async humans(): Promise<HumanModel[]> {
    return await this.humanService.findAll();
  }

  @Mutation(returns => HumanModel)
  async createHuman(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('phone', { nullable: true }) phone: string,
    @Args('address', { nullable: true }) address: string,
  ): Promise<HumanModel> {
    return await this.humanService.create({ name, email, phone, address })
  }
}
