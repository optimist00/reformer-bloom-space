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
            coaches: string[];
            establishments: string[];
            metaActivities: string[];
            levels: string[];
            variant: null;
            groupSessionByPeriod: boolean;
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
        parentElement: "bsport-widget-274259",
        companyId: 5314,
        franchiseId: null,
        dialogMode: 1,
        widgetType: "calendar",
        showFab: false,
        fullScreenPopup: false,
        styles: undefined,
        config: {
          calendar: {
            coaches: [],
            establishments: [],
            metaActivities: [],
            levels: [],
            variant: null,
            groupSessionByPeriod: true,
            todayOnly: false,
            compactMode: true,
          },
        },
      });
    };

    mountWidget();
  }, []);

  return (
    <div className="w-full min-h-[calc(100vh-120px)]">
      <div id="bsport-widget-274259" className="w-full h-full" />
    </div>
  );
};

export default BsportWidget;
