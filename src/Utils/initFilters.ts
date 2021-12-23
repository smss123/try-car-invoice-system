import { INestApplication } from "@nestjs/common";
import { HttpExceptionFilter } from "./HttpExceptionFilter";

export function initFilters(app: INestApplication) {
    app.useGlobalFilters(new HttpExceptionFilter());
}
