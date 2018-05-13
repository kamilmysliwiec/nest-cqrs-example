import { ICommand } from '@nestjs/cqrs';

export class DropAncientItemCommand implements ICommand {
  constructor(public readonly heroId: string, public readonly itemId: string) {}
}
