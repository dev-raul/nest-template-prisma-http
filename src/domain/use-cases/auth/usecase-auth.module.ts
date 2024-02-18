import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import { ServicesModule } from '@infra/http/services/services';
import { UseCaseCreateSignIn } from './create-signin';
import { UseCaseRefreshToken } from './refresh-token';

@Module({
  imports: [DatabaseModule, ServicesModule],
  providers: [UseCaseCreateSignIn, UseCaseRefreshToken],
  exports: [UseCaseCreateSignIn, UseCaseRefreshToken],
})
export class UseCaseAuthModule {}