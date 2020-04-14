import Head from 'next/head'
import NavBar from './components/NavBar'

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
          <h1 className="display-4">แบบบ้านทั้งหมด</h1>
          <p className="lead">แบบบ้านทั้งหมด มีหลายแบบ หลายสไตล์ หลายราคา</p>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <img src="/room1/room.png" className="card-img-top" alt="..."></img>
          <div className="card-body">
            <p className="card-text"><h5 class="card-title">แบบที่ 1 บ้านเดี่ยว</h5></p>
          </div>
        </div>
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
      
    `
    }</style>

  </div>
)

export default Index
