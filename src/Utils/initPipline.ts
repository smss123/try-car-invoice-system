import { INestApplication, ValidationPipe } from "@nestjs/common";

export function initPipline(app: INestApplication) {
    app.useGlobalPipes(new ValidationPipe());
}
