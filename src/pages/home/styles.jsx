import image from "../../assets/bg.png"

const styles = {
	container: {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    paddingBottom: "100px"
	},
};

export default styles;
