export namespace Application {

    export const Startup = (target: any) => {
        var main = Reflect.getMetadata('application', target, 'main');
        main.apply(target);
    }

    export const Autostart = (target: any, key: string) => {
        Reflect.defineMetadata('application', target[key], target, key);
    }
}