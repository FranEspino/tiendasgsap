import Loader from "../../assets/loader.json";
import Lottie from "react-lottie";
import './LoaderAnimate.css'
export default function LoaderAnimate() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loader,
    rendererSettings: {
      
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return  (
    <div  className="animate_container">
      <Lottie options={defaultOptions} height={180} width={180} />

    </div>
  ) 
}
