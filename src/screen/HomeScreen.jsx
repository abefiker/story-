import React from 'react'
import data from '../data'
import Megeb from '../components/Megeb'
export default function HomeScreen() {
  return (
    <div>
      <div className="row">
     
        {data.map(megeb => {
              
          return <div className="col-md-4 m-3">
             
             <div>
                <Megeb data={megeb}/>
             </div>
         
          </div>
        })}

      </div>
    </div>
  )
}
