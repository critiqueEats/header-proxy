module.exports = (restaurantId) => `
<!DOCTYPE html>
   <html>
   <head>
     <title>Lorem Yelpsum</title>
     <link rel="stylesheet" type="text/css" href="/styles.css">
   </head>
   <body>
     <div id="header"></div>
     <div id="gallery"></div>
     <div id="sidebar"></div>
     <div id="reviews"></div>
     <script type="text/javascript" src="http://127.0.0.1:3003/bundle.js"></script>
     <script type="text/javascript" src="http://127.0.0.1:3001/bundle.js"></script>
     <script type="text/javascript" src="http://127.0.0.1:3005/bundle.js"></script>
     <script type="text/javascript" src="http://127.0.0.1:5002/bundle.js"></script>
     <script>
     ReactDOM.render(
     React.createElement(Reviews, {restaurantId: ${restaurantId}}, null),
     document.getElementById("reviews")
     )
     ReactDOM.render(
       React.createElement(Header, {restaurantId: ${restaurantId}}, null),
       document.getElementById("header")
     )
     ReactDOM.render(
       React.createElement(Gallery, {restaurantId: ${restaurantId}}, null),
       document.getElementById("gallery")
     )
     ReactDOM.render(
       React.createElement(Sidebar, {restaurantId: ${restaurantId}}, null),
       document.getElementById("sidebar")
     )
     </script>
   </body>
 </html>`