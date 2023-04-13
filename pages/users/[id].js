import { useEffect, useState } from 'react'
import Container from '../../components/Container'



const UserProfile = (props) => {
  


    return(
        <Container>
           
            <div style={{backgroundColor: "#C4C5D0"}} className="rounded d-flex flex-column text-center align-items-center w-50 mx-auto">
                <img className='img-fluid img-thumbnail m-3' src={props.data.image} alt='photo-character'/>
                <h1 style={{fontSize: '3em'}}>{props.data.name}</h1>  
            
                <p>{props.data.origin.name} | {props.data.status == 'Alive'? "🟢" : "🔴"} {props.data.status} </p>
            </div>
        </Container>
   
    )
}

UserProfile.getInitialProps = async (ctx) => {
    
    const resp = await fetch(`https://rickandmortyapi.com/api/character/${ctx.query.id}`)
    const data = await resp.json()
    
    return {data: data}

}

export default UserProfile