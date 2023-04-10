import Navigation from "../components/navigation"
import Head from 'next/head'


const Container = ({children}) => {
    return(
        <div className="bg-dark" style={{minHeight: "100vh"}}>
            <Head>
                <title>Next.js Project</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"/>
                <link rel="icon" href="https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png"/>
            </Head>
            <Navigation/>
            <div className="container p-4 d-flex flex-column align-items-center">
                {children}
            </div>
        </div>
    )
}

export default Container