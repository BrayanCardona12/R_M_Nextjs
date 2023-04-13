<<<<<<< HEAD

import Container from "../components/Container"
import CardUsers from "../components/Users"

const Index = (datos) => {

    return (
        <>
            <Container>
                <h1 className="text-center">Characters</h1>
                <div className="mw-100 min-vh-100 d-flex flex-wrap justify-content-center">
                    <CardUsers user={datos} />
                </div>
            </Container>
        </>
    )
}

Index.getInitialProps = async (ctx) => {
    const resp = await fetch('https://rickandmortyapi.com/api/character')
    const data = await resp.json()

    return { data }
}

=======

import Container from "../components/Container"
import CardUsers from "../components/Users"

const Index = (datos) => {

    return (
        <>
            <Container>
                <h1 className="text-center">Characters</h1>
                <div className="mw-100 min-vh-100 d-flex flex-wrap justify-content-center">
                    <CardUsers user={datos} />
                </div>
            </Container>
        </>
    )
}

Index.getInitialProps = async (ctx) => {
    const resp = await fetch('https://rickandmortyapi.com/api/character')
    const data = await resp.json()

    return { data }
}

>>>>>>> 0a1fa938f31853915a1fd118dccba0be2d8a4611
export default Index