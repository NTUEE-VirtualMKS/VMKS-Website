// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import type { MaterialType } from "./MaterialType";
import { handleBorrow } from "./Handle";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

type MaterialProps = {
  materials: MaterialType[];
};

// const onResize = () => {};

// const WINDOW_WIDTH = window.innerWidth;

export const MaterialList = (props: MaterialProps) => {
  return (
    <div className="mateirial-list">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {props.materials.map((material) => {
          return (
            <Grid item xs={1} sm={3} md={3} key={material.id}>
              <Paper
                elevation={3}
                className="mateirial-preview"
                key={material.id}
              >
                <div style={{ border: "20px", padding: "15px" }}>
                  <Link to={`/MaterialAndTool/Material/${material.id}`}>
                    <img
                      src={material.photoLink}
                      style={{ border: "solid black" }}
                      height={window.innerHeight / 4}
                    ></img>
                    <h2>{material.name}</h2>
                  </Link>
                  <p>Position: {material.position}</p>
                  <Button variant="outlined" onClick={handleBorrow}>
                    Borrow
                  </Button>
                </div>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
