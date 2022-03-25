import Nav from "../Components/Nav";
import Card from "../Components/Card";

const isiCard = [
  {
    Image: "../Components/images/gambar1.jpg",
    caption: "Ini Adalah Gambar 1",
  },
  {
    Image: "../Components/images/gambar2.jpg",
    caption: "Ini Adalah Gambar 2",
  },
  {
    Image: "../Components/images/gambar2.jpg",
    caption: "Ini Adalah Gambar 3",
  },
  {
    Image: "../Components/images/gambar8.jpg",
    caption: "Ini Adalah Gambar 4",
  },
  {
    Image: "../Components/images/gambar5.jpg",
    caption: "Ini Adalah Gambar 5",
  },
  {
    Image: " ../Components/images/gambar6.jpg",
    caption: "Ini Adalah Gambar 6",
  },
  {
    Image: "../Components/images/gambar7.jpg",
    caption: "Ini Adalah Gambar 7",
  },
  {
    Image: "../Components/images/gambar8.jpg",
    caption: "Ini Adalah Gambar 8",
  },
];

function App() {
  return (
    <container>
      <Nav />
      <div className="row">
        {isiCard.map((agt, indeks) => (
          <div className="col-lg-3 col-md-4 col-sm-6">
            <Card image={agt.Image} caption={agt.caption} />
          </div>
        ))}
      </div>
    </container>
  );
}

export default App;
