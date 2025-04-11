// Otro ejemplo de SINGLETON, ahora para configuración global de la app
export class AppConfig {
    static instance;
    apiUrl;

    constructor() {
        if (AppConfig.instance) {
            return AppConfig.instance;
        }
        this.apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
        AppConfig.instance = this;
    }

    static getInstance() {
        if (!AppConfig.instance) {
            AppConfig.instance = new AppConfig();
        }
        return AppConfig.instance;
    }
}
