
import profile from "@/assets/img/employee.webp"
import reactLogo from "@/assets/img/react.svg"
import PropTypes from "prop-types"

const Greetings = (props) => {
    const {name} = props;

    return (
        <section className="px-8">
            <div className="mx-auto focus:outline-none h-32 w-32 mt-8">
                <img src={profile} alt="man avatar" className="h-full w-full rounded-full overflow-hidden shadow" />
            </div>
                <h1 className="font-bold text-4xl text-center py-4 text-[#e0f2fe]">¡Hola, me llamo {name}!</h1>
                <h2 className="font-bold text-2xl text-center text-[#e0f2fe] my-4">Soy Frontend Developer 👨‍💻</h2>
                <p className="text-center text-[#e0f2fe] text-lg">Me encanta hacer diseños atractivos y aplicar buenas prácticas para mejorar la experiencia de usuario.</p>
                <img src={reactLogo} alt="react logo" className="w-32 h-32 mx-auto mt-8" />
        </section>
    )
}

Greetings.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Greetings
