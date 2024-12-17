import { useEffect, useState } from "react";
import { Container, Card, CardContent, CardActionArea, Paper, Typography } from "@mui/material";
import styles from "./styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BuktiBayar = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };

  const [zakat, setZakat] = useState(null); // Gunakan 'null' karena kita hanya menampilkan satu objek

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/zakat/"); // API endpoint
        const data = response.data;

        if (data.length > 0) {
          setZakat(data[data.length - 1]); // Ambil objek terakhir
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div style={styles.container}>
        <Typography variant="h4" mt={4} mb={6} color="white" fontWeight={300} onClick={routeChange} style={{ cursor: "pointer" }}>
          <b>Yuk</b>Zakat.id
        </Typography>
        <Container
          disableGutters
          maxWidth="md"
          component={Paper}
          sx={{
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "80px",
            padding: "40px",
          }}
        >
          <Typography variant="h4" mb={4} color="#4a628a" fontWeight={700} textAlign="center">
            Bukti Pembayaran
          </Typography>
          <Container maxWidth="sm">
            <Typography variant="h5" mb={2} fontWeight={700} textAlign={"center"}>
              Alhamdulillah...
            </Typography>
            <Typography fontFamily={15} mb={4} textAlign={"center"}>
              Kamu sudah melaksanakan Zakat, info selanjutnya akan diberitahukan oleh Amil, mohon ditunggu. Terimakasih.
            </Typography>
          </Container>

          {zakat ? (
            <Card sx={{ maxWidth: "auto" }}>
              <CardContent>
                <Typography gutterBottom fontSize={20} component="div">
                  Id Pembayaran: {zakat.id_zakat}
                </Typography>
                <Typography gutterBottom fontSize={20} component="div">
                  Nama: {zakat.nama_mz}
                </Typography>
                <Typography gutterBottom fontSize={20} component="div">
                  Tipe Zakat: {zakat.id_tipe}
                </Typography>
                <Typography gutterBottom fontSize={20} component="div">
                  Nominal: Rp {zakat.nominal}
                </Typography>
                <Typography gutterBottom fontSize={20} component="div">
                  Tanggal: {zakat.tgl_Zakat}
                </Typography>
              </CardContent>
            </Card>
          ) : (
            <Typography variant="h6" color="gray">
              Tidak ada transaksi terbaru.
            </Typography>
          )}
        </Container>
      </div>

      <div
        style={{
          width: "100%",
          padding: "50px 80px",
          backgroundColor: "#4A628A",
        }}
      >
        <Typography variant="h5" mb={2} color="white" fontWeight={300}>
          <b>Yuk</b>Zakat.id
        </Typography>
        <Typography variant="body2" color="white" fontWeight={200}>
          Jl. Raya Katapang-Andir, Sangkanhurip, Katapang, Kab.Bandung
          <br />
          Jl. Kebon Bibit Barat, Tamansari, Bandungwetan, Kota Bandung
        </Typography>
      </div>
    </>
  );
};

export default BuktiBayar;
