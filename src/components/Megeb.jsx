import React,{useState} from 'react'

export default function megeb({data}) {
  const [varient,setvarient] = useState("normal")
 const [quantity,setquantity] = useState(1)
  return (
    <div style={{margin:"100px",alignItems:"center"}}>
      <h1>{data.name}</h1>
      <img src={data.image} className='img-fluid' />
        <div className='flex-container listen'>
            <div className='w-100'>
              <p>Varient</p>
              <select className='form-control' value={varient} onChange={(e)=> {setvarient(e.target.value)}}>
                 {data.varient.map(varient=>{
                  return <option value={varient}>{varient}</option>
                 })}
              </select>
            </div>
             

            <div className='w-100'>
              <p>Quantity</p>
              <select className='form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                {[...Array(10).keys()].map((x,i)=>{
                  return <option value={i+1}>{i+1}</option>
                })}
              </select>
            </div>
            <div className="flex-container action">
                <div className='m-1 w-100 '>
                   <h1> Price : {data.price[0][varient] * quantity}</h1>
                </div>
                <div className='m-1 '>
                     <button className='btn'>ADD TO CART</button>
                </div>

            </div>

        </div>
    </div>
  )
}
