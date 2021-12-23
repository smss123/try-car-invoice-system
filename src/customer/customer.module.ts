import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Customer } from 'src/customer/entities/customer.entity';
import { InvoiceModule } from 'src/invoice/invoice.module';
import { CustomerController } from './customer.controller';
import { CustomerRepository } from './Customer.Repository';
import { CustomerService } from './customer.service';
 
@Module({
    controllers: [CustomerController],
    providers: [CustomerService],
    imports: [MikroOrmModule.forFeature({ entities: [Customer] })],
    exports: [CustomerService],
})
export class CustomerModule {}
