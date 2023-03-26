import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import generateArtists from "../Faker/GenerateArtists";



function Home() {

    const [searchText, setSearchText] = useState("");
    const [data,setData]=useState([])
    useEffect(()=>{
      const res=generateArtists(20);
      setData(res);
    },[])
    const artists=data || []  
    const handleSearchTextChange = (event) => {
      setSearchText(event.target.value);
    };
  
    const filteredArtists = artists.filter((artist) =>
      artist.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
        <div className="container my-4">
            <h1 className="text-center mb-4">Artists</h1>
            <div className="row mb-4">
        <div className="col-md-6 offset-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Artists"
            value={searchText}
            onChange={handleSearchTextChange}
          />
        </div>
      </div>
            <div className="row">
                {filteredArtists.map((artist) => (
                    <div key={artist.id} className="col-lg-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={artist.imageUrl} style={{ height: "300px", objectFit: "cover" }} />
                            <Card.Body>
                                <Card.Title>{artist.name}</Card.Title>
                                <Card.Text>{artist.bio}</Card.Text>
                                <p>
                                    <strong>Birth Date:</strong> {artist.birthDate}
                                </p>
                                <p>
                                    <strong>Birth Place:</strong> {artist.birthPlace}
                                </p>
                                <p>
                                    <strong>Genres:</strong> {artist.genres.join(", ")}
                                </p>
                                <p>
                                    <strong>Albums:</strong>
                                </p>
                                <ul>
                                    {artist.albums.map((album) => (
                                        <li key={album.id}>
                                            {album.title} ({album.year})
                                        </li>
                                    ))}
                                </ul>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" href={artist.website} target="_blank">
                                    Website
                                </Button>{" "}
                                <Button variant="info" href={artist.twitter} target="_blank">
                                    Twitter
                                </Button>{" "}
                                <Button variant="warning" href={artist.instagram} target="_blank">
                                    Instagram
                                </Button>{" "}
                                <Button variant="secondary" href={artist.facebook} target="_blank">
                                    Facebook
                                </Button>
                            </Card.Footer>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;

