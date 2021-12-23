import { Module } from '@nestjs/common';
import { InvoiceItemService } from './invoice-item.service';
import { InvoiceItemController } from './invoice-item.controller';
import { InvoiceItem } from './entities/invoice-item.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { InvoiceModule } from 'src/invoice/invoice.module';
import { ProductModule } from 'src/product/product.module';

@Module({
  controllers: [InvoiceItemController],
  providers: [InvoiceItemService],
  imports: [MikroOrmModule.forFeature({ entities: [InvoiceItem] })],
  exports: [InvoiceItemService],
})
export class InvoiceItemModule {}
