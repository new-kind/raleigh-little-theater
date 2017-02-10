require.config({
    baseUrl: '/wp-content/themes/rlt/scripts/js/',
    shim: {
        "jquery": {
            exports: '$'
        },
        "chosen": ['jquery']
    }
});
require(['main']);