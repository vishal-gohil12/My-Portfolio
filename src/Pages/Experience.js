
import { School } from '@material-ui/icons';
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";



export default function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor='#3e497a' >
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2021 - 2025'
          iconStyle = {{background:'black',color:'black'}}
          icon = { <School style={{width:'70px',marginLeft:'-34px'}}/>}
        >
        <h3 className='vertical-timeline-element-title'>Charotar University of Science and Technology (CHARUSAT)</h3>
        <p>B.Tech in Information Technology, CGPA : 7.75</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2019 - 2021'
          iconStyle = {{background:'black',color:'black'}}
          icon = { <School style={{width:'70px',marginLeft:'-34px'}}/>}
        >
        <h3 className='vertical-timeline-element-title'>Axay HighSchool, Ahmedabad</h3>
        <p>PCM with computer science 
        </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      
    </div>
  )
}