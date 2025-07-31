import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Package, AlertTriangle, TrendingUp, Eye } from "lucide-react";
import ExpiryAlert from "@/components/ExpiryAlert";
import { getExpiringItems, mockPantryItems } from "@/data/mockData";

const Dashboard = () => {
  const navigate = useNavigate();
  const expiringItems = getExpiringItems(3);
  const totalItems = mockPantryItems.length;

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 p-6 md:p-8">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Welcome to GroceMate
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
            Keep track of your pantry items, reduce food waste, and never run out of essentials again.
          </p>
          <Button 
            onClick={() => navigate("/pantry")}
            className="bg-primary hover:bg-primary/90"
            size="lg"
          >
            <Eye className="mr-2 h-4 w-4" />
            View Pantry
          </Button>
        </div>
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 -ml-10 -mb-10 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalItems}</div>
            <p className="text-xs text-muted-foreground">in your pantry</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expiring Soon</CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{expiringItems.length}</div>
            <p className="text-xs text-muted-foreground">next 3 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">tracked</p>
          </CardContent>
        </Card>
      </div>

      {/* Expiring Items Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <span>Items Expiring Soon</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {expiringItems.length > 0 ? (
            <div className="space-y-3">
              {expiringItems.map((item) => (
                <ExpiryAlert key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">All Good!</h3>
              <p className="text-muted-foreground mb-4">
                No items expiring in the next 3 days.
              </p>
              <Button onClick={() => navigate("/pantry")} variant="outline">
                View All Items
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;