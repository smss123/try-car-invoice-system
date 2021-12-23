import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { Invoice } from './entities/invoice.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { CustomerModule } from 'src/customer/customer.module';
import { InvoiceItemModule } from 'src/invoice-item/invoice-item.module';
@Module({
  controllers: [InvoiceController],
  providers: [InvoiceService],
  imports: [MikroOrmModule.forFeature({ entities: [Invoice] })],
  exports: [InvoiceService],
})
export class InvoiceModule {}
