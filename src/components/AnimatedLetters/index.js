import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx = 0 }) => {
    return (
        <span>
            {strArray.map((char, i) => (
                <span key={i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))}
        </span>
    );
};

export default AnimatedLetters;
