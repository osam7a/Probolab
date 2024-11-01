import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { VscSettingsGear } from 'react-icons/vsc';

function Header() {
    return (
        <div class="py-4 mb-4">
            <div className="d-flex flex-row">
                <h1 style={{marginBottom: 0}}>Probolab</h1>
                <Button className="ms-auto fs-2 d-flex" color="dark" style={{padding: 0}}>
                    <VscSettingsGear className="my-auto mx-2" />
                </Button>
            </div>
            <hr />
        </div>
    );
}

export default Header;