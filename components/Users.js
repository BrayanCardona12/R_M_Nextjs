import Link from "next/link"


const CardUsers = ({ user }) => {

    return (
        <>
            {
                user.data.results.map(u => (
                    <div key={u.id} style={{maxWidth: "400px"}} className="d-flex justify-content-around align-items-center m-3 bg-light rounded p-2">
                        <div className="w-50 p-2">
                            <h5>{u.name}</h5>
                            <p>Location: {u.location.name}</p>
                        </div>
                        <Link href={`users/${u.id}`} className="w-50" style={{ backgroundColor: "#C4C5D0", color: "black" }}>
                            <img className="img-fluid rounded" src={u.image} alt="img-character" />
                        </Link>
                    </div>


                )
                )

            }

        </>
    )


}

export default CardUsers