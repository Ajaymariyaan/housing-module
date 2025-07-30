
import React from 'react';
import './Table.css';
import Search1 from '../Search/Search1';
import Filter from '../Filter/Filter';
import Select from '../Select/Select';
import ProfilePic from '../ProfilePic/ProfilePic';
// import CustomButton from '../CustomButton/CustomButton.jsx/CustomButton';

// import Search from '../Search/Search';
// import Search from '../Search/Search';



function Table() {


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
      SiteName: "Northern Highland Zoological",
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
      SiteName: "Northern Highland Zoological",
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
      SiteName: "Northern Highland Zoological",
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
      id: 6,
      SiteName: "Northern Highland Zoological",
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
      SiteName: "Northern Highland Zoological",
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
      SiteName: "Northern Highland Zoological",
      Species: 542,
      Animals: 1234,
      Enclosures: 210,
      Sections: 24,
      Cluster: "Rainforest Cluster",
      InCharge: "John Mathew R",
      image: "/Icon/zebra.png"
    }
  ];




    const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredData = initialData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const [searchTerm, setSearchTerm] = useState("");

  // const data = [
  //   {

  //   }
  // ]

  return (
    <div className="MainTableDegin">
      <div className="aboveTable">
        <div className='paraDownload'>
          <h3>All Sites</h3>
          <div className="DownImg"> <p className="downloadPara">Download </p> <img src="/Icon/greenDownload.png" alt="" /></div>
        </div>


        <div className="serachFiltImg">
          <div> <Search1 /></div>
          <div className="selectFilt">
            <div> <Select /></div>
            <div> <Filter /></div>
            {/* <button className="toggleBtn"> <img className="toggleimg" src="/Icon/toggle.png" alt="togglebutton" /></button> */}

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
            {initialData.map((item) => (
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
                <td>{item.Species}</td>
                <td>{item.Animals}</td>
                <td>{item.Enclosures}</td>
                <td>{item.Sections}</td>
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

        {/* <table>
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
              <th rowSpan={1} style={{alignItems:'center'}}>Action </th>
              <th></th>
            </tr>
            
          </thead>
          <tbody>
            <tr>
            <td>1</td>
            <td> <div className="ProfileAndName"><div> <img className='animalImg' src="/Icon/rabbit.png" alt="rabbit" /> </div> <div>Northern Highland Zoological </div> </div></td>
            <td>542</td>
            <td>1234</td>
            <td>210</td>
            <td>24</td>
            <td>Rainforest Cluster</td>
            <td> <div className="ProfileAndName"><div><ProfilePic/> </div> <div>John Mathew R </div> </div></td> 
           
            <td s><img src="/Icon/phone.svg" alt="phoneIcon" />  </td>
            <td><img src="/Icon/message.svg" alt="phoneIcon" /></td>

            </tr> 
            
            <tr>
            <td>2</td>
            <td> <div className="ProfileAndName"><div><img className='animalImg' src="/Icon/dog.png" alt="rabbit" /> </div> <div>Northern Highland Zoological </div> </div></td>
            <td>542</td>
            <td>1234</td>
            <td>210</td>
            <td>24</td>
            <td>Rainforest Cluster</td>
            <td> <div className="ProfileAndName"><div><ProfilePic/> </div> <div>John Mathew R </div> </div></td>
            
            <td ><img src="/Icon/phone.svg" alt="phoneIcon" />  </td>
            <td><img src="/Icon/message.svg" alt="phoneIcon" /></td>

            </tr> 
            
            <tr>
            <td>3</td>
            <td> <div className="ProfileAndName"><div><img className='animalImg'src="/Icon/elephant.png" alt="rabbit" /> </div> <div>Northern Highland Zoological </div> </div></td>
            <td>542</td>
            <td>1234</td>
            <td>210</td>
            <td>24</td>
            <td>Rainforest Cluster</td>
            <td> <div className="ProfileAndName"><div><ProfilePic/> </div> <div>John Mathew R </div> </div></td> 
            
            <td ><img src="/Icon/phone.svg" alt="phoneIcon" />  </td>
            <td><img src="/Icon/message.svg" alt="phoneIcon" /></td>

            </tr> 
            
            <tr>
            <td>4</td>
            <td> <div className="ProfileAndName"><div><img className='animalImg' src="/Icon/zebra.png" alt="rabbit" /> </div> <div>Northern Highland Zoological </div> </div></td>
            <td>542</td>
            <td>1234</td>
            <td>210</td>
            <td>24</td>
            <td>Rainforest Cluster</td>
            <td> <div className="ProfileAndName"><div><ProfilePic/> </div> <div>John Mathew R </div> </div></td>
            
            <td ><img src="/Icon/phone.svg" alt="phoneIcon" />  </td>
            <td><img src="/Icon/message.svg" alt="phoneIcon" /></td>

            </tr> 
            
            
            <tr>
            <td>5</td>
            <td> <div className="ProfileAndName"><div> <img className='animalImg' src="/Icon/rabbit.png" alt="rabbit" /> </div> <div>Northern Highland Zoological </div> </div></td>
            <td>542</td>
            <td>1234</td>
            <td>210</td>
            <td>24</td>
            <td>Rainforest Cluster</td>
            <td> <div className="ProfileAndName"><div><ProfilePic/> </div> <div>John Mathew R </div> </div></td> 
            
            <td ><img src="/Icon/phone.svg" alt="phoneIcon" />  </td>
            <td><img src="/Icon/message.svg" alt="phoneIcon" /></td>

            </tr> 
            
            <tr>
            <td>6</td>
            <td> <div className="ProfileAndName"><div><img className='animalImg' src="/Icon/dog.png" alt="rabbit" /> </div> <div>Northern Highland Zoological </div> </div></td>
            <td>542</td>
            <td>1234</td>
            <td>210</td>
            <td>24</td>
            <td>Rainforest Cluster</td>
            <td> <div className="ProfileAndName"><div><ProfilePic/> </div> <div>John Mathew R </div> </div></td>
            
            <td ><img src="/Icon/phone.svg" alt="phoneIcon" />  </td>
            <td><img src="/Icon/message.svg" alt="phoneIcon" /></td>

            </tr> 
            
            <tr>
            <td>7</td>
            <td> <div className="ProfileAndName"><div><img className='animalImg' src="/Icon/elephant.png" alt="rabbit" /> </div> <div>Northern Highland Zoological </div> </div></td>
            <td>542</td>
            <td>1234</td>
            <td>210</td>
            <td>24</td>
            <td>Rainforest Cluster</td>
            <td> <div className="ProfileAndName"><div><ProfilePic/> </div> <div>John Mathew R </div> </div></td> 
            
            <td ><img src="/Icon/phone.svg" alt="phoneIcon" />  </td>
            <td><img src="/Icon/message.svg" alt="phoneIcon" /></td>

            </tr> 
            
            <tr>
            <td>8</td>
            <td> <div className="ProfileAndName"><div><img className='animalImg' src="/Icon/zebra.png" alt="rabbit" /> </div> <div>Northern Highland Zoological </div> </div></td>
            <td>542</td>
            <td>1234</td>
            <td>210</td>
            <td>24</td>
            <td>Rainforest Cluster</td>
            <td> <div className="ProfileAndName"><div><ProfilePic/> </div> <div>John Mathew R </div> </div></td>
            
            <td><img src="/Icon/phone.svg" alt="phoneIcon" />  </td>
            <td><img src="/Icon/message.svg" alt="phoneIcon" /></td>

            </tr> 
          </tbody>












        </table> */}








      </div>
    </div>





  )
}

export default Table;
