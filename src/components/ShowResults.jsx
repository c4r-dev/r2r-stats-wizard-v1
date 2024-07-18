import { ReactComponent as Raven4 } from "../assets/ravens_dots_and_clouds/raven4.svg";
import { ReactComponent as Raven61 } from "../assets/ravens_dots_and_clouds/raven6-1.svg";
import { ReactComponent as Raven62 } from "../assets/ravens_dots_and_clouds/raven6-2.svg";
import { ReactComponent as RavenIcon } from "../assets/ravens_isolated/raven-icon.svg";

import "./range-slider.css";

function ShowResults() {
    let guess = sessionStorage.getItem("guess");
    const actualAnswer = 91;

    return (
        <div className="content-container">
            <h1>
                What percentage of researchers do you think believe that there
                is a reproducibility crisis?
            </h1>

            <div className="percent-ravens-container">
                <div className="percent-raven-container-left">
                    <Raven61 style={{ width: "100%", margin: "0 auto" }} />
                    <h1>Your Answer</h1>
                    <h2>{guess}%</h2>
                </div>
                <div className="percent-raven-container-right">
                    <Raven62 style={{ width: "100%", margin: "0 auto" }} />
                    <h1>Right Answer</h1>
                    <h2>91%</h2>
                </div>
            </div>

            <div className="content-container-footer">
                <div className="footer-left">
                    <RavenIcon style={{ width: "100%", margin: "0 auto" }} />
                </div>
                <div className="footer-right">
                    <h2>SHOCKED?</h2>
                    {guess >= actualAnswer - 10 &&
                    guess <= actualAnswer + 10 ? (
                        <ul>
                            <li>
                                What do you think this should mean to your lab?
                            </li>
                            <li>How should it affect your work?</li>
                        </ul>
                    ) : guess < actualAnswer ? (
                        <ul>
                            <li>Why do you think your guess was so far off?</li>
                            <li>
                                What might this suggest about your lab, its
                                blind spots, and your field's culture more
                                broadly?
                            </li>
                        </ul>
                    ) : (
                        <ul>
                            <li>
                                Why do you suppose less people know about this
                                problem than you expected?
                            </li>
                            <li>
                                How do you think someone could end up holding
                                that belief?
                            </li>
                        </ul>
                    )}
                    <br></br>
                    <p>
                        <strong>
                            This data comes as part of a 2016 online Nature
                            survey.
                        </strong>
                    </p>
                    <p>
                        Baker, M. 1,500 scientists lift the lid on
                        reproducibility. Nature 533,
                    </p>
                    <p>
                        452-454 (2016){" "}
                        <a href="https://dol.org/10.1038/533452a">
                            https://dol.org/10.1038/533452a
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ShowResults;
