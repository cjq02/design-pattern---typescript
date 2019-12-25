import _ = require("lodash");

enum OrderEnum {
    AIRPLANE = "1",
    TRAIN = "2",
    HOTEL = "3",
    TEXI = "4"
}

class OrderEnumRef {
    static readonly AIRPLANE = new OrderEnumRef(OrderEnum.AIRPLANE, 'airplane');
    static readonly TRAIN = new OrderEnumRef(OrderEnum.TRAIN, 'train');
    static readonly HOTEL = new OrderEnumRef(OrderEnum.HOTEL, 'hotel');
    static readonly TEXI = new OrderEnumRef(OrderEnum.TEXI, 'texi');

    private constructor(private readonly key: OrderEnum, private readonly name: string) { }

    static getBykey(key: string) {
        const enumerate = _.findKey(OrderEnum, (v) => v === key)
        return this[enumerate];
    }
}

export { OrderEnum, OrderEnumRef }