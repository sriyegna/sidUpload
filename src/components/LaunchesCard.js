import "./LaunchesCard.css"
export const LaunchesCard = props => {
return(
    <div className="cardBorder">
        <ul style={{ 
            "list-style": "none"   
        }}>
            <li><img src={props?.rowData?.links?.patch?.small} alt="Elon tusk"/></li>
            <li>{props.rowData?.name}</li>
            <li>{props.rowData?.date_local}</li>

        </ul>
    </div>
    )
}