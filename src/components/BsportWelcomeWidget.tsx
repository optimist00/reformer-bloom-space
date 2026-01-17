import { useEffect } from "react";

const BsportWelcomeWidget = () => {
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
        parentElement: "bsport-widget-502765",
        companyId: 5314,
        franchiseId: null,
        dialogMode: 1,
        widgetType: "loginButton",
        language: "de",
        showFab: false,
        fullScreenPopup: false,
        styles: undefined,
        config: {
          loginButton: {
            openMemberProfile: true,
          },
        },
      });
    };

    mountWidget();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div id="bsport-widget-502765" />
    </div>
  );
};

export default BsportWelcomeWidget;
