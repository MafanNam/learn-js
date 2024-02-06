import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

function App() {
    return (
        <div className="card">
            <Avatar/>
            <div className="data">
                <Intro/>
                {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                <SkillList/>
            </div>
        </div>
    );
}

function Avatar() {
    return <img className="avatar" src="/marin.jpg" alt="Marin"/>;
}

function Intro() {
    return (
        <div>
            <h1>Marin Kitagawa</h1>
            <p>Is an above-average height girl with a slim waistline and light skin tone. Her eyes are naturally a dark
                brown, though she is almost always seen with dark pink color contacts when she isn't cosplaying.</p>
        </div>
    );
}

function SkillList() {
    return (
        <div className="skill-list">
            <Skill skill="Love 💕" color="blue"/>
            <Skill skill="Anime ⚡😊" color="orangered"/>
            <Skill skill="Job 🚴" color="pink"/>
            <Skill skill="Manga 🚴" color="purple"/>
        </div>
    );
}

function Skill(props) {
    return (
        <div className="skill" style={{backgroundColor: props.color}}>
            <span>{props.skill}</span>
        </div>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);
