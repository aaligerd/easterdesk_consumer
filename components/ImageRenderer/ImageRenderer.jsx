'use client';

import Image from 'next/image';
import React from 'react';

export default function ImageRenderer({ url,alt,lowUrl}) {
  return (
    <Image
      src={url||""}
      alt={alt||""}
      placeholder="blur"
      blurDataURL={lowUrl||""}
      loading="lazy"
      fill={true} // This makes the image fill the parent
      className="object-cover" // Ensure it covers the container properly
    />
  );
}
