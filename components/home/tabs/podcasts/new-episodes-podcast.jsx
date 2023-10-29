import HeadData from "@/components/head-data";
import PodcastEmptyPlaceholder from "@/components/podcast-empty-placeholder";

export default function NewEpisodesPodcast() {
  return (
    <>
      <HeadData
        title="New Episodes"
        text="Your favorite podcasts. Updated daily."
      />

      <PodcastEmptyPlaceholder />
    </>
  );
}
