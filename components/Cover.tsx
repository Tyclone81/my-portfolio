import Image from "next/image";

interface CoverProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  ratio?: string; // Tailwind aspect class, e.g. "aspect-[2/1]"
}

// Cover image with a gentle zoom when an ancestor has the `group` class and is hovered.
export default function Cover({
  src,
  alt,
  priority = false,
  className = "",
  ratio = "aspect-video",
}: CoverProps) {
  return (
    <div className={`relative overflow-hidden bg-stone-100 ${ratio} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        unoptimized={src.endsWith(".svg")}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
      />
    </div>
  );
}
