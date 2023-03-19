import Header from "../components/common/header";
import Herosection from "../components/Home/herosection";
import Pager1 from "../components/Home/pager1";
import Wetrust from "../components/Home/wetrust";
import Gst from "../components/Home/gst"
import Gstmiddle from "../components/Home/gstmiddle"
import Gstfooter from "../components/Home/gstfooter";

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
    </div>
)
}

export default Home;