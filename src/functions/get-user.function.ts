import { BaseFunction, binding, functionName } from 'nammatham';
import { inject } from 'inversify';
import { UserService } from '../services/user.service';

const bindings = [
  binding.httpTrigger({ name: 'req' as const }), // make string to literal type
  binding.http({ name: 'res' as const }), // make string to literal type
] as const;

@functionName('getUser', ...bindings)
export class GetUserFunction extends BaseFunction<typeof bindings> {

  constructor(@inject(UserService) private userService: UserService){
    super();
  }
  
  public override execute() {
    const { req } = this.context.bindings;
    const name = req.query.name;
    if(name === undefined){
      this.res.send(`Nothing, please using /api/getUser?name=bobby`);
    } else {
      this.res.send(`Get user '${name}' using ${this.userService.getName()} framework`);
    }
  }
}
