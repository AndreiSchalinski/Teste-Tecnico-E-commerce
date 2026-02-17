// Componente: DrawerCarrinho.tsx
import { Drawer, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CarrinhoLista from '../carrinho/Carrinho'; 

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function DrawerCarrinho({ open, onClose }: Props) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: { xs: '100vw', sm: 350 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #eee' }}>
          <Typography variant="h6" fontWeight="bold">Meu Carrinho</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
          <CarrinhoLista />
        </Box>
      </Box>
    </Drawer>
  );
}