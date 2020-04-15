import Head from 'next/head'
import NavBar from './components/NavBar'

const houses = [
  { "name" : "บ้านเดี่ยว", "price" : "600", "image" : "/room1/room.png" },
  { "name" : "บ้านแฝด", "price" : "500", "image" : "/room2/room.png" },
  { "name" : "ห้องพักไซส์เล็ก", "price" : "400", "image" : "/room3/room.png" },
  { "name" : "บ้านพักริมน้ำ", "price" : "400", "image" : "/room4/room.png" },
  { "name" : "บ้านทรงไทยไซส์เล็ก", "price" : "500", "image" : "/room5/room.png" },
  { "name" : "บ้านทรงไทยหลังใหญ่", "price" : "800", "image" : "/room6/room.png" },
]


const Index = () => (
  <div>
    <Head>
        <title>Fang Fang resort</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
    </Head>
    <NavBar/>  
    <div className="body">

      <div className="jumbotron jumbotron-fluid" id="all">
        <div className="container">
          <h1 className="display-5">แบบบ้านทั้งหมด</h1>
          <p className="lead">แบบบ้านทั้งหมด มีหลายแบบ หลายสไตล์ หลายราคา</p>
        </div>
      </div>

      

      <div className="container">
        <div className="row row-cols-1 row-cols-md-3">
        {
          houses.map(value => (
            <div class="col mb-4">
              <div className="card">
                <img src={value.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <p className="card-text"><h5 class="card-title">แบบ {value.name}</h5></p>
                  <p className="card-text"><h5 class="card-title">ราคา {value.price} ต่อคืน</h5></p>
                </div>
              </div>             
            </div>
          ))
        }
        </div>
      </div>

      <div className="jumbotron jumbotron-fluid" id="conta">
        <div className="container">
          <h1 className="display-5">ติดต่อเรา</h1>
          <p className="lead"></p>
        </div>
      </div>

      <div className="container">

      </div>
    </div>    
    

    <footer>

    </footer>

    <style jsx>{
    `   
      
      .body {
        font-family: 'Mitr', sans-serif;
      }

      .jumbotron {
        background: linear-gradient(to right, rgba(21, 87, 153, 0.8), rgba(21, 153, 87, 0.8));
        color: white;
      }

      .card {
        width: 20rem;
      }

      .container {
        margin-top: 20px;
      }

      .jumbotron {
        // height: 100px
      }
 

      .card {
        // display: block;
        margin-buttom: 20px
        top: 0px;
        position: relative;
        background-color: #f2f8f9;
        border-radius: 4px;
        margin: 12px;
        z-index: 0;
        overflow: hidden;
        border: 1px solid #f2f8f9;
      }
      
      .card :hover {
        transition: all 0.2s ease-out;
        box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
        top: -2px;
        border: 1px solid #cccccc;
        // background-color: white;
      }
      
      .card :before {
        content: "";
        position: absolute;
        z-index: -1;
        top: -16px;
        right: -16px;
        background: #00838d;
        height: 32px;
        width: 32px;
        border-radius: 32px;
        transform: scale(2);
        transform-origin: 50% 50%;
        transition: transform 0.15s ease-out;
      }
      
      .card :hover:before {
        transform: scale(2.15);
      }
    `
    }</style>

  </div>
)

export default Index
