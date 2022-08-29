import React, { PureComponent } from 'react';
import { AreaChart, LineChart, Legend, Label, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '02',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '03',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '04',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '05',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '06',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '07',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '08',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  

const  TinyAreaChart = ({ width, height, color}) => {   

    return (
        <AreaChart width={ width} height={height} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" >
                 <Label value=" AUG-2022" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
       
     
    );
  };

  export default TinyAreaChart;