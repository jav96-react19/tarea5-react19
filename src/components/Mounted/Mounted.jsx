import {useEffect} from "react";
const Mounted = () => 
{
    useEffect(() => {
        console.log("Componente montado");
    }, []);
}
export default Mounted;