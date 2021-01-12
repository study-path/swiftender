import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const styles = {
  div:{
    display: 'flex',   
    margin: '10px',
    columnGap: '10px'
  },
}

const PieCharts = () => {
  return (
    <div style={styles.div}>
      <PieChart
        viewBoxSize={[100,100]}
        data={[
          { title: 'One', value: 10, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' },
        ]}
        radius={PieChart.defaultProps.radius - 7}
        lineWidth={60}
        segmentsShift={index => index === 0 ? 7 : 0.5}
      />
      <PieChart
        viewBoxSize={[100,100]}
        data={[
          { title: 'One', value: 2, color: '#E69035' },          
          { title: 'Two', value: 3, color: '#7E2A37' },
          { title: 'Three', value: 15, color: '#5A4A35' },
        ]}
        radius={PieChart.defaultProps.radius - 7}
        lineWidth={60}
        segmentsShift={index => index === 0 ? 7 : 0.5}
      />
      <PieChart
        viewBoxSize={[100,100]}
        data={[
          { title: 'One', value: 40, color: '#F79127' },
          { title: 'Two', value: 2, color: '#CC2F37' },
          { title: 'Three', value: 9, color: '#6A2135' },
        ]}
        radius={PieChart.defaultProps.radius - 7}
        lineWidth={60}
        segmentsShift={index => index === 0 ? 7 : 0.5}
      />
      <PieChart
        viewBoxSize={[100,100]}
        data={[
          { title: 'One', value: 10, color: '#C6B427' },
          { title: 'Two', value: 7, color: '#C42337' },
          { title: 'Three', value: 28, color: '#462D35' },
        ]}
        radius={PieChart.defaultProps.radius - 7}
        lineWidth={60}
        segmentsShift={index => index === 0 ? 7 : 0.5}
      />
    </div>
  )
}

export default PieCharts
