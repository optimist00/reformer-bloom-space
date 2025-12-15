import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstagramSection = () => {
  return (
    <section className="gradient-section py-24 md:py-28">
      <div className="container">
        <div className="bg-cream rounded-2xl p-10 md:p-14 shadow-soft flex flex-col items-center text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-xl flex items-center justify-center">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h3 className="font-heading text-xl md:text-2xl mb-1">
                Folge uns auf Instagram
              </h3>
              <p className="text-muted-foreground">
                Einblicke, Tipps und Community-Highlights
              </p>
            </div>
          </div>
          <Button 
            variant="default" 
            className="bg-foreground hover:bg-foreground/90"
            onClick={() => window.open("https://www.instagram.com/houseofpilatesdresden", "_blank", "noopener,noreferrer")}
          >
            @houseofpilatesdresden
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
