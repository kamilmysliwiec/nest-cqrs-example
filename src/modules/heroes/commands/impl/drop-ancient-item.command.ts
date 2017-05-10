import { ICommand } from 'nest-cqrs';

export class DropAncientItemCommand implements ICommand {
    constructor(
        public readonly heroId: string,
        public readonly itemId: string) {}
}