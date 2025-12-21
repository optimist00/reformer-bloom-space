import { useEffect } from "react";

declare global {
  interface Window {
    BsportWidget?: {
      mount: (config: Record<string, unknown>) => void;
    };
  }
}

const BsportWidget = () => {
  useEffect(() => {
    // Load the bsport widget script if not already loaded
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
        parentElement: "bsport-widget-681471",
        companyId: 5314,
        franchiseId: null,
        dialogMode: 1,
        widgetType: "calendar",
        showFab: false,
        fullScreenPopup: false,
        styles: {
          // Primary colors matching terracotta theme
          primaryColor: "#9A6548",
          primaryColorHover: "#7D5239",
          // Background colors matching cream/sand palette
          backgroundColor: "#FAF8F5",
          cardBackgroundColor: "#FFFFFF",
          // Text colors
          textColor: "#3D3835",
          textColorSecondary: "#7A746F",
          // Border and accent
          borderColor: "#E8E2DC",
          borderRadius: "12px",
          // Font matching the website
          fontFamily: "Montserrat, sans-serif",
        },
        config: {
          calendar: {}
        }
      });
    };

    mountWidget();

    // Cleanup function
    return () => {
      const widgetContainer = document.getElementById("bsport-widget-681471");
      if (widgetContainer) {
        widgetContainer.innerHTML = "";
      }
    };
  }, []);

  return <div id="bsport-widget-681471" className="min-h-[600px]" />;
};

export default BsportWidget;
