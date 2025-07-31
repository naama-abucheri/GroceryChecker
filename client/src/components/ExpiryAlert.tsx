import { AlertCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PantryItem, getDaysUntilExpiry } from "@/data/mockData";

interface ExpiryAlertProps {
  item: PantryItem;
}

const ExpiryAlert = ({ item }: ExpiryAlertProps) => {
  const daysUntilExpiry = getDaysUntilExpiry(item.expiryDate);
  
  const getVariant = (days: number) => {
    if (days <= 0) return "danger";
    if (days <= 1) return "warning";
    return "secondary";
  };

  const getIcon = (days: number) => {
    if (days <= 0) return AlertCircle;
    return Clock;
  };

  const Icon = getIcon(daysUntilExpiry);
  const variant = getVariant(daysUntilExpiry);

  return (
    <Card className="border-l-4 border-l-warning">
      <CardContent className="pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon className="h-5 w-5 text-warning" />
            <div>
              <p className="font-medium text-foreground">{item.name}</p>
              <p className="text-sm text-muted-foreground">
                {item.quantity} {item.unit} • {item.category}
              </p>
            </div>
          </div>
          <Badge variant={variant as any}>
            {daysUntilExpiry <= 0 
              ? "Expired" 
              : daysUntilExpiry === 1 
              ? "1 day left" 
              : `${daysUntilExpiry} days left`}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpiryAlert;