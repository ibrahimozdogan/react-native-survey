export function memoize<T1> (fn: T1): (...args: any) => any {
    const cache: Record<string, any> = {};

    return function () {
        const key = [...arguments].map((value) => {
            if (typeof value === 'object') {
                return JSON.stringify(value);
            }

            return value;
        }).join('-');

        if (cache[key]) {
            return cache[key];
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line prefer-rest-params
        cache[key] = fn.apply(this, arguments);

        return cache[key];
    };
}
