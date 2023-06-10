import { resetTest } from "helpers/resetTest";
import { useSelector } from "react-redux";
import { State } from "store/reducer";
import "stylesheets/Result.css";

export default function Result() {
    const {
        word: { wordList, typedHistory, currWord },
        preferences: { timeLimit },
    } = useSelector((state: State) => state);
    const spaces = wordList.indexOf(currWord);
    let correctChars = 0;
    const result = typedHistory.map(
        (typedWord, idx) => typedWord === wordList[idx]
    );
    result.forEach((r, idx) => {
        if (r) correctChars += wordList[idx].length;
    });
    const wpm = ((correctChars + spaces) * 60) / timeLimit / 5;
    return (
        <div className="result">
            <table className="table">
                <tbody>
                    <tr>
                        <td colSpan={2} align="center">
                            <h1>{"Speed : " + Math.round(wpm) + " wpm"}</h1>
                        </td>
                    </tr>
                    <tr>
                        <th> </th>
                        <h1>{"Accuracy : "+Math.round(result.filter((x) => x).length*100/(result.length))}%</h1>
                    </tr>
                    <tr>
                        <th>   </th>
                        <h3>{"Number of Words typed : "+result.length}</h3>
                    </tr>
                    <tr>
                        <td colSpan={2} align="center">
                            <button className="button" onClick={() => resetTest()}>Restart</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
