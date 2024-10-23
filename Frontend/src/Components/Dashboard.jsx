import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  // Ölçekleri kaydet
  ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend
  );

const Dashboard = () => {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch('/api/metric/metrics');
        if (!response.ok) throw new Error('Veri çekilemedi');
        const data = await response.json();
        setMetrics(data);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };

    fetchMetrics();
  }, []);

  if (!metrics) return <p>Yükleniyor...</p>;

  const networkData = metrics.find((m) => m.name === 'network.bytesIn');
  const connectionData = metrics.find((m) => m.name === 'connections.current');

  const chartData = {
    labels: networkData.dataPoints.map((point) => new Date(point.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Network Bytes In',
        data: networkData.dataPoints.map((point) => point.value),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Current Connections',
        data: connectionData.dataPoints.map((point) => point.value),
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
        
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: 'rgba(0, 128, 0, 1)', // X eksenindeki etiketlerin rengi (yeşil)
        },
      },
      y: {
        ticks: {
          color: 'rgba(128, 0, 128, 1)', // Y eksenindeki etiketlerin rengi (mor)
        },
      },
    },
  };

  return (
    <div>
      <h2>Network ve Bağlantı Grafiği</h2>
      <Line data={chartData} options={options}/>
    </div>
  );
};

export default Dashboard;
