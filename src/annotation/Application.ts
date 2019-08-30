export default class Application {

    public static startup = (target: any) => {
        var main = Reflect.getMetadata('application', target, 'main');
        main.apply(target);
    }

    public static autostart = (target: any, key: string) => {
        Reflect.defineMetadata('application', target[key], target, key);
    }

}