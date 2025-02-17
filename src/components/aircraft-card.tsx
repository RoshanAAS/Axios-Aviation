import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface AircraftSpec {
  label: string;
  value: string;
}

interface AircraftCardProps {
  name: string;
  image: string;
  description: string;
  specs: AircraftSpec[];
}

export default function AircraftCard({ name, image, description, specs }: AircraftCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-card">
      <div className="aspect-video relative">
        <img 
          src={image} 
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-foreground">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">View Specifications</Button>
          </DialogTrigger>
          <DialogContent className="bg-background">
            <DialogHeader>
              <DialogTitle className="text-foreground">{name} Specifications</DialogTitle>
            </DialogHeader>
            <Table>
              <TableBody>
                {specs.map((spec) => (
                  <TableRow key={spec.label}>
                    <TableCell className="font-medium text-foreground">{spec.label}</TableCell>
                    <TableCell className="text-muted-foreground">{spec.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}