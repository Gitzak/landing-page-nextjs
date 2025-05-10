import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const FeatureUseCase = () => (
  <section id="feature_use_case" className="w-full py-20 px-3">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10">
        <div className="flex gap-4 flex-col items-center text-center lg:items-start lg:text-left">
          <div>
            <Badge>Use Case</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter font-semibold max-w-xl">
              Automate your daily operations
            </h2>
            <p className="text-lg max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              From invoicing to customer onboarding, Moroccan Saas Ai helps you
              simplify and streamline repetitive tasks using AI-powered
              automation — saving you time and boosting consistency.
            </p>
          </div>
        </div>

        <div className="w-full max-w-full px-6">
          <Carousel>
            <CarouselContent>
              {[
                "/assets/images/automate-operations.png",
                "/assets/images/analyze-metrics.png",
              ].map((img, index) => (
                <CarouselItem key={index}>
                  <div className="flex rounded-md aspect-video bg-muted items-center justify-center p-6 overflow-hidden">
                    <img
                      src={img}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  </section>
);
