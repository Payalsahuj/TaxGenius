import image from '../Images/homefront_cleanup.png'
import arrow from '../Images/icons8-sort-right-30.png'
import bot from '../Images/Bot.png'
function Home(){
    return <div style={{position:'absolute',width:'100%'}}>
        <img src={image} style={{display:'block',position:'absolute',width:'100%'}} alt="" />
        <div style={{position:'relative',zIndex:'3',textAlign:'left',top:'130px',left:'10%',fontSize:'30px',width:'90%'}}>
            <b>
            <h1>THE FASTEST, EASIEST WAY</h1>
            <h1>TO DO YOUR TAX RETURN</h1>
            <br/>
            <br/>
            <button style={{position:'relative',display:'flex',fontSize:'18px',backgroundColor:'white',padding:'10px 20px 10px 100px',borderRadius:'5px'}}> 
            <img src={bot} style={{position:'absolute',width:'100px',top:'-150.5%',left:'1%'}} alt="" /> Watch the Video <img style={{paddingTop:'6px',width:'20px'}} src={arrow} alt="" /> 
            </button>
            </b>
        </div>
    </div>
}

export default Home