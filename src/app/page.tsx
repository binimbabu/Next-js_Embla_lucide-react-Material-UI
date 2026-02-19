import { Container, Stack, Typography , Button} from '@mui/material'
import styles from "./page.module.css";

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Stack spacing={3}>
        <Typography variant="h3">
          Welcome to Next.js + MUI
        </Typography>

        <Typography variant="body1">
          This is a simple homepage example using TypeScript.
        </Typography>

        <Button variant="contained">
          Get Started
        </Button>
      </Stack>
    </Container>
  );
}
