import img1 from "../src/images/autumn-leaf-falling-revealing-intricate-leaf-vein-generated-by-ai.jpg"
import img2 from "../src/images/summer-daisy-beauty-petal-close-up-purple-outdoors-generative-ai.jpg"
import img3 from "../src/images/view-old-tree-lake-with-snow-covered-mountains-cloudy-day.jpg"
import img4 from "../src/images/lance-asper-N9Pf2J656aQ-unsplash.jpg"
import img5 from "../src/images/devon-janse-van-rensburg-yoqHLUayUTg-unsplash.jpg"
import Slider from "../src/crousel/Slider"
import './App.css';

const images = [img1,img2,img3,img4,img5]


function App() {
  return (
    <div style={{maxWidth:"1200px", width:"100%", aspectRatio:"10/6" , margin: "0 auto"}}>
      <Slider imgProp={images}/>
    </div>
  );
}

export default App;
