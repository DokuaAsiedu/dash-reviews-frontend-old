import React, { ImgHTMLAttributes, useEffect, useState } from "react";

export const DynamicImg = ({ src, alt, ...rest }: ImgHTMLAttributes<HTMLImageElement>) => {
  const [resolvedSrc, setResolvedSrc] = useState<string | null>(null);

  useEffect(() => {
    if (src) {
      import(src).then((src) => {
        setResolvedSrc(src);
      });
    }
  }, [src]);

  return !resolvedSrc ? <p className="text-sm">Loading</p> : <img src={resolvedSrc!} alt={alt} {...rest} />;
};
