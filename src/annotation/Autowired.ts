import "reflect-metadata";

type Constructor<T = any> = new (...args: any[]) => T;

export const Autowired = <T>(clazz: Constructor<T>) => {
  return function (target: any, key: string) {
    const providers = Reflect.getMetadata('design:paramtypes', clazz);
    const args = providers.map((provider: Constructor) => new provider());

    Object.defineProperty(target, key, {
      value: new clazz(...args)
    });
  };
}

export const Injectable = (): ClassDecorator => target => {};