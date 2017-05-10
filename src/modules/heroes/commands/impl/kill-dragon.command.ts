import { ICommand } from 'nest-cqrs';

export class KillDragonCommand implements ICommand {
    constructor(
        public readonly heroId: string,
        public readonly dragonId: string) {}
}