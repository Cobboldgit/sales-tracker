import { connect } from "react-redux"

function SalesCustomersList() {
    return (
        <div>
            {

            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        customersL state.customersReducer.customersw
    }
}

export default connect(mapStateToProps) (SalesCustomersList)
