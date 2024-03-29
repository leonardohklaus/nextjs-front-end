import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import Image from "next/legacy/image";
//   import { ProductService } from "../../services/product.service";
import { Product } from "../../models";

const products: Product[] = [
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
    price: 20,
    category_id: "1",
  },
  {
    id: "3",
    name: "Product 3",
    description: "Product 3 description",
    image_url: "https://source.unsplash.com/random?product",
    price: 30,
    category_id: "1",
  },
  {
    id: "4",
    name: "Product 4",
    description: "Product 4 description",
    image_url: "https://source.unsplash.com/random?product",
    price: 40,
    category_id: "1",
  },
  {
    id: "5",
    name: "Product 5",
    description: "Product 5 description",
    image_url: "https://source.unsplash.com/random?product",
    price: 50,
    category_id: "1",
  },
];

function ListProductsPage() {
  return (
    <Grid2 container spacing={2}>
      {products.length === 0 && (
        <Grid2 xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5">Nenhum produto encontrado</Typography>
        </Grid2>
      )}
      {products.map((product, key) => (
        <Grid2 xs={12} sm={6} md={4} key={key}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: 0,
                paddingTop: "56.25%",
              }}
            >
              <Image
                src={product.image_url}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                priority
              />
            </Box>

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography
                sx={{
                  color: "primary.main",
                }}
              >
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price)}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
              <Link
                href={`/products/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <Button size="small" startIcon={<ShoppingCartIcon />}>
                  Comprar
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default ListProductsPage;
