require.config({
    baseUrl: '/raleigh-little-theater/wp-content/themes/rlt/scripts/js/',
    shim: {
        "jquery": {
            exports: '$'
        },
        "chosen": ['jquery'],
        "fotorama": ['jquery']
    },
    urlArgs: "bust=" + (new Date()).getTime()
});
require(['main']);