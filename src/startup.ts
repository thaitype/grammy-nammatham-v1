import 'reflect-metadata';
import { NammathamApp } from 'nammatham';
import { GetUserFunction } from './functions/get-user.function';
import { UserService } from './services/user.service';

const builder = NammathamApp.createBuilder(__filename);
builder.addFunctions(GetUserFunction);
builder.configureServices(services => {
  services.addSingleton(UserService);
});

builder.build();

export default builder.getApp();
