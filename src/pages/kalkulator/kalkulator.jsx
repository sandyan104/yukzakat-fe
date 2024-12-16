import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import styles from "./styles";
import niat from "../../assets/niat.png";

function formatCurrency(value) {
  if (!value) return '';
  // Remove non-numeric characters except for "."
  const numericValue = value.replace(/[^0-9]/g, '');
  // Format with a thousands separator
  return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function Kalkulator() {
  const [gaji, setGaji] = useState('');
  const [penghasilanLain, setPenghasilanLain] = useState('');
  const [zakat, setZakat] = useState(null);

  // Calculate total income
  const jumlahPenghasilan = parseFloat(gaji.replace(/\./g, '') || 0) + parseFloat(penghasilanLain.replace(/\./g, '') || 0);

  const handleGajiChange = (e) => {
    setGaji(formatCurrency(e.target.value));
  };

  const handlePenghasilanLainChange = (e) => {
    setPenghasilanLain(formatCurrency(e.target.value));
  };

  const calculateZakat = () => {
    if (jumlahPenghasilan < 6859394) {
      alert('Gaji per bulan harus lebih dari Rp6.859.394 untuk menghitung Zakat');
    }
    setZakat(jumlahPenghasilan * 0.025); // 2.5% of annual income
  };

  const resetFields = () => {
    setGaji('');
    setPenghasilanLain('');
    setZakat(null);
  };

  return (
    <div style={styles.container}>
      <Typography variant='h4' mt={4} mb={6} color='white' fontWeight={300}>
        <b>Yuk</b>Zakat.id
      </Typography>
      <Box
        component={Paper}
        sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}
      >
        <Typography
          variant='h4'
          mb={4}
          color='#4a628a'
          fontWeight={700}
          textAlign='center'
        >
          Kalkulator Zakat
        </Typography>
        <TextField
          label="Gaji per Bulan"
          variant="outlined"
          fullWidth
          value={gaji}
          onChange={handleGajiChange}
          InputProps={{
            startAdornment: <Typography sx={{ marginRight: 1 }}>Rp</Typography>,
          }}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Penghasilan lain per Bulan"
          variant="outlined"
          fullWidth
          value={penghasilanLain}
          onChange={handlePenghasilanLainChange}
          InputProps={{
            startAdornment: <Typography sx={{ marginRight: 1 }}>Rp</Typography>,
          }}
          sx={{ mb: 2}}
        />

        <Typography
          variant="h8"
          fontWeight={500} 
          sx={{display: 'flex', justifyContent: 'center'}}>
          Jumlah Penghasilan per Bulan
        </Typography>

        <Typography
          variant="h6"
          fontWeight={700} 
          sx={{display: 'flex', justifyContent: 'center'}}>
          Rp{jumlahPenghasilan.toLocaleString('id-ID')}
        </Typography>

        {zakat !== null &&  (
          <Typography variant="h6" sx={{ mt: 2, color: 'green', display: 'flex', justifyContent: 'center', textAlign: 'center', fontWeight:700}}>
            Zakat (2.5%) <br></br> Rp{zakat.toLocaleString('id-ID')}
          </Typography>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button variant="contained" color="primary" onClick={calculateZakat}>
            Hitung Zakat
          </Button>
          <Button variant="outlined" color="secondary" onClick={resetFields}>
            Reset
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Kalkulator;
