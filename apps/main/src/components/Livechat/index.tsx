import Script from "next/script";

export default function Livechat() {
  return (
    <>
      <Script
        id="livechat"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window._lc = window._lc || {};
                window._lc.license = 18821934;
                window._lc.integration_name = "manual_onboarding";
                window._lc.product_name = "livechat";
                (function(n, t, c) {
                  function i(n) {
                    return e.h ? e._h.apply(null, n) : e._q.push(n);
                  }
                  var e = { _q: [], _h: null, _v: "2.0", 
                    on: function() { i(["on", [].slice.call(arguments)]) },
                    once: function() { i(["once", [].slice.call(arguments)]) },
                    off: function() { i(["off", [].slice.call(arguments)]) },
                    get: function() {
                      if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
                      return i(["get", [].slice.call(arguments)]);
                    },
                    call: function() { i(["call", [].slice.call(arguments)]) },
                    init: function() {
                      var n = t.createElement("script");
                      n.async = true;
                      n.type = "text/javascript";
                      n.src = "https://cdn.livechatinc.com/tracking.js";
                      t.head.appendChild(n);
                    }
                  };
                  !n._lc.asyncInit && e.init();
                  n.LiveChatWidget = n.LiveChatWidget || e;
                })(window, document);
              `,
        }}
      />
      <noscript>
        <a href="https://www.livechat.com/chat-with/18821934/" rel="nofollow">
          Chat with us
        </a>
        , powered by{" "}
        <a
          href="https://www.livechat.com/?welcome"
          rel="noopener nofollow"
          target="_blank"
        >
          LiveChat
        </a>
      </noscript>
    </>
  );
}
