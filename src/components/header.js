import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { VscSettingsGear } from 'react-icons/vsc';

function Header() {
    return (
        <div className="d-flex flex-row p-4 mb-4">
            <h1 style={{marginBottom: 0}}>Probolab</h1>
            <Button className="ms-auto fs-2 d-flex" color="light" style={{padding: 0}}>
                <VscSettingsGear className="my-auto mx-2" />
            </Button>
        </div>
    );
}

export default Header;