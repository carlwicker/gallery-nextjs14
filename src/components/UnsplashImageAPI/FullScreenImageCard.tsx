import Link from "next/link";
import { motion } from "framer-motion";
import { FaUnsplash } from "react-icons/fa";
import CheckOutForm from "../StripePayment/CheckOutForm";

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
    full: string;
  };
};

export default function FullScreenImageCard({ images, randomNum }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2.5, ease: "easeOut" }}
      className="bg-white p-12 pb-36 rounded flex flex-col gap-8"
      style={{
        position: "fixed",
        right: 20,
        bottom: 40,
        width: "400px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div>
        <div className="text-4xl font-bold capitalize">
          {images[randomNum]?.user.name}
        </div>
        <div className="text-2xl">{images[randomNum]?.user.location}</div>
      </div>
      <div className="text-sm">
        <Link href={images[randomNum]?.links.html || "#"}>
          <FaUnsplash
            size={30}
            className=" hover:text-cyan-600 hover:scale-125 ease-in text-cyan-900 transition duration-150"
          />
        </Link>
        <CheckOutForm />
        <br />
        <p className="text-xs text-zinc-400">
          Made with Unsplash API, NextJS, Framer Motion, TailwindCSS on Google
          Cloud Platform
        </p>
      </div>
    </motion.div>
  );
}
