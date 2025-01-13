import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
}

export default function BlogCard({ title, excerpt, author, date, category }: BlogCardProps) {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-primary">{category}</span>
          <span className="text-sm text-gray-500">{formatDate(date)}</span>
        </div>
        
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{excerpt}</p>
        
        <div className="pt-4 border-t">
          <p className="text-sm text-gray-500">By {author}</p>
        </div>
        
        <Button variant="link" className="p-0">Read More</Button>
      </div>
    </Card>
  );
}