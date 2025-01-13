import { Card } from "@/components/ui/card";
import { FileText, Book, Video, Download } from "lucide-react";
import ResourceCard from "@/components/ResourceCard";

const resources = [
  {
    title: "Economic Policy Papers",
    description: "Research papers and analysis on India's economic policies",
    icon: FileText,
    category: "Research"
  },
  {
    title: "Educational Materials",
    description: "Learning resources about secular governance",
    icon: Book,
    category: "Education"
  },
  {
    title: "Video Lectures",
    description: "Expert talks on development and social progress",
    icon: Video,
    category: "Media"
  },
  {
    title: "Reports & Studies",
    description: "Comprehensive studies on social and economic issues",
    icon: Download,
    category: "Research"
  }
];

export default function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">Resources</h1>
      <p className="text-lg text-gray-600 mb-8">
        Access our collection of resources designed to promote understanding and drive positive change.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
    </div>
  );
}