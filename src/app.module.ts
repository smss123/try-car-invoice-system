import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';


import { CustomerModule } from './customer/customer.module';
import { InvoiceModule } from './invoice/invoice.module';
import { InvoiceItemModule } from './invoice-item/invoice-item.module';
import { ProductModule } from './product/product.module';
@Module({
  imports: [MikroOrmModule.forRoot(), CustomerModule, InvoiceModule, InvoiceItemModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
