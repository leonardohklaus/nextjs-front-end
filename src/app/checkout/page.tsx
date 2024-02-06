import {
    Box,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
  import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
  import { CheckoutForm } from "./CheckoutForm";
  import { redirect } from "next/navigation";
  import { Total } from "@/components/NavBar/Total";
//   import { CartServiceFactory } from "../../services/cart.service";
//   import { ProductService } from "../../services/product.service";

const products = [
    {
      id: "1",
      name: "Product 1",
      description: "Product 1 description",
      image_url: "https://source.unsplash.com/random?product",
      price: 10,
      category_id: "1",
    },
    {
      id: "2",
      name: "Product 2",
      description: "Product 2 description",
      image_url: "https://source.unsplash.com/random?product",
      price: 10,
      category_id: "1",
    },
  ];

  const cart = {
    items: [
      {
        total: 200,
        product_id: "1",
        quantity: 2,
      },
      {
        total: 100,
        product_id: "2",
        quantity: 1,
      },
    ],
    total: 300,
  };
  
  async function CheckoutPage() {
    // const cart = CartServiceFactory.create().getCart();
    // const productService = new ProductService();
    // const products = await productService.getProductsByIds(
    //   cart.items.map((item) => item.product_id)
    // );
  
    if (cart.items.length === 0) {
      return redirect("/my-cart");
    }
  
    return (
      <Box>
        <Typography variant="h3">Checkout</Typography>
        <Grid2 container spacing={3}>
          <Grid2 xs={12} md={6}>
            <CheckoutForm />
          </Grid2>
          <Grid2 xs={0} md={1}>
            <Divider orientation="vertical" />
          </Grid2>
          <Grid2 xs={12} md={5}>
            <Typography variant="h5">Resumo do pedido</Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Produto</TableCell>
                  <TableCell>Qtd.</TableCell>
                  <TableCell>Preço</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.items.map((item, key) => {
                  const product = products.find(
                    (product) => product.id == item.product_id
                  )!;
                  return (
                    <TableRow key={key}>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(item.total)}
                      </TableCell>
                    </TableRow>
                  );
                })}
                <TableRow>
                  <TableCell colSpan={3}>
                    <Box sx={{ display: "flex", justifyContent: "end" }}>
                      <Total total={cart.total} />
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
  
  export default CheckoutPage;