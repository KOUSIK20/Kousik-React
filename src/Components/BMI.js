import React,{useState} from 'react'
import './BMI.css'
export const BMI = () => {
    const [age,setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');
    const [msg, setMsg]= useState('');
    const reload =()=>{
        window.location.reload()

    }
    const handleCalulations =(e)=>{
           let bmiFormula ;
         e.preventDefault();
               if(weight==="0" || height==="0"){
                alert('Please enter a valid number')
               }
               else{
                 bmiFormula =((weight/(height*height)) *10000 );
                 bmiFormula = bmiFormula.toFixed(2) 
                setBmi(bmiFormula)
               }
               if(bmiFormula < 18){
                 setMsg("You're UnderWeight")
               }
               else if(bmiFormula >=18 && bmiFormula <=25){
                setMsg("You're Healthy")
               }
               else {
                setMsg("You're OverWeight...Do excersise daily!!")
               }
               
    }
    
  return (
    <div className='parent-container'>
        <div className='app'>
        <div className='bmicontainer'>
        <h1 className='title'>BMI Calculator</h1>
        <form onSubmit={(e)=>handleCalulations(e)}>
            <div className='age'>
            <label className='labels'>Age:</label><br/>
            <input className='bmi-input' type='number'placeholder='Age...' value={age} onChange={(e)=>setAge(e.target.value)} />
            </div>
            <div className='weight' >
            <label className='labels'>Weight in Kg:</label><br/>
            <input  className='bmi-input ' type='number'placeholder='Weight...'value={weight} onChange={(e)=>setWeight(e.target.value)} />
            </div>
            <div className='height'>
            <label className='labels'>Height in cm:</label><br/>
            <input className='bmi-input' type='number'placeholder='Height...'value={height} onChange={(e)=>setHeight(e.target.value)} />
            </div>
            <div className='btn-move'>
                <button className='btn' >Calculate</button>
                <button className='btn-reload' onClick={reload}>Reload</button>
            </div>
            <div className='result'>
                <h3>Age: {age}</h3>
                <h3>Your BMI is : {bmi}</h3>
                <p className='p-msg'>{msg}</p>
            </div>
            
        </form>
    </div>
    </div>
    </div>
    
    
  )
}
