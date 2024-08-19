import Card from "./Card"

function ProductItem(props){
    return(
        <>
        <div className="main-container">
            <div className="date">
                {props.date}
            </div>
            <div className="title">
                <h3>{props.name}</h3>
            </div>
        </div>
        </>
    )
}
export default ProductItem