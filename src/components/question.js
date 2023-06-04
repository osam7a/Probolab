import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

function Question(props) {
    var question_data = props.question_data;
    var problem_text = question_data[0];
    var problem_description = question_data[1];
    var problem_answer = question_data[2];
    var problem_steps = question_data[3];
    var problem_subject = question_data[4]

    return (
        <div className="fieldset flex-grow-1 d-flex flex-column">
            <span>{problem_subject}</span>
            <div className="main flex-grow-1 d-flex flex-column">
                <div className="row gap-3 flex-grow-1 flex-md-grow-0">
                    <div className="col-md">
                        <h1 id="question_text">{problem_text}</h1>
                        <h3 className="text-muted">{problem_description}</h3>
                    </div>
                    <div className="col-md order-md-last order-first">
                        <canvas style={{border: "1px solid red"}} className="w-100 h-100"></canvas>
                    </div>
                </div>
                <div className="row flex-md-grow-1">
                    <Button style={{backgroundColor: "#759aab"}}>test</Button>
                </div>
            </div>
        </div>
    )
}

export default Question;