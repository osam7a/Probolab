import 'bootstrap/dist/css/bootstrap.min.css';

function Question(props) {
    var question_data = props.question_data;
    var problem_text = question_data[0];
    var problem_description = question_data[1];
    var problem_answer = question_data[2];
    var problem_steps = question_data[3];
    var problem_subject = question_data[4]

    return (
        <fieldset className="fieldset flex-grow-1">
            <span>{problem_subject}</span>
            <div className="main">
                <h1 id="question_text">{problem_text}</h1>
                <h3 className="text-muted">{problem_description}</h3>
            </div>
        </fieldset>
    )
}

export default Question;