import React, { useState } from 'react';
import styles from './StackedGraph.module.css';
import dynamic from 'next/dynamic';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options = ['', 'Option 1', 'Option 2'];

const StackedGraph = () => {
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [series, setSeries] = useState([{
    name: 'Uploaded',
    data: [44, 55, 41, 4, 22, 43, 21, 0, 12, 10]
  }, {
    name: 'Mapped',
    data: [53, 32, 33, 5, 13, 43, 32, 0, 23, 0]
  }, {
    name: 'Approved',
    data: [12, 17, 11, 9, 15, 11, 20, 0, 9, 23]
  }])
  const [option, setOption] = useState({
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: 65,
      },
    },
    stroke: {
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ['NFSSM', 'BMGF', 'CSE', 'CEPT', 'E&Y', 'IIHS', 'NIUA', 'UMC', 'WASH', 'CDD'],
      labels: {
        offsetY: 15,
        formatter: function (val) {
          // return val + "K"
          return val;
        }
      },
      tickAmount: 10,
      // axisTicks: {
      //   show: true,
      //   borderType: 'solid',
      //   color: '#D5D5D5',
      //   height: 30,
      //   offsetX: 0,
      //   offsetY: 0
      // },
    },
    yaxis: {
      title: {
        text: undefined
      },
      labels: {
        style: {
          fontSize: '14px',
        },
      }
    },
    grid: {
      show: true,
      borderColor: '#D5D5D5',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      padding: {
        bottom: 20
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        }
      }
    },
    fill: {
      opacity: 1,
      colors: ['#22B8CF', '#50CF66', '#CB5DE8']
    },
    legend: {
      position: 'right',
      fontWeight: 600,
      //horizontalAlign: 'left',
      offsetX: -10,
      offsetY: 15,
      markers: {
        width: 17,
        height: 17,
        fillColors: ['#22B8CF', '#50CF66', '#CB5DE8'],
        offsetX: -5,
        offsetY: 2
      },
      itemMargin: {
        vertical: 0
      }
    },
    dataLabels: {
      enabled: false
    }
  })

  const handleStart = (newValue) => {
    setStartDate(newValue);
  };

  const handleEnd = (val) => {
    setEndDate(val);
  }

  return (
    <>
      <section className={styles.container}>
        <h4 className={styles.label}>Stacked Graph</h4>
        <div className={styles.filter}>
          <div>
            <p className={styles.title}>Organization Name</p>
            <Autocomplete
              className={styles.select}
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id="controllable-states-demo"
              options={options}
              getOptionDisabled={(option) =>
                option === ''
              }
              renderInput={(params) => <TextField {...params} placeholder="--Select--" />}
            />
          </div>

          <div>
            <p className={styles.title}>Start Date</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                className={styles.date}
                inputFormat="MM/DD/YYYY"
                value={startDate}
                onChange={handleStart}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>

          <div>
            <p className={styles.title}>End Date</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                className={styles.date}
                inputFormat="MM/DD/YYYY"
                value={endDate}
                onChange={handleEnd}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>

          <button className={styles.btn}>Search</button>
        </div>

        <div className={styles.chart}>
          <div id="chart">
            <ReactApexChart options={option} height={900} series={series} type="bar" />
          </div>
        </div>
      </section>
    </>
  )
}

export default StackedGraph