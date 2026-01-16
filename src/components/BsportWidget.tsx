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
            compactMode: boolean | null;
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
        parentElement: "bsport-widget-504100",
        companyId: 5314,
        franchiseId: null,
        dialogMode: 1,
        widgetType: "calendar",
        showFab: false,
        fullScreenPopup: false,
        styles: undefined,
        config: {
          calendar: {
            todayOnly: false,
            compactMode: null,
          },
        },
      });
    };

    mountWidget();

    // Dynamische Farben für Level-Badges
    const levelColorInterval = setInterval(() => {
      const levels = document.querySelectorAll('.bs-card-offer__content__status__level');
      levels.forEach((level: Element) => {
        const el = level as HTMLElement;
        const text = el.textContent?.trim();
        
        if (text === 'Alle Niveaus') {
          el.style.backgroundColor = '#4A90E2';
          el.style.color = 'white';
        } else if (text === 'Einsteiger') {
          el.style.backgroundColor = '#C8E6C9';
          el.style.color = '#333333';
        } else if (text === 'Mittelstufe') {
          el.style.backgroundColor = '#FFE0B2';
          el.style.color = '#333333';
        } else if (text === 'Profi') {
          el.style.backgroundColor = '#FFCDD2';
          el.style.color = '#333333';
        }
      });
    }, 500);

    // Bsport Logo entfernen
    const logoRemovalInterval = setInterval(() => {
      const bsportLinks = document.querySelectorAll('a[href*="bsport.io"]');
      bsportLinks.forEach(link => {
        if (link.parentElement) {
          (link.parentElement as HTMLElement).style.display = 'none';
        }
        link.remove();
      });
    }, 500);

    // Cleanup beim Unmount
    return () => {
      clearInterval(levelColorInterval);
      clearInterval(logoRemovalInterval);
    };
  }, []);

  return (
    <div className="w-full min-h-[calc(100vh-120px)]">
      <div id="bsport-widget-504100" className="w-full h-full" />
    </div>
  );
};

export default BsportWidget;
