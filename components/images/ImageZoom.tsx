import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./ImageZoom.css";
import NextImage from "next/image";

interface ImageZoomProps {
  zoom?: string | number;
  fullWidth?: boolean;
  alt?: string;
  width?: string | number;
  height?: string | number;
  src: string; // Required
  id?: string;
  className?: string;
  onError?: (error: Event) => void;
  errorContent?: React.ReactNode;
}

const ImageZoom: React.FC<ImageZoomProps> = ({
  zoom = "200",
  fullWidth = false,
  alt = "Tour image",
  src,
  id,
  className,
  onError,
  errorContent = (
    <p className="error-text">There was a problem loading your image</p>
  ),
}) => {
  const [state, setState] = useState({
    isZoomed: false,
    position: "50% 50%",
    imgData: null as string | null,
    error: false,
    isOverflowHidden: false,
    naturalWidth: 0,
    naturalHeight: 0,
  });

  const { position, imgData, error, isOverflowHidden } = state;

  const zoomInPosition = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      const zoomer = e.currentTarget.getBoundingClientRect();
      let x: number, y: number;

      if (e.type === "touchmove") {
        if (!isOverflowHidden) {
          setState((prev) => ({ ...prev, isOverflowHidden: true }));
          document.body.style.overflow = "hidden";
        }
        const touch = (e as React.TouchEvent).touches[0];
        x = ((touch.clientX - zoomer.x) / zoomer.width) * 100;
        y = ((touch.clientY - zoomer.y) / zoomer.height) * 100;
      } else {
        const mouseEvent = e as React.MouseEvent;
        x = ((mouseEvent.clientX - zoomer.x) / zoomer.width) * 100;
        y = ((mouseEvent.clientY - zoomer.y) / zoomer.height) * 100;
      }

      setState((prev) => ({
        ...prev,
        position: `${Math.max(0, Math.min(x, 100))}% ${Math.max(
          0,
          Math.min(y, 100)
        )}%`,
      }));
    },
    [isOverflowHidden]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      setState((prev) => {
        const newIsZoomed = !prev.isZoomed;
        return {
          ...prev,
          isZoomed: newIsZoomed,
          ...(newIsZoomed && { position: prev.position }),
        };
      });
      if (!state.isZoomed) zoomInPosition(e);
    },
    [zoomInPosition, state.isZoomed]
  );

  const handleMove = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (state.isZoomed) {
        zoomInPosition(e);
      }
    },
    [state.isZoomed, zoomInPosition]
  );

  const handleLeave = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isZoomed: false,
      position: "50% 50%",
      isOverflowHidden: false,
    }));
    document.body.style.overflow = "initial";
  }, []);

  useEffect(() => {
    setState((prev) => ({ ...prev, imgData: null }));

    if (!src) {
      throw new Error(
        "Prop src must be defined when using ImageZoom component!"
      );
    }

    const img = new Image();
    const handleLoad = () => {
      setTimeout(() => {
        setState((prev) => ({
          ...prev,
          isZoomed: false,
          imgData: img.src,
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
        }));
      }, 200);
    };

    const handleError = (error: Event) => {
      setState((prev) => ({ ...prev, error: true }));
      onError?.(error);
    };

    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);

    img.src = src;

    return () => {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleError);
    };
  }, [src, onError]);

  const calculateZoom = useMemo(() => {
    if (!fullWidth || !state.naturalWidth) return `${zoom}%`;

    const containerWidth =
      document.querySelector(".fullImageZoom")?.clientWidth || 0;
    if (!containerWidth) return `${zoom}%`;

    const zoomPercentage = (state.naturalWidth / containerWidth) * 100;
    return `${zoomPercentage < 100 ? zoom : zoomPercentage}%`;
  }, [zoom, fullWidth, state.naturalWidth]);

  const figureStyle = useMemo(
    () => ({
      backgroundImage: `url(${state.isZoomed && imgData ? imgData : ""})`,
      backgroundSize: calculateZoom,
      backgroundPosition: position,
    }),
    [state.isZoomed, imgData, calculateZoom, position]
  );

  if (error) return errorContent;

  return (
    <figure
      id={id}
      className={`image-zoom ${imgData ? "loaded" : "loading"} ${
        state.isZoomed ? "zoomed" : "fullView"
      } ${className}`}
      style={figureStyle}
      onClick={handleClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onTouchStart={handleClick}
      onTouchMove={handleMove}
      onTouchEnd={handleLeave}
      role="button"
      aria-label={`Zoomable image: ${alt}`}
      tabIndex={0}
    >
      {imgData && (
        <NextImage
          id="imageZoom"
          src={imgData}
          alt={alt}
          style={{ opacity: state.isZoomed ? 0 : 1 }}
          width={3000}
          height={3000}
        />
      )}
    </figure>
  );
};

export default React.memo(ImageZoom);
