import "./spinner.css"

function Spinner(){
    return(
        <svg viewBox="25 25 50 50" className="svg-spinner">
            <circle r="20" cy="50" cx="50" className="circle-spinner"></circle>
        </svg>
    )
}

export default Spinner;