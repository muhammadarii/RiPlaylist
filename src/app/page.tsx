import ListCard from "@/components/ListCard";
import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="py-[25px] px-[130px]">
        <SearchBox />
        <ListCard />
      </div>
    </div>
  );
}
