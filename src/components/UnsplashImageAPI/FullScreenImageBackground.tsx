import Image from "next/image";

type Props = {
  images: Image[];
  randomNum: number;
};

type Image = {
  links: {
    html: URL | undefined;
  };
  user: {
    name: string;
    location: string;
  };
  urls: {
    full: string | undefined;
  };
};

export default function FullScreenImageBackground({
  images,
  randomNum,
}: Props) {
  const imageUrl = images[randomNum]?.urls?.full;

  return imageUrl ? (
    <Image src={imageUrl} fill objectFit="cover" alt="Unsplash Image" />
  ) : null;
}
