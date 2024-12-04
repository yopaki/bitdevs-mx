import Image from "next/image";
import Link from "next/link";

export type EventCardProps = {
  name: string;
  description: string;
  url: string;
  meetupUrl: string;
  xUrl: string;
  imageUrl: string;
  cityName: string;
};

export function EventCard({
  name,
  description,
  url,
  imageUrl,
  xUrl,
  cityName,
  meetupUrl,
}: EventCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={`${cityName} cityscape`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <Link
            href={url}
            className="text-orange-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web
          </Link>
          <Link
            href={meetupUrl}
            className="text-orange-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meetup
          </Link>
          <Link
            href={xUrl}
            className="text-orange-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </Link>
        </div>
      </div>
    </div>
  );
}
