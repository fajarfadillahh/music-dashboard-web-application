import { MailMinusIcon, PlusCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import custom components
import MenuBar from "@/components/menubar";
import SideBar from "@/components/sidebar";

// import home components
import ListenNowAlbums from "@/components/home/tabs/music/listen-now-albums";
import MadeForYouAlbums from "@/components/home/tabs/music/made-for-you-albums";
import NewEpisodesPodcast from "@/components/home/tabs/podcasts/new-episodes-podcast";

export default function Home() {
  return (
    <main className="hidden md:block">
      <MenuBar />

      <div className="border-t bg-white">
        <div className="grid lg:grid-cols-5">
          <SideBar className="hidden lg:block" />

          <div className="col-span-3 h-full px-4 py-6 lg:col-span-4 lg:border-l lg:px-8">
            <Tabs defaultValue="music" className="h-full space-y-6">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="music" className="relative">
                    Music
                  </TabsTrigger>
                  <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                  <TabsTrigger value="live" disabled>
                    Live
                  </TabsTrigger>
                </TabsList>

                <div className="ml-auto mr-4">
                  <Button>
                    <PlusCircleIcon className="mr-2 h-4 w-4" />
                    Add music
                  </Button>
                </div>
              </div>

              <TabsContent
                value="music"
                className="border-none p-0 outline-none"
              >
                <ListenNowAlbums />

                <MadeForYouAlbums />
              </TabsContent>

              <TabsContent
                value="podcasts"
                className="h-full flex-col border-none p-0 data-[state=active]:flex"
              >
                <NewEpisodesPodcast />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
