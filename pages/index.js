
import Container from "../components/Container"
import CardUsers from "../components/Users"

const Index = (datos) => {
    console.log(datos)
    return (
        <>
            <Container>
                <h1>Characters</h1>
                <CardUsers user={datos}/>   
            </Container>
        </>
    )
}

Index.getInitialProps = async (ctx) => {
    const resp = await fetch('https://rickandmortyapi.com/api/character')
    const data = await resp.json()
    
    return {data}
}

export default Index