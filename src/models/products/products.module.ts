import { Module } from '@nestjs/common';
import { S3Module } from 'src/modules/aws/s3/s3.module';
import { PrismaModule } from 'src/modules/prisma';
import { ImagesService } from '../images/images.service';
import { TypesService } from '../types/types.service';
import { VariationsService } from '../variations/variations.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController],
  imports: [PrismaModule, S3Module],
  providers: [ProductsService, ImagesService, TypesService, VariationsService],
})
export class ProductsModule {}
