
* {
  margin: 20px;
  height: auto;
  border-radius: .5em;
}

body {
  background-color: skyblue;
}

.header {
  display: flex;
  background-image: url("./image/clouds2.jpg");
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
  height: 200px;
  box-shadow: 5px 5px 5px black;
}

.logo {
  margin-top: -150px;
}

.logo>h1 {
  color: white;
  font-family: 'ball-park';
  font-size: 2em;
  font-weight: normal;
  margin: 2;
  position: relative;
}

.logo>img {
  height: 250px;
  width: 250px;
  position: relative;
  left: -60px;
  top: 20px;
}

.navbar {
  margin-top: -50px;
}

nav>ul {
  margin-left: 200px;
  margin-top: 200px;
  display: flex;
  list-style-type: none;
  text-transform: uppercase;
}

nav>ul>li {
  border: solid white;
  background-image: url("./image/umbrella.jpg");
  box-shadow: 5px 5px 5px black;
}

nav>ul>li>a {
  color: white;
}

.navbar ul li a:hover {
  font-weight: bold;
  color: white;

}

.body {
  display: flex;
  border: solid;
  background-image: url("./image/clouds2.jpg");
  background-size: cover;
}

.forcast {
  width: 50%;
  text-align: center;
}

h3 {
  border: solid;
  width: 50%;
  background-image: url("./image/umbrella.jpg");
  background-size: cover;
  box-shadow: 3px 3px 3px black;
}

.news {
  border:solid;
  background-color: skyblue opacity: 0.5;
  width: 45%;
  text-align: left;
  text-shadow: 2px 2px 2px black;
}

.news>img {
  clear: right;
  width: 500px;
  height: 510px;
  box-shadow: 5px 5px 5px black;
  margin-left: -5px;
}

.card-img-top {
  margin-left: -0px;
}

.weatherwidget-io {
  box-shadow: 5px 5px 5px black;
  border-radius: 3em;
}

footer {
color: white;
background-image: url("./image/clouds2.jpg");
background-size: cover;
position: center;
bottom: 0px;
padding: 17px 0 18px 0;

text-align: center;
width: 97%;
bottom: 0px;
}
