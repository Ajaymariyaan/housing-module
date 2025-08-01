

import React, { useState } from 'react';
import './Table.css';
import Search1 from '../Search/Search1';
import Filter from '../Filter/Filter';
import Select from '../Select/Select';
import ProfilePic from '../ProfilePic/ProfilePic';

function Table() {
  const [searchTerm, setSearchTerm] = useState(''); 

  const initialData = [
    {
      id: 1,
      SiteName: "Northern Highland Zoological",
      Species: 542,
      Animals: 1234,
      Enclosures: 210,
      Sections: 24,
      Cluster: "Rainforest Cluster",
      InCharge: "John Mathew R",
      image: "/Icon/rabbit.png"
    },
    {
      id: 2,
      SiteName: "Hillcrest Wildlife Center",
      Species: 542,
      Animals: 1234,
      Enclosures: 210,
      Sections: 24,
      Cluster: "Rainforest Cluster",
      InCharge: "John Mathew R",
      image: "/Icon/dog.png"
    },
    {
      id: 3,
      SiteName: "Sunridge Animal Park",
      Species: 542,
      Animals: 1234,
      Enclosures: 210,
      Sections: 24,
      Cluster: "Rainforest Cluster",
      InCharge: "John Mathew R",
      image: "/Icon/elephant.png"
    },
    {
      id: 4,
      SiteName: "Eastern Tropical Fauna Research Facility",
      Species: 542,
      Animals: 1234,
      Enclosures: 210,
      Sections: 24,
      Cluster: "Rainforest Cluster",
      InCharge: "John Mathew R",
      image: "/Icon/zebra.png"
    },
    {
      id: 5,
      SiteName: "Lakeside Biodiversity Preservation Area",
      Species: 542,
      Animals: 1234,
      Enclosures: 210,
      Sections: 24,
      Cluster: "Rainforest Cluster",
      InCharge: "John Mathew R",
      image: "/Icon/rabbit.png"
    },
    {
      id: 6,
      SiteName: "Green Valley Reserve",
      Species: 542,
      Animals: 1234,
      Enclosures: 210,
      Sections: 24,
      Cluster: "Rainforest Cluster",
      InCharge: "John Mathew R",
      image: "/Icon/dog.png"
    },
    {
      id: 7,
      SiteName: "Maple Grove West",
      Species: 542,
      Animals: 1234,
      Enclosures: 210,
      Sections: 24,
      Cluster: "Rainforest Cluster",
      InCharge: "John Mathew R",
      image: "/Icon/elephant.png"
    },
    {
      id: 8,
      SiteName: "Riverview Safari Zone",
      Species: 542,
      Animals: 1234,
      Enclosures: 210,
      Sections: 24,
      Cluster: "Rainforest Cluster",
      InCharge: "John Mathew R",
      image: "/Icon/zebra.png"
    }
  ];

  
  const filteredData = initialData.filter((item) => {
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

  return (
    <div className="MainTableDegin">
      <div className="aboveTable">
        <div className="paraDownload">
          <h3 style={{ color: '#44544A', fontWeight: '600' }}>All Sites (44)</h3>
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
              <th>Site Name</th>
              <th>Species</th>
              <th>Animals</th>
              <th>Enclosures</th>
              <th>Sections</th>
              <th>Cluster</th>
              <th>In-Charge</th>
              <th rowSpan={1} style={{ alignItems: 'center' }}>Action</th>
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
  );
}

export default Table;

