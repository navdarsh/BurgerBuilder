import Auxilary from "../../hoc/Auxilary";
import './Layout.css'

const layout = (props) => (
  <Auxilary>
    <div className="Layout">Toolbar,Sidebar,Backdrop</div>
    <main>{props.children}</main>
  </Auxilary>
);

export default layout;
