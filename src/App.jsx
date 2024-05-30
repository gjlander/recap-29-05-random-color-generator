import './styles.css';
import { useState } from 'react';
export default function App() {
    //store our color array in a state
    const [color, setColor] = useState([100, 220, 7]);

    //format it into rgb, or rgba as we did at the end of the recap
    const formattedColor = `rgba(${color.join()})`;

    const updateColor = () => {
        //declare an empty array
        const random = [];
        //iterate over it three times to generate our rgb values
        for (let i = 0; i < 3; i++) {
            //use the math object to generate a whole number 0-255
            random.push(Math.floor(Math.random() * 256));
        }
        //our a value needs to be a single decimal 0-1
        random.push(Math.random().toFixed(1));
        //use the setter function to update our color state, which will trigger a rerender
        setColor(random);
    };

    //store the boolean result of this comparison in a variable
    const isDark = color.reduce((a, b) => a + b) < 127 * 3;
    return (
        // since we depend on a JS variable, it's appropriate to use inline styles in our JSX
        <div className='app' style={{ backgroundColor: formattedColor }}>
            <div className='instructions'>
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
                <div id='randomColor'>
                    {/* We can also conditionally apply classes */}
                    <h2 className={isDark ? 'white' : 'black'}>
                        Your color is: {formattedColor}
                    </h2>
                    <button
                        className={isDark ? 'light-button' : 'dark-button'}
                        onClick={updateColor}
                    >
                        New Color!
                    </button>
                </div>
            </div>
        </div>
    );
}
