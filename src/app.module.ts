import { Module } from '@nestjs/common';
import { EmailModule } from './modules/emails/email.module';

@Module({
  imports: [EmailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
