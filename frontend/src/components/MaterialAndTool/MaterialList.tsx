import { Link } from "react-router-dom";
import type { MaterialType } from "../../shared/type.ts";
import { handleBorrow } from "./Handle";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useQuery } from "@apollo/client";
import Overiew from "../MDX/Overview";

import { ALL_MATERIAL_QUERY } from "../../graphql/queries";
export const MaterialList = () => {
  const { data, loading, error } = useQuery(ALL_MATERIAL_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  const materials = JSON.parse(JSON.stringify(data?.AllMaterials));
  return (
    <div className="mateirial-list">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {materials.map((material: MaterialType) => {
          return (
            <Grid item xs={1} sm={3} md={3} key={material.id}>
              <Paper
                elevation={3}
                className="mateirial-preview"
                key={material.id}
              >
                <div className="border-1 p-4">
                  <Link to={`/MaterialAndToolPage/Material/${material.id}`}>
                    <Overiew markdown={`![](${material.photoLink})`} />
                    <h2>{material.name}</h2>
                  </Link>
                  <p>所在位置: {material.position}</p>
                  <Button variant="outlined" onClick={handleBorrow}>
                    借用
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
