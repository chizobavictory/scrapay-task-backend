import * as nocache from "nocache";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

function checkEnvironment(configService: ConfigService) {
  const requiredEnvVars = ["PORT", "AUTH0_AUDIENCE", "AUTH0_DOMAIN", "CLIENT_ORIGIN_URL"];

  requiredEnvVars.forEach((envVar) => {
    if (!configService.get<string>(envVar)) {
      throw Error(`Undefined environment variable: ${envVar}`);
    }
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  checkEnvironment(configService);

  app.use(nocache());

  app.enableCors({
    origin: configService.get<string>("CLIENT_ORIGIN_URL"),
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Authorization", "Content-Type"],
    maxAge: 86400,
  });


  await app.listen(configService.get<string>("PORT"));
}
bootstrap();
