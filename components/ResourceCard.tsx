import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
}

export default function ResourceCard({ title, description, icon: Icon, category }: ResourceCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <span className="text-sm text-gray-500">{category}</span>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <Button variant="outline" size="sm">Access Resource</Button>
        </div>
      </div>
    </Card>
  );
}