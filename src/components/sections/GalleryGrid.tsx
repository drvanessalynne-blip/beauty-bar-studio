import { Text } from "@/components/ui";
import { cn } from "@/lib/cn";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  className?: string;
}

export function GalleryGrid({ images, className }: GalleryGridProps) {
  return (
    <div className={cn("columns-1 gap-6 sm:columns-2 lg:columns-3", className)}>
      {images.map((image) => (
        <figure
          key={image.src}
          className="group relative mb-6 overflow-hidden rounded-2xl break-inside-avoid"
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="w-full object-cover motion-safe:transition-transform motion-safe:duration-350 motion-safe:ease-out motion-safe:group-hover:scale-105"
          />
          {image.caption && (
            <>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 transition-opacity duration-250 ease-out group-hover:opacity-100"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-opacity duration-250 ease-out group-hover:opacity-100">
                <Text color="white" size="sm" weight="medium">
                  {image.caption}
                </Text>
              </figcaption>
            </>
          )}
        </figure>
      ))}
    </div>
  );
}
