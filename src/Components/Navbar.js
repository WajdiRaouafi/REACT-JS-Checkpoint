import React from "react";

const navbarstyle = { 
display: "flex",
justifyContent: "space-around",
alignItems: "center",
backgroundColor:"white",
boxShadow: "10px 5px 5px 5px gray",
height : "50px"
};

const buttonStyleAcceuil={
backgroundColor: "#3c83df", 
color:"white",
border: "none",
fontWeight:"bold",
widht:"50px"
};

const buttonStyleName={...buttonStyleAcceuil, backgroundColor : "red"};

function Navbar() {
  const user = "Wajdi Raouafi";
  const userInTable = user.split(" ");
  const caracterOne = userInTable[0][0];
  const caracterTwo = userInTable[1][0];

  return (
    <div style={navbarstyle}>
      <button style = {buttonStyleAcceuil}>Acceuil</button>
      <button style= {buttonStyleName}>{`${caracterOne} ${caracterTwo}`}</button>
    </div>
  );
}

export default Navbar;
