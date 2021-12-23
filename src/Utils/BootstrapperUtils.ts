import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { initFilters } from "./initFilters";
import { initPipline } from "./initPipline";

export async function InitSwagger(app:INestApplication): Promise<void> {
    const config = new DocumentBuilder()
    .setTitle('Invoice System example')
    .setDescription('The Invoice API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  }


  export async function initlizer(app:INestApplication){
      await InitSwagger(app);
      await initPipline(app);
      await initFilters(app);
     
     
  }