import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid2 as Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    Paper,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import styles from "./styles";
import { useState } from "react";
import niat from "../../assets/niat.png";
import { useNavigate } from "react-router-dom";

const ArtikelPenuh = () => {
    let navigate = useNavigate();
    const [age, setAge] = useState("");

    const routeChange = () => {
        let path = `/`;
        navigate(path);
    }
    return (
        <>
            <div style={styles.container}>
                <Typography variant='h4' mt={4} mb={6} color='white' fontWeight={300}
                    component={ButtonBase}
                    onClick={routeChange}
                >
                    <b>Yuk</b>Zakat.id
                </Typography>
                <Container
                    disableGutters
                    maxWidth='lg'
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
                    <Typography
                        variant='h4'
                        mt={2}
                        color='#4a628a'
                        fontWeight={700}
                        textAlign='center'
                    >
                        Judul
                    </Typography>



                    <Typography
                        variant='h6'
                        my={2}
                        color='text.secondary'
                        fontWeight={700}
                        textAlign='center'
                    >
                        Penulis
                    </Typography>

                    <img width="720px" src="https://randomwordgenerator.com/img/picture-generator/55e6d5444254af14f1dc8460962e33791c3ad6e04e50744075277cdc964fc0_640.jpg" alt="" />
                    <Typography variant="body1" my={4} sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </Container >
            </div >
            <div
                style={{
                    width: "100%",
                    padding: "50px 80px",
                    backgroundColor: "#4A628A",
                }}
            >
                <Typography variant='h5' mb={2} color='white' fontWeight={300}>
                    <b>Yuk</b>Zakat.id
                </Typography>
                <Typography variant='body2' color='white' fontWeight={200}>
                    Jl. Raya Katapang-Andir, Sangkanhurip, Katapang, Kab.Bandung
                    <br />
                    Jl. Kebon Bibit Barat, Tamansari, Bandungwetan, Kota Bandung
                </Typography>
            </div>
        </>
    );
};

export default ArtikelPenuh;
