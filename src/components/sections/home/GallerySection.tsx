import { Container, Heading, Section, Text } from "@/components/ui";
import { GalleryGrid } from "@/components/sections";

function gradientTile(from: string, to: string, width: number, height: number) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${from}'/><stop offset='1' stop-color='${to}'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#g)'/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const galleryImages = [
  { src: gradientTile("#B76E79", "#F7E7CE", 600, 800), alt: "", caption: "Studio Interior" },
  { src: gradientTile("#F7E7CE", "#FFF8F2", 600, 600), alt: "", caption: "Treatment Room" },
  { src: gradientTile("#232323", "#B76E79", 600, 900), alt: "", caption: "Nail Bar" },
  { src: gradientTile("#FFF8F2", "#F7E7CE", 600, 700), alt: "", caption: "Mini Pilates Studio" },
  { src: gradientTile("#B76E79", "#232323", 600, 850), alt: "", caption: "Product Bar" },
  { src: gradientTile("#F7E7CE", "#B76E79", 600, 750), alt: "", caption: "Reception" },
];

export function GallerySection() {
  return (
    <Section id="gallery" background="white" className="scroll-mt-24">
      <Container className="flex flex-col gap-12">
        <div className="mx-auto max-w-2xl text-center">
          <Text size="sm" weight="semibold" color="rose-gold" className="uppercase tracking-wide">
            Gallery
          </Text>
          <Heading level={2} align="center" className="mt-2">
            Inside Beauty Bar Studio
          </Heading>
        </div>
        <GalleryGrid images={galleryImages} />
      </Container>
    </Section>
  );
}
