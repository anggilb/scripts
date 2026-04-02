var trkParams = window.trkParams || {
    trackerUrl: "https://cdn.cartsguru.io/scripts/20210823",
    platform: "shopify",
    siteId: "e7bbbfe8-22f8-4bc2-a674-d739394ad3f5",
    features: { ci: true, fbm: false, scoring: !1, widgets: [] },
    funnelMetaData: [
      {
        trigger: { type: "IMMEDIATE", value: null },
        frequency: { type: "ONCE_PER_VISITOR", value: null },
        duration: { type: "CONTINUOUS", startDate: null, endDate: null },
        target: [
          {
            type: "COUNTRY",
            conditions: [{ operator: "!=", value: "AX" }],
            joinConditions: "AND",
          },
        ],
        ignoreTarget: null,
        funnelId: "fa763431-c761-40df-8035-e800de463a4e",
      },
    ],
    funnelStepMetaData: [
      {
        widget: {
          position: {
            DESKTOP: {
              top: "15px",
              left: "15px",
              bottom: "15px",
              right: "15px",
            },
            MOBILE: { top: 0, left: 0, bottom: 0, right: 0 },
          },
          animation: null,
          size: {
            DESKTOP: { width: "400px", height: "min-content" },
            MOBILE: { width: "320px", height: "min-content" },
          },
          customSize: null,
          autoHeight: true,
        },
        goals: {
          isMain: true,
          goalItems: [{ id: "u_content_button_1", type: "BUTTON" }],
        },
        actions: { form: {} },
        funnelId: "fa763431-c761-40df-8035-e800de463a4e",
        step: 0,
        stepCtaMap: {
          u_content_button_1: {
            type: "BUTTON",
            text: '<span style="font-size: 14px; line-height: 16.8px;">Button Text</span>',
            nextStep: true,
            endStep: false,
            linkToCart: false,
            isStepGoal: true,
          },
          u_content_button_2: {
            type: "BUTTON",
            text: '<span style="font-size: 14px; line-height: 16.8px;">Button Text</span>',
            nextStep: true,
            endStep: false,
            linkToCart: false,
            isStepGoal: false,
          },
        },
        discountMap: {},
        jsCustomCode: {},
        recommendationMap: {},
      },
    ],
    fbSettings: { app_id: "117034805405908", page_id: "" },
  },
  cgtrkStart = function () {
    CgTracker("init", trkParams);
    CgTracker("track", { what: "event", ofType: "visit" });
    window.onbeforeunload = function () {
      (console.timeStamp("window.onbeforeunload"),
        setTimeout(function () {
          CgTracker("track", { what: "event", ofType: "quit" });
        }, 0));
    };
  };
!(function (t, e, r) {
  var a,
    n = t.getElementsByTagName(e)[0];
  t.getElementById(r) ||
    (((a = t.createElement(e)).id = r),
    (a.src =
      "https://cdn.cartsguru.io/scripts/20210823/dist/shopify-client.min.js"),
    (a.async = true),
    (a.defer = true),
    n.parentNode.insertBefore(a, n),
    (a.onload = cgtrkStart));
})(document, "script", "cg-trk");
