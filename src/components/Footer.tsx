import { useSelector } from "react-redux";
import { State } from "store/reducer";
import "stylesheets/Footer.css";


export default function Footer() {
    const { timerId } = useSelector((state: State) => state.time);

    return (
        <div className={`bottom-area ${timerId ? "hidden" : ""}`}>
            <span className="hint">
                <kbd>Ctrl</kbd> + <kbd>k</kbd> to open command pallet
            </span>
            <span className="hint">
                <kbd>Tab</kbd> to restart test
            </span>
            <footer>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/RanjeetKumar7b/Typing-master.git">
                    <span>&lt;/&gt;</span> github
                </a>
            </footer>
        </div>
    );
}
