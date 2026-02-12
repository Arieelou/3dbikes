import React from 'react';

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  widths?: number[];
  sizes?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  aspect?: number;
};

function buildUrl(base: string, w: number) {
  if (base.includes('pexels.com')) {
    const url = new URL(base);
    url.searchParams.set('auto', 'compress');
    url.searchParams.set('cs', 'tinysrgb');
    url.searchParams.set('w', String(w));
    return url.toString();
  }
  return base;
}

const DEFAULT_WIDTHS = [320, 480, 800, 1200];

const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = '',
  widths = DEFAULT_WIDTHS,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  priority = false,
  width,
  height,
  aspect,
}) => {
  const normalizedWidths = Array.from(new Set(widths)).sort((a, b) => a - b);
  const supportsUrlWidth = src.includes('pexels.com');
  const srcSet = supportsUrlWidth
    ? normalizedWidths.map((w) => `${buildUrl(src, w)} ${w}w`).join(', ')
    : undefined;
  const defaultW = Math.min(800, normalizedWidths[normalizedWidths.length - 1]);
  const defaultSrc = buildUrl(src, defaultW);
  const fetchPriority = priority ? ({ fetchPriority: 'high' } as const) : {};
  const style = aspect && !width && !height ? { aspectRatio: String(aspect) } : undefined;

  return (
    <div className={className} style={style}>
      <img
        src={defaultSrc}
        srcSet={srcSet}
        sizes={srcSet ? sizes : undefined}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...fetchPriority}
        width={width}
        height={height}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SmartImage;
