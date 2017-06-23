import config from '../config';

export default class LocalStorageManager
{
    static get(field)
    {
        if (LocalStorageManager._contains())
        {
            const data = JSON.parse(localStorage.getItem(config.localStorage.name));
            if (!field) return data;
            if (data[field]) return data[field];
        }
        return undefined;
    }

    static set(field, data = {})
    {
        let dataToStorage = [];

        if (field)
        {
            dataToStorage = this.get();

            if (!dataToStorage) { dataToStorage = {}; }
            if (dataToStorage) { dataToStorage[field] = data; }
        }
        localStorage.setItem(config.localStorage.name, JSON.stringify(dataToStorage));
    }

    static _contains()
    {
        return localStorage.getItem(config.localStorage.name) ? true : false;
    }
}
