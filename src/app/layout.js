"use client"
import "../../styles/index.scss"; 

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


// https://fonts.googleapis.com/css2?family=
// Charm:wght@400;700&family=
// Jost:wght@300;400;500;600;700&family=Oregano&family=
// Roboto:wght@300;400;500;700;900&display=swap

// --tp-ff-body: 'Jost', sans-serif;
// --tp-ff-heading: 'Jost', sans-serif;
// --tp-ff-p: 'Jost', sans-serif;
// --tp-ff-jost: 'Jost', sans-serif;
// --tp-ff-fontawesome: "Font Awesome 6 Pro";
// --tp-ff-roboto: 'Roboto', sans-serif;
// --tp-ff-oregano: 'Oregano', cursive;
// --tp-ff-charm: 'Charm', cursive;

// import { Charm, Jost, Roboto, Oregano} from "next/font/google";
// const charm = Charm({
//   weight: ["400", "700"],
//   subsets: ["latin"], 
//   variable:  "--tp-ff-charm",
// });
// const jost = Jost({
//   weight: [ "300","400","500","600", "700"],
//   subsets: ["latin"], 
//   variable:  ["--tp-ff-body", "--tp-ff-heading", "--tp-ff-p", "--tp-ff-jost",]
// });

// const roboto = Roboto({
//   weight:  [ "300","400","500", "700", "900"],
//   subsets: ["latin"], 
//   variable:  "--tp-ff-roboto",
// });

// const oregano = Oregano({
//   weight:  [ "400",],
//   subsets: ["latin"], 
//   variable:  "--tp-ff-oregano",
// });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <title>Shofy - Multipurpose eCommerce Next js Template</title>
        <link rel="icon" src="/public/favicon.ico" type="image/png" /> 
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Charm:wght@400;700&family=Jost:wght@300;400;500;600;700&family=Oregano&family=Roboto:wght@300;400;500;700;900&display=swap" /> 
      </head>
      <body>{children}</body>
    </html>
  )
}
