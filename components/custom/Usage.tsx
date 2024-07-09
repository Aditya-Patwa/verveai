import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Check, X } from "lucide-react";


const features = [
  {
    task: "Content Generation",
    free: <Check />,
    silver: <Check />,
    gold: <Check />,
    platinum: <Check />
  },
  {
    task: "Audio Manipulation",
    free: <Check />,
    silver: <Check />,
    gold: <Check />,
    platinum: <Check />
  },
  {
    task: "Multi Linguial Audio Translation",
    free: <Check />,
    silver: <Check />,
    gold: <Check />,
    platinum: <Check />
  },
  {
    task: "Video Manipulation",
    free: <X />,
    silver: <Check />,
    gold: <Check />,
    platinum: <Check />
  },
  {
    task: "Video Dubbing",
    free: <X />,
    silver: <X />,
    gold: <Check />,
    platinum: <Check />
  }
];

const usage = [
  {
    task: "Number of Text Generation",
    free: "10",
    silver: "30",
    gold: "50",
    platinum: "Unlimited"
  },
  {
    task: "Length of Text Generation",
    free: "Up to 500 words/article",
    silver: "Up to 5000 words/article",
    gold: "Unlimited",
    platinum: "Unlimited"
  },
  {
    task: "Number of Video",
    free: "1",
    silver: "5",
    gold: "10",
    platinum: "Unlimited"
  },
  {
    task: "Video time limit",
    free: "Up to 2 minutes",
    silver: "Up to 10 minutes",
    gold: "Up to 30 minutes",
    platinum: "Unlimited"
  },
]

export default function Usage() {
  return (
    <Table className="w-[75vw]">
      <TableCaption>Usage</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Tasks</TableHead>
          <TableHead className="text-right">Free</TableHead>
          <TableHead className="text-right">Bronze</TableHead>
          <TableHead className="text-right">Silver</TableHead>
          <TableHead className="text-right">Gold</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="bg-zinc-900 font-bold text-lg">
          <TableCell colSpan={5}>Features</TableCell>
        </TableRow>
        {features.map((feature) => (
          <TableRow key={feature.task}>
            <TableCell className="font-medium text-white">{feature.task}</TableCell>
            <TableCell className="text-right text-white">
              <div className="flex justify-end">
              {feature.free}
              </div>
            </TableCell>
            <TableCell className="text-right text-white">
            <div className="flex justify-end">
              {feature.silver}
              </div>
            </TableCell>
            <TableCell className="text-right text-white">
            <div className="flex justify-end">
              {feature.gold}
              </div>
            </TableCell>
            <TableCell className="text-right text-white">
            <div className="flex justify-end">
              {feature.platinum}
              </div>
            </TableCell>
          </TableRow>
        ))}

<TableRow className="bg-zinc-900 font-bold text-lg">
          <TableCell colSpan={5}>Usage Limit</TableCell>
        </TableRow>
        {usage.map((feature) => (
          <TableRow key={feature.task}>
            <TableCell className="font-medium text-white">{feature.task}</TableCell>
            <TableCell className="text-right text-white">
              <div className="flex justify-end">
              {feature.free}
              </div>
            </TableCell>
            <TableCell className="text-right text-white">
            <div className="flex justify-end">
              {feature.silver}
              </div>
            </TableCell>
            <TableCell className="text-right text-white">
            <div className="flex justify-end">
              {feature.gold}
              </div>
            </TableCell>
            <TableCell className="text-right text-white">
            <div className="flex justify-end">
              {feature.platinum}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
      </TableFooter>
    </Table>
  )
}
