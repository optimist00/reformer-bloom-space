import { useEffect } from 'react';

declare global {
  interface Window {
    BsportWidget?: {
      mount: (config: Record<string, unknown>) => void;
    };
  }
}

const BsportWidget = () => {
  useEffect(() => {
    // Load CDN script if not already present
    if (!document.getElementById("bsport-widget-cdn")) {
      const script = document.createElement("script");
      script.id = "bsport-widget-cdn";
      script.src = "https://cdn.bsport.io/scripts/widget.js";
      document.head.appendChild(script);
    }

    // Mount widget with retry logic
    const mountWidget = (repeat = 1) => {
      if (repeat > 50) return;
      if (!window.BsportWidget) {
        setTimeout(() => mountWidget(repeat + 1), 100 * repeat);
        return;
      }
      window.BsportWidget.mount({
        parentElement: "bsport-widget-952652",
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
            variant: "time",
            groupSessionByPeriod: true,
            todayOnly: false,
            compactMode: null
          }
        }
      });
    };

    mountWidget();
  }, []);

  return (
    <div className="w-full min-h-[600px]">
      <div id="bsport-widget-952652" className="w-full" />
    </div>
  );
};

export default BsportWidget;
