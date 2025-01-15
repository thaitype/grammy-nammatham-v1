import 'reflect-metadata';
import { NammathamApp } from 'nammatham';
import { TelegramBotFunction } from './functions/get-user.function';
import { BotService, BotServiceOptions } from './services/bot.service';
import { Tokens } from './constants';

const builder = NammathamApp.createBuilder(__filename);
builder.addFunctions(TelegramBotFunction);

// TODO: Migrate to Zod Schema for validation environment variables
if (!process.env.BOT_TOKEN) {
  throw new Error('BOT_TOKEN is required');
}

/**
 * Register Singleton Service
 */
builder.services.addSingleton(BotService);
builder.container.bind<BotServiceOptions>(Tokens.BotServiceOptions).toConstantValue({
  botToken: process.env.BOT_TOKEN,
});

builder.build();

export default builder.getApp();
