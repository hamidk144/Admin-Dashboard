import React from 'react';
import './Summary.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Summary = () => {
  return (
    <div className='summary-container'>

      <div className="top">
        <h3 className='title'>TOTAL REVENUE</h3>
        <MoreVertIcon className='icon' />
      </div>


      <div className="middle">

        <div className='summary-chart'>
          <CircularProgressbar value={66} text={`${66}%`} strokeWidth={3} 
          styles={buildStyles({
            
            pathColor: `#FF5151`,
            textColor: 'gray',
            /* trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7', */
          })}/>
        </div>

        <p>Total sale made today</p>
        <h2>420 $</h2>
        
        
<div className='bottom'>
    <p style={{ fontSize: "15px", alignSelf: "center" }}>Previous transactions:</p>
        <div className="ptransactions">
          

          <div className="target">
            <p>Target</p>
            <div className="value negative">$12.4K</div>
          </div>

          <div className="target">
            <p>Last Week</p>
            <div className="value positive">$12.4K</div>
          </div>

          <div className="target">
            <p>Last Month</p>
            <div className="value positive">$ 12.4K</div>
          </div>

          

        </div>
</div>
        
      </div>

    </div>
  )
}

export default Summary