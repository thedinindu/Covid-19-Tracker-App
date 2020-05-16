import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Columns from 'react-columns'
import Form from 'react-bootstrap/Form'
import Moment from 'react-moment'
import { Container } from 'react-bootstrap'
import Chart from "./Chart";

// getting data from the API usnig axios with useEffect
function App() {
  const [latest, setLatest] = useState([])
  const [results, setResult] = useState([])
  const [srilanka, setSriLanka] = useState([])
  const [searchCountry, setSearchCountry] = useState("")
  const [chart, setChart] = useState({});

  useEffect(() => {
    getData();
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries"),
        axios.get("http://hpb.health.gov.lk/api/get-current-statistical")
      ])
      .then(responseArr => {
        setLatest(responseArr[0].data) // onSuccess
        setResult(responseArr[1].data)
        setSriLanka(responseArr[2].data.data)
      })
      .catch(err => {
        console.log(err) // onError
      })
    }, []);

    const getData = async () => {
      try {
        const res = await axios.get(
          `https://corona.lmao.ninja/v2/historical/sri lanka`
        );
  
        setChart({
          labels: Object.keys(res.data.timeline.cases),
          datasets: [
            {
              label: "Covid-19 Cases",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(0, 0, 0, 1)",
              borderColor: "rgba(50,50,50,1)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(170,0,0,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 5,
              pointHoverRadius: 8,
              pointHoverBackgroundColor: "rgba(170,0,0,1)",
              pointHoverBorderColor: "rgba(255,255,255,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: Object.values(res.data.timeline.cases)
            }
          ]
        });
      } catch (error) {
        console.log(error.response);
      }
    };

    const date = new Date(parseInt(latest.updated))
    const lastUpdatedGlobal = date.toString()

    const filterCountry = results.filter(item => {
      return searchCountry !== "" ? item.country.includes(searchCountry) : item
    })

    const countries = filterCountry.map((data, i) => {
      return (

        <Card key={i} border="primary" style={{ borderRadius: '0', margin: '10px' }}>
          <Card.Img variant='top' src={data.countryInfo.flag} style={{ height: '130px'}}/>
          <Card.Body>
            <Card.Title>{data.country}</Card.Title>
            <Card.Text>Cases - {data.cases}</Card.Text>
            <Card.Text>Deaths - {data.deaths}</Card.Text>
            <Card.Text>Recovered - {data.recovered}</Card.Text>
            <Card.Text>Today's Cases - {data.todayCases}</Card.Text>
            <Card.Text>Today's Deaths - {data.todayDeaths}</Card.Text>
            <Card.Text>Active - {data.active}</Card.Text>
            <Card.Text>Critical - {data.critical}</Card.Text>
          </Card.Body>
        </Card>
      )
    })

    var queries = [{
      columns: 3,
      query: 'min-width: 500px'
    }, {
      columns: 4,
      query: 'min-width: 1000px'
    }]

  return (
    <div className="text-center" style={{ margin: "10px", backgroundColor: "#F0F8FF"}}>
      <br />
      <h1 style={{ textAlign: "center" }}>Covid-19 Live Status</h1>
      <br />
      <br />

      <h3>Local Status</h3>
      <h6 style={{ textAlign: "center" }}>Last Updated - <Moment>{srilanka.update_date_time}</Moment></h6>
      <br />
      
      <Container style={{color: 'white'}}>
        <CardDeck>
          <Card bg="dark" style={{ width: '18rem', borderRadius: '0' }}>
            <Card.Body>
              <Card.Title>Total Cases</Card.Title>
              <Card.Text>
                {srilanka.local_total_cases}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="secondary" style={{ width: '18rem', borderRadius: '0' }}>
            <Card.Body>
              <Card.Title>Today's Cases</Card.Title>
              <Card.Text>
                {srilanka.local_new_cases}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="primary" style={{ width: '18rem', borderRadius: '0' }}>
            <Card.Body>
              <Card.Title>Active Cases</Card.Title>
              <Card.Text>
                {srilanka.local_active_cases}
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <br />
        <CardDeck>
          <Card bg="danger" style={{ width: '18rem', borderRadius: '0' }}>
            <Card.Body>
              <Card.Title>Total Deaths</Card.Title>
              <Card.Text>
              {srilanka.local_deaths}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="warning" style={{ width: '18rem', borderRadius: '0' }}>
            <Card.Body>
              <Card.Title>Today's Deaths</Card.Title>
              <Card.Text>
              {srilanka.local_new_deaths}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="success" style={{ width: '18rem', borderRadius: '0' }}>
            <Card.Body>
              <Card.Title>Recovered</Card.Title>
              <Card.Text>
              {srilanka.local_recovered}
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>

      <br />
      <br />

      <h3>Global Status</h3>
      <h6 style={{ textAlign: "center" }}>Last Updated - <Moment>{lastUpdatedGlobal}</Moment></h6>
      <br />
      <Container style={{color: 'white'}}>
        <CardDeck>
          <Card bg="dark" style={{ width: '18rem', borderRadius: '0' }}>
            <Card.Body>
              <Card.Title>Total Cases</Card.Title>
              <Card.Text>
                {latest.cases}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="secondary" style={{ width: '18rem', borderRadius: '0' }}>
            <Card.Body>
              <Card.Title>Today's Cases</Card.Title>
              <Card.Text>
                {latest.todayCases}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="primary" style={{ width: '18rem', borderRadius: '0' }}>
            <Card.Body>
              <Card.Title>Active Cases</Card.Title>
              <Card.Text>
                {latest.active}
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <br />
        <CardDeck>
          <Card bg="danger" style={{ width: '18rem', borderRadius: '0' }}>
            <Card.Body>
              <Card.Title>Total Deaths</Card.Title>
              <Card.Text>
                {latest.deaths}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="warning" style={{ width: '18rem', borderRadius: '0' }}>
            <Card.Body>
              <Card.Title>Today's Deaths</Card.Title>
              <Card.Text>
                {latest.todayDeaths}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="success" style={{ width: '18rem', borderRadius: '0' }}>
            <Card.Body>
              <Card.Title>Recovered</Card.Title>
              <Card.Text>
                {latest.recovered}
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
      <br />
      <br />

      <Container>
        <h3>Daily Statistics of Local Cases</h3>
        <Chart data={chart} />
      </Container>
      
      <br />
      <br />

      <Container>
        <Form style={{margin: '10px'}}>
          <Form.Group controlId="formGroupSearch">
            <Form.Control 
              type="text" 
              placeholder="Search by country" 
              onChange={e => setSearchCountry(e.target.value)} />
          </Form.Group>
        </Form>

        <Columns queries={queries}>
          {countries}
        </Columns>
      </Container>
    </div>
    
  );
}

export default App;
