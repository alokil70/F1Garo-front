export class AddAnimal {
    static readonly type = '[Zoo] Add Animal';
    constructor(private name: string) {}
}

export class GetInitialState {
    static readonly type = '[InitialState] Get';
}

export class GetOrdersState {
    static readonly type = '[GetOrders] Get Orders';
    constructor() {}
}

export class DeleteAnimal {
    static readonly type = '[Zoo] Delete Animal';
    constructor(private name: string) {}
}
