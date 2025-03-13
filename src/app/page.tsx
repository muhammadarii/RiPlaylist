import ListCard from "@/components/ListCard";
import MusicPlayer from "@/components/MusicPlayer";
import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <>
      <div className="flex flex-col py-[25px] px-10 lg:px-[130px]">
        <SearchBox />
        <main className="mt-[45px]">
          <ListCard />
        </main>
      </div>
      <MusicPlayer />
    </>
  );
}
