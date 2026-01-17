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
        parentElement: "bsport-widget-685053",
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
            hidePaymentCombo: false,
            hidePaymentPack: true,
            hideFilters: true,
            hidePrivatePass: true,
          },
        },
      });
    };

    mountWidget();

    // Remove bsport branding logo (only the "Powered by" footer, not functional dialogs)
    const removeBsportBranding = () => {
      // Only target the specific "Powered by bsport" branding link with logo
      const bsportLinks = document.querySelectorAll('a[href*="pro.bsport.io"][href*="utm_source=widget"]');
      bsportLinks.forEach(link => {
        const parent = link.parentElement;
        if (parent) {
          (parent as HTMLElement).style.display = 'none';
        }
        (link as HTMLElement).style.display = 'none';
      });
      
      // Only target bsport logo images, not other functional images
      const bsportImages = document.querySelectorAll('img[src*="bsport_logo"]');
      bsportImages.forEach(img => {
        const parent = img.parentElement;
        if (parent) {
          (parent as HTMLElement).style.display = 'none';
        }
        (img as HTMLElement).style.display = 'none';
      });
    };

    const brandingInterval = setInterval(removeBsportBranding, 500);

    return () => {
      clearInterval(brandingInterval);
    };
  }, []);

  return (
    <div className="w-full">
      <div id="bsport-widget-685053" className="w-full" />
    </div>
  );
};

export default BsportWelcomeWidget;
