// import React, { Component } from "react";

// import { useNavigate } from 'react-router-dom'

// export default class Home extends Component{

//     navigateAmb =()=> {
//         let path = '/ambulance';
//         const history = useNavigate();
//         history(path);
//       }
//     navigateTS =()=> {
//         let path = '/Tow';
//         const history = useNavigate();
//         history(path);
//       }

//     navigateRepair =()=> {
//         let path = '/Repair';
//         const history = useNavigate();
//         history(path);
//       }
//     navigateFire =()=> {
//         let path = '/Fire';
//         const history = useNavigate();
//         history(path);
//       }
    

//     render(){

        
//         return(
//             <>

//                 <div className="auth-inner2">
//                     <h4>Ambulance</h4>
//                     <button type="submit" 
//                     className="btn btn-primary"
//                     onClick={this.navigateAmb}
//                     >
//                         Check Availability
//                     </button>

//                 </div>
//                 <div className="auth-inner2">
//                     <h4>Fire Brigade</h4>
//                     <button type="submit" className="btn btn-primary">
//                         Check Availability
//                     </button>
//                 </div>
//                 <div className="auth-inner2">
//                     <h4>Repair Service</h4>
//                     <button type="submit" className="btn btn-primary">
//                         Check Availability
//                     </button>
//                 </div>

//                 <div className="auth-inner2">
//                     <h4>Tow Service</h4>
//                     <button type="submit" className="btn btn-primary" 
//                      onClick={this.navigateTS}
//                     >
//                         Check Availability
//                     </button>
//                 </div>

//             </>
//         )
//     }

// }


import { useNavigate } from 'react-router-dom';
import logo from './Capture.jpeg'

function Home()
{
    const navigate = useNavigate();

    return(
    <div >
    <div className="auth-wrapper2">

        <div className="auth-inner2">
            <h4>Ambulance Service</h4>
            <h1>🚑</h1>
            
            <button type="submit" 
            className="btn btn-primary"
            onClick={() => navigate('/Ambulance')}
            >
            Check Availability
            </button>

        </div>
        <div className="auth-inner2">
         <h4>Fire Brigade</h4>
         <h1>🚒</h1>
          <button type="submit" className="btn btn-primary"
           onClick={() => navigate('/Fire')}
           >
            Check Availability
           </button>
        </div>
    </div>
    <div className="auth-wrapper2">

      <div className="auth-inner2">
        <h4>Repair Service</h4>
        <h1>🛠</h1>
        <button type="submit" className="btn btn-primary"
         onClick={() => navigate('/Repair')}
         >
            Check Availability
        </button>
      </div>

     <div className="auth-inner2">
        <h4>Towing Service</h4>
        <h1>

        <img src={logo} alt="Towing vehical" width="50" height="50">

        </img>
        </h1>
        <button type="submit" className="btn btn-primary" 
         onClick={() => navigate('/Tow')}
         >
            Check Availability
        </button>
     </div>
    </div>
</div>

    )

}
export default Home;