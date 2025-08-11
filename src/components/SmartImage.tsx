import React from 'react';

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  // Largeurs à générer pour le srcSet
  widths?: number[];
  // Attribut sizes pour guider le navigateur
  sizes?: string;
  // Force le chargement prioritaire (hero)
  priority?: boolean;
  // Pour stabiliser la mise en page
  width?: number;
  height?: number;
  // Alternative au duo width/height
  aspect?: number; // ex: 16/9 -> 16/9
};

function buildUrl(base: string, w: number) {
  // Si c’est une image Pexels (ou autre service qui accepte ?w=), optimise
  if (base.includes('pexels.com')) {
    const url = new URL(base);
    url.searchParams.set('auto', 'compress');
    url.searchParams.set('cs', 'tinysrgb');
    url.searchParams.set('w', String(w));
    return url.toString();
  }
  // Sinon, laisse tel quel (le navigateur choisira via srcSet même si répétitif)
  return base;
}

const DEFAULT_WIDTHS = [480, 800, 1200];

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
  const srcSet = widths.map(w => `${buildUrl(src, w)} ${w}w`).join(', ');
  // Choix d’une source par défaut raisonnable
  const defaultW = Math.min(800, widths[widths.length - 1]);
  const defaultSrc = buildUrl(src, defaultW);

  // fetchpriority n’est pas encore typé partout, donc on le pose via any
  const fetchPriority = priority ? { fetchPriority: 'high' as any } : {};

  const style = aspect && !width && !height ? { aspectRatio: String(aspect) } : undefined;

  return (
    <div className={className} style={style}>
      <img
        src={defaultSrc}
        srcSet={srcSet}
        sizes={sizes}
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
