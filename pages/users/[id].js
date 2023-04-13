import {useRouter} from 'next/router'
import Container from '../../components/Container'


const UserProfile = (props) => {
    console.log(props)


    
    return(
        <Container>
            <div style={{backgroundColor: "#C4C5D0"}} className='rounded d-flex flex-column align-items-center'>
                <img className='img-fluid img-thumbnail m-3' src={props.data.image} alt='photo-character'/>
                <h1>{props.data.name}</h1>  
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