import Link from "next/link"


const CardUsers = ({ user }) => {

    return (
        <ul className="list-group">
            {
                user.data.results.map(u => (
                    <Link href={`users/${u.id}`} key={u.id} style={{backgroundColor: "#C4C5D0", color:"black"}} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center m-2">
                        <div>
                            <h5>{u.name}</h5>
                            <p>Location: {u.location.name}</p>
                        </div>
                        <img className="img-fluid rounded" src={u.image} alt="img-character" />
                    </Link>
                    
                )
                )
                
            }
            
        </ul>
    )


}

export default CardUsers