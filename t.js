var trkParams = window.trkParams || {
  trackerUrl: "https://cdn.cartsguru.io/scripts/20210823",
  platform: "shopify",
  siteId: "e7bbbfe8-22f8-4bc2-a674-d739394ad3f5",
  features: { ci: true, fbm: false, scoring: false, widgets: [] },
  funnelMetaData: [],
  funnelStepMetaData: [],
  fbSettings: { app_id: "117034805405908", page_id: "" }
};

var cgtrkStart = function() {
  CgTracker("init", trkParams);
  CgTracker("track", { what: "event", ofType: "visit" });
  window.onbeforeunload = function() {
    console.timeStamp("window.onbeforeunload");
    setTimeout(function() {
      CgTracker("track", { what: "event", ofType: "quit" });
    }, 0);
  };
};

!(function(t, e, r) {
  var a,
    n = t.getElementsByTagName(e)[0];
  if (!t.getElementById(r)) {
    a = t.createElement(e);
    a.id = r;
    a.src =
      "https://cdn.cartsguru.io/scripts/20210823/dist/shopify-client.min.js";
    a.async = true;
    a.defer = true;
    n.parentNode.insertBefore(a, n);
    a.onload = cgtrkStart;
  }
})(document, "script", "cg-trk");
