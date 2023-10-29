import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// import custom components
import HeadData from "@/components/head-data";
import AlbumArtwork from "@/components/album-artwork";

// mock data api
import { madeForYouAlbums } from "@/data/albums";

export default function MadeForYouAlbums() {
  return (
    <>
      <HeadData
        title="Made for You"
        text="Your personal playlists. Updated daily."
      />

      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {madeForYouAlbums.map((album) => (
              <AlbumArtwork
                key={album.name}
                album={album}
                className="w-[150px]"
                aspectRatio="square"
                width={150}
                height={150}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
}
