import Navigation from "../components/navigation"
import Head from 'next/head'


const Container = ({children}) => {
    return(
        <>
        <Head>
                <title>Next.js Project</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"/>   
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"></link>
                <link rel="icon" href="https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
            </Head>
            <Navigation/>
            <div className="mw-100 min-vh-100 bg-dark p-4">
                {children}
            </div>
        </>
    )
}

export default Container