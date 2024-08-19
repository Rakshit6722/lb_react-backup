import { useNavigate } from "react-router-dom"
function Support(){
    const navigate = useNavigate();
    const clickhandler = () => {
        navigate("/about")

    }
    const gobackclickhandler = () =>{
        navigate(-1);
    }
    return(
        <>
        <div>Support Page</div>
        <button onClick={clickhandler}>About page</button>
        <button onClick={gobackclickhandler}>Go back</button>
        </>
    )
}
export default Support