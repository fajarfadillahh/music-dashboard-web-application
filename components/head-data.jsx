import { Separator } from "@/components/ui/separator";

export default function HeadData({ title, text }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="text-sm text-gray-600">{text}</p>
        </div>
      </div>

      <Separator className="my-4" />
    </>
  );
}
