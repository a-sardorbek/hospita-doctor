import { databaseConfig } from '@config';
import { DoctorModule, HospitalModule } from '@module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true,
    }),
    HospitalModule,
    DoctorModule
  ],
})
export class AppModule {}
