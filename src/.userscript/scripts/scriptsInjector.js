﻿// Inject javaScript into main window (Userscript specific)

husot.injector = husot.injector || {};

husot.injector.addScripts = function () {
    var script = document.createElement('script');
    script.textContent = '{{APP_EMBEDDED_INJECT_SCRIPTS}}';
    (document.head || document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);
};