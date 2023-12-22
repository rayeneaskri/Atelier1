import React, { useState } from 'react'

const Livres = () => {
    const [livre, setLivre] = useState(
        {

            isbn: "42368756",
            titre: "ReactJS",
            auteur: "Romain Rissouan",
            annedition: 2021,
            prix: 33,
            couverture: "https://res.cloudinary.com/dolz4mll1/image/upload/v1703233063/Daly/rptgtpxd-1396254731.jpg_n94tqh.jpg",


        })

    const [livres, setLivres] = useState([
        {
            isbn: "42368756",
            titre: "ReactJS",
            auteur: "Romain Rissouan",
            annedition: 2021,
            prix: 33,
            couverture: "https://m.media-amazon.com/images/I/61vg+0-1yGL.SY466.jpg",
        },
        {
            isbn: "123698745",
            titre: "Les VPNS",
            auteur: "Stephan@gmail.com",
            annedition: 2020,
            prix: 55,
            couverture: "http://res.cloudinary.com/iset-sfax/image/upload/v1696761358/images/9782100491155_internet_w290.jpg.jpg",
        },
        {
            isbn: "54894",
            titre: "Techniques de Référencement Web",
            auteur: "Patrick Wampe",
            annedition: 2020,
            prix: 55,
            couverture: "https://blog.internet-formation.fr/wp-content/uploads/2018/04/1e-4e-couverture-livre-SEO.jpg",
        },
        {
            isbn: "5464sf",
            titre: "VueJS",
            auteur: "Alexandra Martin",
            annedition: 2020,
            prix: 20,
            couverture: "https://m.media-amazon.com/images/I/718QqTspltL.SY466.jpg",
        },
        {
            isbn: "65465445",
            titre: "Laravel",
            auteur: "Eric Sarrion",
            annedition: 2020,
            prix: 50,
            couverture: "https://images.booksense.com/images/132/218/9798554218132.jpg",
        }
    ])
    const addlivre = () => {
        setLivres([...livres, livre])
    }

    const handleDelete = (isbn) => {
        setLivres(livres.filter((liv) => liv.isbn !== isbn))
    }



    return (
        <div>
            <button className='btn btn-success' onClick={() => addlivre()}>Ajouter</button> <br/>
            <input type='text' name='isbn' value={livre.isbn}
                onChange={(e) => setLivre({ ...livre, isbn: e.target.value })} />
            <input type='text' name='titre' value={livre.titre}
                onChange={(e) => setLivre({ ...livre, titre: e.target.value })} />
            <input type='text' name='auteur' value={livre.auteur}
                onChange={(e) => setLivre({ ...livre, auteur: e.target.value })} />
            <input type='text' name='prix' value={livre.prix}
                onChange={(e) => setLivre({ ...livre, prix: e.target.value })} />

            <input type='text' name='couverture' value={livre.couverture}
                onChange={(e) => setLivre({ ...livre, couverture: e.target.value })} />
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Titre</th>
                        <th>Auteur</th>
                        <th>Prix</th>
                        <th>Couverture</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {livres.map((l, index) =>
                        <tr key={index}>
                            <td>{l.isbn}</td>
                            <td>{l.titre}</td>
                            <td>{l.auteur}</td>
                            <td>{l.prix}</td>
                            <td><img src={l.couverture} width={80} height={80} /></td>
                            <td><button className='btn btn-warning'>Update</button></td>
                            <td><button className='btn btn-danger'
                                onClick={() => handleDelete(l.isbn)}>Delete</button></td>
                        </tr>

                    )}
                    <div>
                        <AfficheLivres livres={livres} handleDelete={handleDelete}/>
                    </div>
                </tbody>

            </table>
        </div>
    )
}

export default Livress