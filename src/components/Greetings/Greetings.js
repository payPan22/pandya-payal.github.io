import { TypeAnimation } from 'react-type-animation';

const Greetings = () => {
    return (
        <section  id='greetings'>
            <TypeAnimation
                sequence={[
                    'Hi, I’m Payal 👋',
                    1000,
                    'I develop React & Angular apps',
                    1000,
                    'I love building seamless UX & performant web apps',
                    1000,
                    'Explore my work below ⬇️',
                    1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fonFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
            />
        </section>
    );
}

export default Greetings;