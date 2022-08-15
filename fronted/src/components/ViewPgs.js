import React from 'react';
import './ViewPgs.css';
import {useNavigate,useLocation} from 'react-router-dom';
import axios from 'axios';
function viewPgs() {
  const navigate=useNavigate();
  const {state}=useLocation();
  const {jwt}=state;
  console.log('token in viewpg:',jwt);
  const [pgs, setPgs] = React.useState([]);
  const authorised=async()=>{
    try {
      axios.post('http://localhost:5000/viewPGS',{jwt})
      .then(res => {
        console.log(res.data);
        setPgs(res.data);
      })
      .catch(err => {
        console.log(err);
        if(err.response.status ===999){
          alert(" unauthorised user please login first ");
          navigate('/signin');
        }
      });
    }catch(err){
      console.log(err);
      navigate('/signin');
    }
    
  }
  React.useEffect(() => {
    authorised();
  }, []);

  return (
    <>
    <div className="text-white">pgs:</div>
      {pgs.map(pg => {
        return (
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="card card-margin">
                  <div className="card-header no-border">
                    <h5 className="card-title">PG:</h5>
                  </div>
                  <div className="card-body pt-0">
                    <div className="widget-49">
                      <div className="widget-49-title-wrapper">
                        <div className="widget-49-meeting-info">
                          <span className="widget-49-pro-title">{pg.address}</span>
                          <span className="widget-49-meeting-time">{pg.pincoe}</span>
                        </div>
                      </div>
                      <ol className="widget-49-meeting-points">
                        <li className="widget-49-meeting-item"><span>rent:{pg.rent}</span></li>
                        <li className="widget-49-meeting-item"><span>persons:{pg.person}</span></li>
                        <li className="widget-49-meeting-item"><span>accomodation:{pg.accomodation_facilities}</span></li>
                        <li className="widget-49-meeting-item"><span>lodging:{pg.lodging}</span></li>
                        <li className="widget-49-meeting-item"><span>contact:{pg.phone_no}</span></li>
                        <li className="widget-49-meeting-item"><span>email:{pg.email}</span></li>
                      </ol>
                      <div className="widget-49-meeting-action">
                        <a href="/" className="btn btn-sm btn-flash-border-primary">View All</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      )}
    </>
  )
}

export default viewPgs
