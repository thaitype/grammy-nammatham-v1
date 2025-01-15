import { BaseFunction, binding, functionName } from 'nammatham';
import { inject } from 'inversify';
import { BotService } from '../services/bot.service';
import { webhookCallback } from 'grammy';
import 'dotenv/config';

const bindings = [
  binding.httpTrigger({ name: 'req' as const, authLevel: 'anonymous', methods: ['get', 'post'] }), // make string to literal type
  binding.http({ name: 'res' as const }), // make string to literal type
] as const;

@functionName('telegramBot', ...bindings)
export class TelegramBotFunction extends BaseFunction<typeof bindings> {

  constructor(@inject(BotService) private botService: BotService) {
    super();
  }

  public override async execute() {
    this.botService.init();
    // TODO: Fix type `context` later, due to `grammy` library is not compatible with `@azure/functions` 3.x
    await webhookCallback(this.botService.bot, "azure")(this.context.req, this.context as any);
  }
}
