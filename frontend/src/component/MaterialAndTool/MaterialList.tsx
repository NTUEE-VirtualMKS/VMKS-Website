import React from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import { MaterialType } from './MaterialType';
import { handleBorrow } from './Handle';
import { Typography, Grid, Paper, Box, Button } from '@mui/material';


type MaterialProps = {
    materials: MaterialType[]
}

const onResize = () => {

}

const WINDOW_WIDTH = window.innerWidth;


export const MaterialList = (props: MaterialProps) => {

    return (
        <div className="mateirial-list">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {props.materials.map(material => {
                    return (
                        <Grid item xs={1} sm={3} md={3} key={material.id}>
                            <Paper elevation={3} className="mateirial-preview" key={material.id} sx={{ p: 5, pb: 2 }}>
                                <Link to={`/MaterialAndTool/Material/${material.id}`}>
                                    <img src={material.photoLink} style={{ border: 'solid black', }} height={window.innerHeight / 4}></img>
                                    <Typography variant='h4' color="black" sx={{ p: 1, pl: 2 }}>
                                        {material.name}
                                    </Typography>
                                    <Typography variant='h4' color="gray" sx={{ p: 1, pl: 2 }}>
                                        [{material.position}]
                                    </Typography>
                                </Link>

                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    p={2}
                                >
                                    <Button
                                        variant="contained"
                                        size="large"
                                        aria-label="add"
                                        onClick={handleBorrow}
                                        style={{ borderRadius: 25, backgroundColor: "#67B9C7" }}
                                    >
                                        Borrow
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );

}