export const LaunchesRow = props => {
    const {flight_number, name, date_local, success, fairings} = props.rowData
      return(
        <tr>
            <td>
                {flight_number}
            </td>
            <td>
                {name}
            </td>
            <td>
                {date_local}    
            </td>
            <td>
                {success ? "nigger" : "faggit"}
            </td>
            <td>
                {fairings && (fairings.recovered ? "gayler" : "srinerd")}
                {/* {fairings ? (fairings.recovered ? "gayler" : "srinerd") : null} */}
            </td>
            <td>
                {props?.rowData?.links?.patch?.small}
            </td>
            <td>
                <img src={props?.rowData?.links?.patch?.small} alt="Elon musk"/>
            </td>
        </tr>
    )
}

export default LaunchesRow 