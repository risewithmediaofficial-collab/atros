'use client';

import React, { useState, useCallback, useMemo, memo } from 'react';

const AppImage = memo(function AppImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  onClick,
  fallbackSrc = '/assets/images/no_image.png',
  loading = 'lazy',
  ...props
}) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback(() => {
    if (!hasError && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setHasError(true);
    }
    setIsLoading(false);
  }, [hasError, imageSrc, fallbackSrc]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
  }, []);

  const imageClassName = useMemo(() => {
    const classes = [className];
    if (isLoading) classes.push('bg-gray-200');
    if (onClick) classes.push('cursor-pointer hover:opacity-90 transition-opacity duration-200');
    return classes.filter(Boolean).join(' ');
  }, [className, isLoading, onClick]);

  const imageProps = useMemo(() => {
    const baseProps = {
      src: imageSrc,
      alt,
      className: imageClassName,
      onError: handleError,
      onLoad: handleLoad,
      onClick,
    };

    if (!priority) {
      baseProps.loading = loading;
    }

    return baseProps;
  }, [
    imageSrc,
    alt,
    imageClassName,
    priority,
    loading,
    handleError,
    handleLoad,
    onClick,
  ]);

  if (fill) {
    return (
      <div className="relative" style={{ width: '100%', height: '100%' }}>
        <img
          {...imageProps}
          alt={alt}
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          {...props}
        />
      </div>
    );
  }

  return (
    <img
      {...imageProps}
      alt={alt}
      width={width || 400}
      height={height || 300}
      {...props}
    />
  );
});

AppImage.displayName = 'AppImage';

export default AppImage;
