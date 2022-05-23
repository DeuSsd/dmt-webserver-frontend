import { connect } from "react-redux";
import { onTabPageClickCreator } from "../../../../../../redux/createOrderReducer";
import NavigationPanel from "./NavigationPanel";


const mapStateToProps = (state) => {
    return {
        // APIs: state.createOrderPage.APIs,
        // APIsOrderID: state.createOrderPage.APIsOrderID,
        // tabPages: state.createOrderPage.Pages,
        // selectedPage: state.createOrderPage.SelectedPage,
        // tabLinks: state.createOrderPage.TabLinks,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCangeTabCrator: tab => dispatch(onTabPageClickCreator(tab)),
    }
}

const NavigationPanelContainer = connect(mapStateToProps, mapDispatchToProps)(NavigationPanel)


export default NavigationPanelContainer;