import { useParams } from "react-router-dom";
// import useFetchMaterial from "../../hooks/useFetchMaterial";
import { handleBorrow, handleRepair } from "./Handle";
import { Button } from "@mui/material";
// import Paper from "@mui/material";
import { Stack } from "@mui/material";
import { RouteBar } from "./RouteBar";
import { useQuery } from "@apollo/client";
import { ALL_MATERIAL_QUERY } from "../../graphql/queries";

const MaterialDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(ALL_MATERIAL_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  const allMaterials = JSON.parse(JSON.stringify(data?.AllMaterials));
  const eachMaterial = allMaterials.find(
    (material: any) => material.id === parseInt(id as string)
  );

  return (
    <div className="material-detail">
      {eachMaterial && (
        <div>
          <RouteBar Route={eachMaterial?.category} />
          <h1 className="bigTitle">
            <center>{eachMaterial?.name}</center>
          </h1>
          <Stack direction="row" spacing={2}>
            <div>
              <p>Position: {eachMaterial?.position}</p>
              <p>Intro: {eachMaterial?.description}</p>
              {eachMaterial?.remain && (
                <p>There are {eachMaterial?.remain} remaining</p>
              )}
              {eachMaterial?.tutorialLink !== "" &&
                eachMaterial?.tutorialLink !== undefined && (
                  <a
                    href={eachMaterial?.tutorialLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tutorial
                  </a>
                )}
            </div>
            <div>
              <img
                src={eachMaterial?.photoLink}
                alt="GeeksforGeeks logo"
                height={window.innerHeight / 3}
              ></img>
              <Stack direction="row" spacing={2}>
                <Button onClick={handleBorrow} variant="outlined">
                  Borrow
                </Button>
                <Button onClick={handleRepair} variant="outlined">
                  Repair
                </Button>
              </Stack>
            </div>
          </Stack>
          <br></br>
        </div>
      )}
    </div>
  );
};

export default MaterialDetail;
