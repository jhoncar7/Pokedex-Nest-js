import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from 'src/config/env.config';
import { JoiValidationSchema } from './config/joi.validation';


@Module({
  imports: [

    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }), //para las variables de entorno

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),

    // MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    MongooseModule.forRoot(process.env.MONGODB),

    PokemonModule,

    CommonModule,

    SeedModule],
})
export class AppModule {

  constructor() {
    // console.log(process.env.PORT);
    // console.log(process.env.MONGODB);
  }

}