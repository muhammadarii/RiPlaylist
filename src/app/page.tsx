"use client";
import ListCard from "@/components/ListCard";
import MusicPlayer from "@/components/MusicPlayer";
import SearchBox from "@/components/SearchBox";

const data = [
  {
    id: 1,
    title: "Song 1",
    artist: "Artist 1",
    duration: "3:45",
    imageSrc: "/images/avatar.png",
  },
  {
    id: 2,
    title: "Song 2",
    artist: "Artist 2",
    duration: "4:20",
    imageSrc: "/images/avatar.png",
  },
  {
    id: 3,
    title: "Song 3",
    artist: "Artist 3",
    duration: "2:15",
    imageSrc: "/images/avatar.png",
  },
  {
    id: 4,
    title: "Song 4",
    artist: "Artist 4",
    duration: "3:10",
    imageSrc: "/images/avatar.png",
  },
  {
    id: 5,
    title: "Song 5",
    artist: "Artist 5",
    duration: "2:30",
    imageSrc: "/images/avatar.png",
  },
  {
    id: 6,
    title: "Song 6",
    artist: "Artist 6",
    duration: "3:15",
    imageSrc: "/images/avatar.png",
  },
  {
    id: 7,
    title: "Song 7",
    artist: "Artist 7",
    duration: "2:45",
    imageSrc: "/images/avatar.png",
  },
  {
    id: 8,
    title: "Song 8",
    artist: "Artist 8",
    duration: "3:30",
    imageSrc: "/images/avatar.png",
  },
  {
    id: 9,
    title: "Song 9",
    artist: "Artist 9",
    duration: "2:55",
    imageSrc: "/images/avatar.png",
  },
  {
    id: 10,
    title: "Song 10",
    artist: "Artist 10",
    duration: "3:20",
    imageSrc: "/images/avatar.png",
  },
  {
    id: 11,
    title: "Song 11",
    artist: "Artist 11",
    duration: "2:40",
    imageSrc: "/images/avatar.png",
  },
  {
    id: 12,
    title: "Song 12",
    artist: "Artist 12",
    duration: "3:05",
    imageSrc: "/images/avatar.png",
  },
  {
    id: 13,
    title: "Song 13",
    artist: "Artist 13",
    duration: "2:25",
    imageSrc: "/images/avatar.png",
  },
  {
    id: 14,
    title: "Song 14",
    artist: "Artist 14",
    duration: "3:00",
    imageSrc: "/images/avatar.png",
  },
  {
    id: 15,
    title: "Song 15",
    artist: "Artist 15",
    duration: "2:35",
    imageSrc: "/images/avatar.png",
  },
];

export default function Home() {
  return (
<>
    <div className="flex flex-col py-[25px] px-10 lg:px-[130px]">
        <SearchBox />
        <main className="mt-[25px]">
          <ListCard data={data} className="mt-2" />
        </main>
      </div>
      <MusicPlayer />
    </>
  );
}
