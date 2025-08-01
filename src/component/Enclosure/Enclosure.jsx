import React from "react";
import "./Enclosure.css"

function Enclosure(){

      const [searchTerm, setSearchTerm] = useState(''); 
    const initialEnclosureData = [
        
    {
      id: 1,
      SiteName: "Bannerghatta East 12A",
      Species: 4,
      Animals: 123,
      Enclosures: 43,
      Sections: "Mufasa",
      Cluster: "Bandipura",
      InCharge: "John Mathew R",
      image: "/Icon/rabbit.png"
    },
    {
      id: 2,
      SiteName: "Bannerghatta East 12A",
      Species: 4,
      Animals: 123,
      Enclosures: 43,
      Sections: "Mufasa",
      Cluster: "Bandipura",
      InCharge: "John Mathew R",
      image: "/Icon/dog.png"
    },
    {
      id: 3,
      SiteName: "Bannerghatta East 12A",
      Species: 4,
      Animals: 123,
      Enclosures: 43,
      Sections: "Mufasa",
      Cluster: "Bandipura",
      InCharge: "John Mathew R",
      image: "/Icon/elephant.png"
    },
    {
      id: 4,
      SiteName: "Bannerghatta East 12A",
      Species: 4,
      Animals: 123,
      Enclosures: 43,
      Sections: "Mufasa",
      Cluster: "Bandipura",
      InCharge: "John Mathew R",
      image: "/Icon/zebra.png"
    },
    {
      id: 5,
      SiteName: "Bannerghatta East 12A",
      Species: 4,
      Animals: 123,
      Enclosures: 43,
      Sections: "Mufasa",
      Cluster: "Bandipura",
      InCharge: "John Mathew R",
      image: "/Icon/rabbit.png"
    },
    {
      id: 6,
      SiteName: "Bannerghatta East 12A",
      Species: 4,
      Animals: 123,
      Enclosures: 43,
      Sections: "Mufasa",
      Cluster: "Bandipura",
      InCharge: "John Mathew R",
      image: "/Icon/dog.png"
    },
    {
      id: 7,
      SiteName: "Bannerghatta East 12A",
      Species: 4,
      Animals: 123,
      Enclosures: 43,
      Sections: "Mufasa",
      Cluster: "Bandipura",
      InCharge: "John Mathew R",
      image: "/Icon/elephant.png"
    },
    {
      id: 8,
      SiteName: "Bannerghatta East 12A",
      Species: 4,
      Animals: 123,
      Enclosures: 43,
      Sections: "Mufasa",
      Cluster: "Bandipura",
      InCharge: "John Mathew R",
      image: "/Icon/zebra.png"
    }
  ];

  const filteredData = initialEnclosureData.filter((item) => {
    return (
      item.SiteName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Species.toString().includes(searchTerm) ||
      item.Cluster.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.InCharge.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };



    return(<>
<div className="EnclosureMainDesign">
     <div className="aboveTable">
        <div className="paraDownload">
          <h3 style={{ color: '#44544A', fontWeight: '600' }}>All Enclosures (359)</h3>
          <div className="DownImg">
            <p className="downloadPara">Download </p>
            <img src="/Icon/greenDownload.png" alt="" />
          </div>
        </div>

        <div className="serachFiltImg">
          <div>

            <Search1 searchValue={searchTerm} OnSearch={handleSearchChange} placeholder="Search sections, sites..." />
          </div>
          <div className="selectFilt">
            <div>
              <Select />
            </div>
            <div>
              <Filter />
            </div>
          </div>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>ENCLOSURE Name</th>
              <th>SPECIES</th>
              <th>ANIMALS</th>
              <th>SUB ENCLOSURES</th>
              <th>SECTION</th>
              <th>SITE</th>
              <th>IN-CHARGE</th>
              <th rowSpan={1} style={{ alignItems: 'center' }}>ACTION</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <div className="ProfileAndName">
                    <div>
                      <img className='animalImg' src={item.image} alt="animal" />
                    </div>
                    <div>{item.SiteName}</div>
                  </div>
                </td>
                <td className="forTextColor">{item.Species}</td>
                <td className="forTextColor">{item.Animals}</td>
                <td className="forTextColor">{item.Enclosures}</td>
                <td className="forTextColor">{item.Sections}</td>
                <td>{item.Cluster}</td>
                <td>
                  <div className="ProfileAndName">
                    <div><ProfilePic /></div>
                    <div>{item.InCharge}</div>
                  </div>
                </td>
                <td><img src="/Icon/phone.svg" alt="phoneIcon" /></td>
                <td><img src="/Icon/message.svg" alt="messageIcon" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
    )


}

export default Enclosure;
