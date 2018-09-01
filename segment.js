function getParams(script_name) {
  // Find all script tags

  var scripts = document.getElementsByTagName("script");
  
  // Look through them trying to find ourselves

  for(var i=0; i<scripts.length; i++) {
    if(scripts[i].src.indexOf("/" + script_name) > -1) {
      // Get an array of key=value strings of params

      var pa = scripts[i].src.split("?").pop().split("&");

      // Split each key=value into array, the construct js object

      var p = {};
      for(var j=0; j<pa.length; j++) {
        var kv = pa[j].split("=");
        p[kv[0]] = kv[1];
      }
      return p;
    }
  }
  
  // No scripts match

  return {};
};

var report_name = {"name": "undefined"};
var report_name = getParams("segment.js");

! function() {
    var analytics = window.analytics = window.analytics || [];
    if (!analytics.initialize)
        if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice.");
        else {
            analytics.invoked = !0;
            analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on"];
            analytics.factory = function(t) {
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    e.unshift(t);
                    analytics.push(e);
                    return analytics
                }
            };
            for (var t = 0; t < analytics.methods.length; t++) {
                var e = analytics.methods[t];
                analytics[e] = analytics.factory(e)
            }
            analytics.load = function(t, e) {
                var n = document.createElement("script");
                n.type = "text/javascript";
                n.async = !0;
                n.src = "https://cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js";
                var a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(n, a);
                analytics._loadOptions = e
            };
            analytics.SNIPPET_VERSION = "4.1.0";
            analytics.load("3aFkqrZJpUaTAM9RBUL8RdHbTWTmNLGq");
            //analytics.page();
            analytics.track('open_report', { report: report_name.name , action: 'open' });
        }
}();
