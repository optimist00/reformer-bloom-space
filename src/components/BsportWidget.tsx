import { useEffect } from "react";

declare global {
  interface Window {
    BsportWidget?: {
      mount: (config: {
        parentElement: string;
        companyId: number;
        franchiseId: null;
        dialogMode: number;
        widgetType: string;
        showFab: boolean;
        fullScreenPopup: boolean;
        styles: undefined;
        config: {
          calendar: {
            todayOnly: boolean;
            compactMode: boolean;
          };
        };
      }) => void;
    };
  }
}

const BsportWidget = () => {
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
      if (!window.BsportWidget) {
        setTimeout(() => mountWidget(repeat + 1), 100 * repeat);
        return;
      }
      window.BsportWidget.mount({
        parentElement: "bsport-widget-431872",
        companyId: 5314,
        franchiseId: null,
        dialogMode: 1,
        widgetType: "calendar",
        showFab: false,
        fullScreenPopup: false,
        styles: undefined,
        config: {
          calendar: {
            todayOnly: true,
            compactMode: true,
          },
        },
      });
    };

    mountWidget();
  }, []);

  return (
    <div className="w-full min-h-[400px]">
      <div id="bsport-widget-431872" className="w-full" />
    </div>
  );
};

export default BsportWidget;
