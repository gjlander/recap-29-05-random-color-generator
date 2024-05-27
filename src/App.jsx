/* eslint-disable react/no-unescaped-entities */
import './styles.css';

export default function App() {
    return (
        <div className='App'>
            <div className='Instructions'>
                <div className='block'>
                    <h1>Random Color</h1>
                    <p>
                        In this project, we'll build a program that helps
                        designers think of new color schemes. Our program will
                        set the screen's background to a random color. Clicking
                        a button will refresh to a new, random color. Random
                        generators are a well-known tool for breaking a creative
                        rut.
                    </p>

                    <a
                        className='link'
                        href='https://react.dev/reference/react/useState'
                        target='_blank'
                    >
                        Help
                    </a>
                    <a
                        className='link'
                        href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random'
                        target='_blank'
                    >
                        Help
                    </a>
                </div>
                <div id='randomcolor'>
                    <h2>Your color is:</h2>
                    <button>New Color!</button>
                </div>
            </div>
        </div>
    );
}
