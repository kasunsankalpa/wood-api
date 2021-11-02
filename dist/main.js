"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix("api");
    app.enableCors({
        origin: ['http://localhost:4200', 'http://localhost:4000', 'http://127.0.0.1:8080']
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map