import Head from 'next/head'

const NavBar = () => {
    return (
        <div>
            <Head>
                <title>Fang Fang resort</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
                <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@300&display=swap" rel="stylesheet"></link>
            </Head>

            <main>
                <div className="topnav">

                    <img src="logo.png" width="100" height="50"></img> 
                    <span className="logoName">แฟง ฟาง รีสอร์ท</span>
                    <div className="topnav-right">
                        <a href="#all" className="allHouse">แบบบ้านทั้งหมด</a>
                        <a href="#contact" className="contact">ติดต่อเรา</a>
                        <a href="#map" className="map">แผนที่</a>
                    </div>
                </div>
            </main>

            <style jsx>{`

                .logoName {
                    margin-left: 20px;
                    font-size: 20px;
                    color: #fff;
                }
                .topnav {
                    background: linear-gradient(to right, #155799, #159957);
                    overflow: hidden;
                    padding: 10px;
                    font-family: 'Mitr', sans-serif;
                }
                
                .topnav a {
                  float: left;
                  color: #f2f2f2;
                  text-align: center;
                  padding: 14px 16px;
                  text-decoration: none;
                  font-size: 17px;
                  
                }
                
                .topnav a:hover {
                  background-color: #F8F9F9;
                  color: black;
                //   border-radius: 0px 10px 10px 0px;
                  transition: .8s;
                  
                }

                .allHouse {
                    border-left: 1.5mm solid #EB984E;
                }

                .contact {
                    border-left: 1.5mm solid #58D68D;
                }

                .map {
                    border-left: 1.5mm solid #F4D03F;
                }

                .topnav-right {
                  float: right;
                  height: 100%;
                }


            `}</style>
        </div>
    )
}

export default NavBar
