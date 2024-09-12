
import useButtonClick from "@/hooks/ButtonClick/useButtonClick.jsx";
import changeButtonState from "@/utils/changeButtonState.jsx";
import handleButtonText from "@/utils/handleButtonText";

const Button = () => 
{
    const {ButtonClick, setButtonClick, ButtonRef} = useButtonClick();
    const {IsClick, Times} = ButtonClick;
    
    return (
        <footer className="text-center my-4">
             <button ref={ButtonRef} 
                onClick={() => changeButtonState(setButtonClick)} 
                onMouseOver={(e) => handleButtonText(e, ButtonRef.current)}
                onMouseOut={(e) => handleButtonText(e, ButtonRef.current)}
                className="mt-8 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-500 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transform transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                Clicame!
            </button>
            {IsClick ? <span className="mt-8 block font-bold text-[#e0f2fe]">Clicaste</span> : <span className="mt-8 block font-bold text-[#e0f2fe]">No clicaste</span>}
            {<span className="text-[#e0f2fe]">Veces clicado: {Times}</span>}
        </footer>
    )
}
export default Button;