require.config({
    baseUrl: '/raleigh-little-theater/wp-content/themes/rlt/scripts/js/',
    shim: {
        "jquery": {
            exports: '$'
        },
        "chosen": ['jquery']
    }
});
require(['main']);