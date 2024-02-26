"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import FullScreenImageCard from "@/components/UnsplashImageAPI/FullScreenImageCard";
import FullScreenImageBackground from "@/components/UnsplashImageAPI/FullScreenImageBackground";

type Image = {
  links: {
    html: URL | undefined;
  };
  user: {
    name: string;
    location: string;
  };
  urls: {
    full: string;
  };
};

type Props = {
  images: Image[];
  randomNum: number;
};

export default function UnsplashImage() {
  const [images, setImages] = useState<Image[]>([]);
  const randomNum = Math.floor(Math.random() * 10);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get(
        `https://api.unsplash.com/users/carlwicker/likes`,
        {
          params: {
            client_id: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY,
          },
        }
      );
      setImages(response.data);
    };
    fetchImages();
  }, []);

  return (
    <div style={{ margin: "100px" }}>
      <FullScreenImageBackground images={images} randomNum={randomNum} />
      <FullScreenImageCard images={images} randomNum={randomNum} />
    </div>
  );
}
