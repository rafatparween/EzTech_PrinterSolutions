import Boxes from "./components/boxes";
import Drivers from "./components/Drivers";
import SupportOptions from "./components/SupportOptions";
import SupportInfo from "./components/SupportInfo";

function Home(){
  return(
    <>
      <div className="content">
        <Boxes/>
        <Drivers/>
        <SupportOptions/>
        <Boxes/>
        <SupportInfo/>
      </div>
    </>
  )
}
export default Home;