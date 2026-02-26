



function Statistics({courseResults}){
    let min = courseResults[0].score;
    let max = courseResults[0].score;
    let sum = 0;

    courseResults.forEach(r=> {
        if(r.score < min) min = r.score;
        if(r.score > max) max = r.score;
        sum += r.score;
    });

    const average = Math.round(sum / courseResults.length);



    return(

        <>
        <tr className="bold">
            <td>Min</td>
            <td>Max</td>
            <td>Average</td>
        </tr>
        <tr>
            <td>{min}</td>
            <td>{max}</td>
            <td>{average}</td>
        </tr>
        </>
    )
}

export default Statistics;