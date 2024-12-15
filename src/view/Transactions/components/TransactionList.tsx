import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

export default function TransactionList() {
  const navigate = useNavigate();

  const arrayEmpty = Array(4).fill({
    id: "Oe31b70H",
    name: "Liam Johnson",
    email: "liam@example.com",
    status: "Fulfilled",
    date: "2023-06-23",
    price: "$250.00",
  });

  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <tr>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden sm:table-cell">Type</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </tr>
          </TableHeader>
          <TableBody>
            {arrayEmpty.map((data, index) => (
              <TableRow
                key={index}
                onClick={() => navigate(`/transactions/${data.id}`)}
              >
                <TableCell>
                  <div className="font-medium">{data.name}</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {data.email}
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">Sale</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="secondary">
                    {data.status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {data.date}
                </TableCell>
                <TableCell className="text-right">{data.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-5</strong> of <strong>32</strong> Transactions
        </div>
      </CardFooter>
    </Card>
  );
}
