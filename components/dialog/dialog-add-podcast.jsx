import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function DialogAddPodcast() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="relative">
          Add Podcast
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Podcast</DialogTitle>
          <DialogDescription>
            Copy and paste the podcast feed URL to import.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="url">Podcast URL</Label>
            <Input id="url" placeholder="https://example.com/feed.xml" />
          </div>
        </div>

        <DialogFooter>
          <Button>Import Podcast</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
