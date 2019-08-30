enum OrderEnum {
    AIRPLANE,
    TRAIN,
    HOTEL,
    TEXI
}

class OrderEnumRef {
    static readonly AIRPLANE = new OrderEnumRef(OrderEnum.AIRPLANE, '1', 'airplane');
    static readonly TRAIN = new OrderEnumRef(OrderEnum.TRAIN, '2', 'train');
    static readonly HOTEL = new OrderEnumRef(OrderEnum.HOTEL, '3', 'hotel');
    static readonly TEXI = new OrderEnumRef(OrderEnum.TEXI, '4', 'texi');

    private constructor(private readonly key: OrderEnum, private readonly code: string, private readonly name: string) {}
}

export {OrderEnum, OrderEnumRef}