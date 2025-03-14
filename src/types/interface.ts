export interface ListCardProps {
  className?: string;
  data?: {
    id: number;
    title: string;
    artist: string;
    duration: string;
    imageSrc?: string;
  }[];
}
