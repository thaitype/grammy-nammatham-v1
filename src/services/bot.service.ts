import { inject, injectable } from 'inversify';
import { Tokens } from '../constants';
import { Bot } from 'grammy';

export interface BotServiceOptions {
  botToken: string;
}

@injectable()
export class BotService {

  bot: Bot;

  constructor(
    @inject(Tokens.BotServiceOptions) protected options: BotServiceOptions,
  ) {
    this.bot = new Bot(options.botToken);
  }

  public init(){
    this.bot.command("whoiam", async (ctx) => {
      await ctx.reply(`You're ${ctx.from?.first_name} (id: ${ctx.message?.from?.id}) from Azure Functions`);
    });
  }
}
