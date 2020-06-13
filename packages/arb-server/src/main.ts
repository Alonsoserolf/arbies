import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './shared/config'
import helmet from 'helmet';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();

class App {
  constructor(private readonly configService: ConfigService) {
    this.run();
  }
  async run(): Promise<void> {
    console.log(this.configService)
    const port = 3000 // get from config
    const app = await NestFactory.create(AppModule);
    app.use(helmet())
    await app.listen(port)
  }
}

new App(new ConfigService(`.env.${process.env.NODE_ENV || 'development'}`));
