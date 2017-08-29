const rnpmlink = require('mobile-center-link-scripts');

return rnpmlink.ios.initMobileCenterConfig().then(() => {
    const code = '  [RNMobileCenter register];  // Initialize Mobile Center ';
    return rnpmlink.ios.initInAppDelegate('#import <RNMobileCenter/RNMobileCenter.h>', code);
}).then((file) => {
    console.log(`Added code to initialize iOS Mobile Center SDK in ${file}`);
    return rnpmlink.ios.addPodDeps([
        { pod: 'RNMobileCenterShared', version: '0.9.0' }
    ]).catch((e) => {
        console.log(`
            Could not install dependencies using CocoaPods.
            Please refer to the documentation to install dependencies manually.

            Error Reason - ${e.message}
        `);
        return Promise.resolve();
    });
});
