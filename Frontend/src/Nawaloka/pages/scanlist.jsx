import { Link } from "react-router-dom";

function ClinicList() {
  return (
    <div className="Clinicdescription">
      <h1>Clinic List</h1>
      <ul>
        <li>
          <Link to="/clinic/1">Clinic 1</Link>
        </li>
        <li>
          <Link to="/clinic/2">Clinic 2</Link>
        </li>
        <li>
          <Link to="/clinic/3">Clinic 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default ClinicList;
