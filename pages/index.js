import Head from 'next/head'
import NavBar from './components/NavBar'

const houses = [
  { "id" : 1, "name" : "บ้านเดี่ยว", "price" : "600", "image" : "/room1/room.png" },
  { "id" : 2, "name" : "บ้านแฝด", "price" : "500", "image" : "/room2/room.png" },
  { "id" : 3, "name" : "ห้องพักไซส์เล็ก", "price" : "400", "image" : "/room3/room.png" },
  { "id" : 4, "name" : "บ้านพักริมน้ำ", "price" : "400", "image" : "/room4/room.png" },
  { "id" : 5, "name" : "ทรงไทยไซส์เล็ก", "price" : "500", "image" : "/room5/room.png" },
  { "id" : 6, "name" : "ทรงไทยหลังใหญ่", "price" : "800", "image" : "/room6/room.png" },
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

      {/* <div className="container">
        <div className="row row-cols-1 row-cols-md-3">
        {
          houses.map(value => (
            <div className="col mb-4" key={value.id}>
              <div className="card" >
                <img src={value.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <p className="card-text"><h5 >แบบ {value.name}</h5></p>
                  <p className="card-text"><h5 >ราคา {value.price} ต่อคืน</h5></p>
                </div>
              </div>             
            </div>
          ))
        }
        </div>
      </div> */}

      <div className="">
        <div className="roww">
        {
          houses.map(value => (
            <div className="column" key={value.id}>
              <div className="cardd" >
                <img src={value.image} className="rounded img-fluid" alt="Responsive image"></img>
                <div className="card-body">
                  <p className=""><h5 >{value.name}</h5></p>
                  <p className=""><h5 >ราคา {value.price} ต่อคืน</h5></p>
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


      .container {
        margin-top: 20px;
      }
      
      .cardd :hover {
        box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.4);

      }
      

      .column {
        float: left;
        width: 25%;
        padding: 0 10px;
        margin-bottom: 20px
      }

      .roww {
        margin: 0 50px;
      }

      .roww:after {
        content: "";
        display: table;
        clear: both;
      }


      @media screen and (max-width: 850px) {
        .column {
          width: 100%;
          display: block;
          margin-bottom: 20px;
        }
        .roww {
          margin: 0 10px;
        }
      }

      .cardd {
        background-color: #f2f8f9;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        text-align: center;
        border-radius: 5px;
      }

    `
    }</style>

  </div>
)

export default Index
