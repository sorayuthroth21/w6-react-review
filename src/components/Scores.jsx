

import { HTML_RESULTS } from "../data.js"
import { JAVA_RESULTS } from "../data.js"
import { PYTHON_RESULTS } from "../data.js"
import { ENGLISH_RESULTS } from "../data.js"

import Statistics from "./Statistics.jsx"

function Scores({courseName, courseResults}){
   
    
    return(
        
        <div class="scores">
          <h1>{courseName}</h1>

          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
                {courseResults.map(r => (
        
                    
              <tr>
                <td>{r.firstName}</td>
                <td>{r.lastName} </td>
                <td className= {r.score < 50 ? "warning" : ""}>{r.score}</td>
              </tr>
                ))}
        
            <Statistics courseResults = {courseResults}/>
            
              
            </tbody>
          </table>
        </div>
      
    );
}
export default Scores 