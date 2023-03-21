import Header from "../components/common/header";
import Herosection from "../components/Home/herosection";
import Pager1 from "../components/Home/pager1";
import Wetrust from "../components/Home/wetrust";
import Gst from "../components/Home/gst"
import Gstmiddle from "../components/Home/gstmiddle"
import Gstfooter from "../components/Home/gstfooter";
import Footer from "../components/Home/footer"
import Footer2 from "../components/Home/footer2"

function Home () {

const name = 'hello'
return (
    
    <div id="home"> 
        <Header/>
        <Herosection/>
        <Pager1/>
        <Wetrust/>
        <Gst/>
        <Gstmiddle/>
        <Gstfooter/>
        <Footer/>
        <Footer2/>
    </div>
)
}

export default Home;