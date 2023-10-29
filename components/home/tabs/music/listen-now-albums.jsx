import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// import custom components
import HeadData from "@/components/head-data";
import AlbumArtwork from "@/components/album-artwork";

// mock data api
import { listenNowAlbums } from "@/data/albums";

export default function ListenNowAlbums() {
  return (
    <>
      <HeadData title="Listen Now" text="Top picks for you. Updated daily." />

      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {listenNowAlbums.map((album) => (
              <AlbumArtwork
                key={album.name}
                album={album}
                aspectRatio="portrait"
                width={250}
                height={330}
                className="w-[250px]"
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
}
