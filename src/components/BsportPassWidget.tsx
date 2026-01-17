import { useEffect } from "react";

const BsportPassWidget = () => {
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
        parentElement: "bsport-widget-480891",
        companyId: 5314,
        franchiseId: null,
        dialogMode: 1,
        widgetType: "pass",
        showFab: false,
        fullScreenPopup: false,
        styles: undefined,
        config: {
          pass: {
            paymentPackCategories: [],
            privatePassCategories: [],
            hidePaymentCombo: true,
            hidePaymentPack: false,
            hideFilters: true,
            hidePrivatePass: true,
          },
        },
      });
    };

    mountWidget();
  }, []);

  return (
    <div className="w-full">
      <div id="bsport-widget-480891" className="w-full" />
    </div>
  );
};

export default BsportPassWidget;
