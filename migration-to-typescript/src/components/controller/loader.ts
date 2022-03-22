

interface IOptions{
    [key: string]: string;
}
class Loader {
    baseLink: string;
    options: {[key: string]:string}

    constructor(baseLink: string, options: { [keys: string]: string; }) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {}}:{endpoint: string; options?:  Record<string, string>},
        callback: <T>(data: T) => void = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response):Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    
    makeUrl(options: IOptions, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: <T>(data: T)=>void, options:  Record<string, string> )
     {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: string) => callback(data))
            .catch((err: string) => console.error(err));
    }
}

export default Loader;
