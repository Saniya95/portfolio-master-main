"use client";

import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ProfileImageProps {
  src: string;
  alt?: string;
  size?: number; // square dimension
  className?: string;
  priority?: boolean;
  rounded?: boolean;
}

/**
 * ProfileImage
 * - Shows a skeleton while loading
 * - Graceful fallback (initials) if the image fails to load
 * - Supports configurable size & rounding
 */
export function ProfileImage({
  src,
  alt = "Profile photo",
  size = 200,
  className,
  priority = true,
  rounded = true,
}: ProfileImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const initials = "SA"; // Could be parameterized later

  if (error) {
    return (
      <div
        className={cn(
          "flex items-center justify-center font-semibold bg-gradient-to-br from-primary/20 to-primary/5 text-primary border border-primary/30 shadow rounded-lg",
          rounded ? "rounded-lg" : "",
          className
        )}
        style={{ width: size, height: size }}
        aria-label={alt}
      >
        {initials}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-all duration-300 shadow-2xl",
        rounded ? "rounded-lg" : "",
        className
      )}
      style={{ width: size, height: size }}
    >
      {!loaded && (
        <Skeleton className="absolute inset-0 w-full h-full" aria-hidden="true" />
      )}
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        sizes={`(max-width: 768px) ${Math.min(size,160)}px, ${size}px`}
        priority={priority}
        className={cn(
          "object-cover w-full h-full transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0"
        )}
        onLoadingComplete={() => setLoaded(true)}
        onError={() => setError(true)}
        placeholder="empty"
      />
    </div>
  );
}
