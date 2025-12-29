const BsportWidget = () => {
  const widgetSrc = `
    <script id="insert-bsport-widget-cdn">!function (b, s, p, o, r, t) { typeof window.BsportWidget === "undefined" && !document.getElementById("bsport-widget-cdn") && !function () { m = b.createElement(s), m.id = "bsport-widget-cdn", m.src = p, b.getElementsByTagName("head")[0].appendChild(m) }() }(document, "script", "https://cdn.bsport.io/scripts/widget.js")</script>
    <script id="bsport-widget-mount">
      function MountBsportWidget(config, repeat=1) {
        if (repeat > 50) { return }
        if (!window.BsportWidget) {
          return setTimeout(() => {
            MountBsportWidget(config,repeat+1)
          }, 100 * repeat || 1)
        }
        BsportWidget.mount(config)
      }
    </script>
    <script>
      MountBsportWidget({
        "parentElement": "bsport-widget-622649",
        "companyId": 5314,
        "franchiseId": null,
        "dialogMode": 1,
        "widgetType": "calendar", 
        "showFab": false,
        "fullScreenPopup": false,
        "styles": undefined,
        "config": {
          "calendar": {}
        }  
      })
    </script>
    <div id="bsport-widget-622649"></div>
  `;

  return (
    <div style={{ overflow: "hidden", position: "relative", paddingTop: "125vh" }}>
      <iframe
        style={{
          position: "absolute",
          overflowX: "hidden",
          height: "100%",
          width: "100%",
          left: 0,
          top: 0,
          border: 0,
        }}
        frameBorder="0"
        allowFullScreen
        srcDoc={widgetSrc}
      />
    </div>
  );
};

export default BsportWidget;
