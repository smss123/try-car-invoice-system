import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from './entities/product.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [MikroOrmModule.forFeature({ entities: [Product] })],
  exports: [ProductService],
})
export class ProductModule {}
