import './EmployeeCard.css';

const placeholder = 'http://placehold.co/100x100';
function EmployeeCard(props) {
    return (
        <div className="EmployeeCard">
            <div className='CardPos'><img className="EmployeeCardImage" src={placeholder} alt={placeholder} /></div>
            <div><p>EmployeeID: {props.EmployeeID}</p></div>
            <div><p>Name: {props.EmployeeName}</p></div>
            <div><p>Designation: {props.EmployeeDesignation}</p></div>
        </div>
    )
}

export default EmployeeCard;
