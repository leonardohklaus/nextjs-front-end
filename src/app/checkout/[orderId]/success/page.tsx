import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CheckIcon from "@mui/icons-material/Check";
import { Order, OrderStatus } from "../../../../models";
import { Total } from "@/components/NavBar/Total";

//   import { OrderServiceFactory } from "../../../../services/order.service";

const order: Order = {
    id: "1",    
    total: 1000.0,
    status: OrderStatus.PENDING,
    created_at: "2022-01-01T00:00:00.000Z",
    items: [
      {
        id: 1,
        product: {
          id: "1",
          name: "Product 1",
          description: "Product 1 description",
          image_url: "https://source.unsplash.com/random?product",
          price: 10,
          category_id: "1",
        },
        quantity: 2,
        price: 20,
      },
      {
        id: 2,
        product: {
          id: "2",
          name: "Product 2",
          description: "Product 2 description",
          image_url: "https://source.unsplash.com/random?product",
          price: 10,
          category_id: "1",
        },
        quantity: 1,
        price: 10,
      },    
    ]
}

async function CheckoutSuccessPage({
  params,
}: {
  params: { orderId: string };
}) {
//   const orderService = OrderServiceFactory.create();
//   const order = await orderService.getOrder(params.orderId);
//   console.log(order);
  return (
    <Box>
      <Grid2 container spacing={2}>
        <Grid2 xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CheckIcon sx={{ color: "success.main", mr: 2, fontSize: 150 }} />
            </Box>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Pedido realizado com sucesso!
            </Typography>
          </Box>
        </Grid2>
        <Grid2 xs={12} md={6}>
          <Typography variant="h4">Resumo do pedido</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Produto</TableCell>
                <TableCell>Qtd.</TableCell>
                <TableCell>Preço</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.items.map((item, key) => {
                return (
                  <TableRow key={key}>
                    <TableCell>{item.product.name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(item.price * item.quantity)}
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell colSpan={3}>
                  <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <Total total={order.total} />
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default CheckoutSuccessPage;
