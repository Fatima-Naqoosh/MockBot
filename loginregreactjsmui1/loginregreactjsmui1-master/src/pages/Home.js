import React, { Component } from 'react';
import home from '../images/home3.jpg';
import './Home.css';

class Home extends Component {
  render() {
    const myStyle={
      backgroundImage: `url(${home})` ,
      height:'100vh',
      marginTop:'-40px',
      fontSize:'20px',
      color: 'white',
      fontfamily: 'Arial',
      textalign: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    
    return <>
      <div style={myStyle}>
        <div className='center'>
        <h1>Boost Your Confidence <br/> Give Mock Interviews</h1>
        </div>
        <div align="center">
        <p1 textalign='center'>MockBot is the platform to help you prepare better for technical interviews <br/> and increase the chances fir cracking it.</p1>
        </div>
      </div>
      </>
  }
};

export default Home;
// import { Grid } from "@mui/material";

// const Home = () => {
//   return <>
//     <Grid container justifyContent='center'>
//       <Grid item sm={10}>
//         <h1>Home Page</h1>
//         <hr />
//         <p>Home Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum officiis debitis vel tenetur quos animi vero voluptates reiciendis, omnis sed in libero temporibus deleniti pariatur expedita corporis officia. Odit enim, quasi facere magnam earum officiis ipsa aliquid impedit velit quibusdam dolor ex esse ratione explicabo quod, culpa temporibus? Dolorem deleniti doloremque maxime quas deserunt. Ex aspernatur saepe illo eaque corrupti placeat, aperiam nulla adipisci itaque quos necessitatibus iure at minus non delectus ratione quod ad. Alias dolore perferendis est expedita iure! Nostrum laborum tempore amet commodi voluptas accusamus enim repudiandae, quia odio cumque, laboriosam architecto illo! Aliquid, fuga quis.</p>
//       </Grid>
//     </Grid>
//   </>;
// };

// export default Home;
