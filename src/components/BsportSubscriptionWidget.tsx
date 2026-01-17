import { useEffect } from "react";

const BsportSubscriptionWidget = () => {
  useEffect(() => {
    // Load the bsport CDN script if not already loaded
    if (!document.getElementById("bsport-widget-cdn")) {
      const script = document.createElement("script");
      script.id = "bsport-widget-cdn";
      script.src = "https://cdn.bsport.io/scripts/widget.js";
      document.head.appendChild(script);
    }

    // Mount the widget with retry logic
    const mountWidget = (repeat = 1) => {
      if (repeat > 50) return;
      if (!(window as any).BsportWidget) {
        setTimeout(() => mountWidget(repeat + 1), 100 * repeat);
        return;
      }
      (window as any).BsportWidget.mount({
        parentElement: "bsport-widget-264758",
        companyId: 5314,
        franchiseId: null,
        dialogMode: 1,
        widgetType: "subscription",
        showFab: false,
        fullScreenPopup: false,
        styles: undefined,
        config: {
          subscription: {},
        },
      });
    };

    mountWidget();
  }, []);

  return (
    <div className="w-full">
      <div id="bsport-widget-264758" className="w-full" />
    </div>
  );
};

export default BsportSubscriptionWidget;
