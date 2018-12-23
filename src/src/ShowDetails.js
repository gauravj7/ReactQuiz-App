import React from 'react';
import './ShowDetails.css';
import "typeface-roboto";
import Image from 'material-ui-image'
import Person from '@material-ui/icons/Person';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';


const ShowDetails = (props) => {

  return (

    <Paper className="details">


            <Typography variant="h3" component="h2" align="center">
            <Person  fontSize="large"  /> User Details

              <br />
              <br />
            </Typography>


            <div >
                  <div className="image">
                  <Image
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYm-KcyvHy3PDkmh0V9KzkUk26255h0RwthshiaoanTnfH2B_IRg"
                  />
                  </div>


              <div className="text">
              <Typography variant="h4" component="h2">
                Name:  {props.name}
              </Typography>

              <Typography variant="h4" component="h2" >
                Email:  {props.email}
                <br />
              </Typography>

              <Typography variant="h4" component="h2">
                Age:  {props.age}
                <br />
              </Typography>

              <Typography variant="h4" component="h2">
                Gender:  {props.gender}
                <br />
              </Typography>
                <br />
              <Chip
                  label={`The user is a ${props.gender}`}
                  color="primary"
                />

              </div>

              </div>


    </Paper>
  );

};

export default ShowDetails;
