import { app, router, store } from './app';

export default context => {
    return new Promise((resolve, reject) => {
        router.push(context.url);

        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents();
            if (!matchedComponents.length) {
                return reject({ code: 404 });
            }
            Promise.all(matchedComponents.map(component => {
                if (component.asyncData) {
                    return component.asyncData({
                        store
                    });
                }
            })).then(() => {
                context.state = store.state;
                resolve(app);
            }).catch(reject);
        },
        reject);
    });
};