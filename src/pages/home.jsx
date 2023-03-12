import Header from "../components/common/header";
import Herosection from "../components/Home/herosection";
import Pager1 from "../components/Home/pager1";
import Wetrust from "../components/Home/wetrust";
function Home () {

const name = 'hello'
return (
    
    <div id="home"> 
        <Header/>
        <Herosection/>
        <Pager1/>
        <Wetrust/>
    </div>
)
}

export default Home;