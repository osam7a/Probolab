import 'bootstrap/dist/css/bootstrap.min.css';

function Question(props) {
    var question_data = props.question_data;
    var problem_text = question_data[0];
    var problem_description = question_data[1];
    var problem_answer = question_data[2];
    var problem_steps = question_data[3];
    var problem_subject = question_data[4];
    var hide_input = question_data[5];
    var problem_answer_label = question_data[6] || "Answer";

    return (
        <div className="fieldset flex-grow-1 d-flex flex-column">
            <span style={{width: "max-content"}}>{problem_subject}</span>
            <div className="main flex-grow-1 d-flex flex-column gap-3">
                <div className="row gap-3 flex-grow-1 flex-md-grow-0">
                    <div className="d-flex flex-column col-md p-0">
                        <h1 id="question_text">{problem_text}</h1>
                        <h3 className="text-muted">{problem_description}</h3>
                        {hide_input ? null :
                        <div className="mt-auto" id="prediction-container">
                            <div className="input-group">
                                <span className="input-group-text" id="prediction-label">{problem_answer_label}</span>
                                <input type="text" className="form-control" placeholder="Enter your prediction here" aria-label="Username" aria-describedby="basic-addon1" id="prediction" />
                            </div>
                        </div>
                        }
                    </div>
                    <div className="col-md order-md-last order-first p-0">
                        <canvas style={{border: "1px solid red"}} className="w-100 h-100"></canvas>
                    </div>
                </div>
                <div className="row flex-md-grow-1 d-flex h-100 border border-dark rounded p-3 flex-column">
                    <div id="steps" style={{flexGrow: 1, overflowY: 'auto', height: '200px'}}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question;