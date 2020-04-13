

async function omniPoller(queryStatus, successCallback) {
    let counter = 1;
    return new Promise(resolve => {
        if (queryStatus) {
            resolve(() => {
                successCallback();
            })
        }else {

            setTimeout(() => {
                counter = counter * 1.5;
                resolve(() => {
                    return counter * 1.5;
                });
            }, counter * 1000)

        }
    })

}

async function doThing() {
    const res1 = await omniPoller(false, () => {});
    console.log(res1());;
    const res2 = await omniPoller(false, () => {});
    console.log(res2());;
    const res3 = await omniPoller(true, () => {
        console.log('success-----------')
    });
}
doThing();
