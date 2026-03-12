import SearchSection from "@/components/Home/SearchSection";
import GoogleMapSection from "@/components/Home/GoogleMapSection";

export default function Home() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5"> {/* 1 column on mobile, 3 columns on desktop */}
      <div>
        <SearchSection />
      </div>
      <div className="col-span-2"> {/* Takes up 2 columns on desktop */}
        <GoogleMapSection />
      </div>
    </div>
  );
}
