import { ReactComponent as Raven4 } from '../assets/ravens_dots_and_clouds/raven4.svg';
import "./range-slider.css"

function ShowResults() {

    let guess = sessionStorage.getItem("guess")

    return (

        <>

            <div>
                <h1>What percentage of researchers do you think</h1>
                <h1>believe that there is a reproducibility crisis?</h1>
            </div>
            <div>
                <Raven4 />
            </div>
            <div><h1>Your Answer {guess}%.   Right Answer is 91%.</h1></div>
            <br></br>
            <div><h2>SHOCKED?</h2></div>
            <ul>
                <li>Why do you think your guess was so far off?</li>
                <li>What might this suggest about your lab, its blind spots, and your field's culture more broadly?</li>
            </ul>
            <br></br>
            <div>This data comes as part of a 2016 online Nature survey.</div>
            <div>Baker, M. 1,500 scientists lift the lid on reproducibility. Nature 533,</div>
            <div>452-454 (2016) https://dol.org/10.1038/533452a</div>


        </>
    )
}


export default ShowResults;