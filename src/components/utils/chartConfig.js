// chartConfig.js
export const chartConfig = {
  responsive: true,
  maintainAspectRatio: false,
  colors: { forceOverride: true },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Δ/B',
        color: 'rgba(240, 240, 240,0.5)'
      },
      grid: {
        color: 'rgba(240, 240, 240,0.1)'
      },
      gridLines: {
        color: 'rgba(240, 240, 240,0.1)'
      },
      ticks: {
        color: 'rgba(240, 240, 240,0.5)'
      }
    },
    y: {
      title: {
        display: true,
        text: 'E/B',
        color: 'rgba(240, 240, 240,0.5)'
      },
      grid: {
        color: 'rgba(240, 240, 240,0.1)'
      },
      gridLines: {
        color: 'rgba(240, 240, 240,0.1)'
      },
      ticks: { color: 'rgba(240, 240, 240,0.5)' }
    }
  },
  plugins: {
    zoom: {
      zoom: {
        wheel: { enabled: true },
        pinch: { enabled: true },
        mode: 'xy'
      }
    },
    legend: {
      display: false
    }
  }
  // chartID: 'd2-chart'
}

export const barChartConfig = {
  responsive: true,
  maintainAspectRatio: false,
  colors: { forceOverride: true },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Level',
        color: 'rgba(240, 240, 240,0.5)'
      },
      grid: {
        color: 'rgba(240, 240, 240,0.1)'
      },
      gridLines: {
        color: 'rgba(240, 240, 240,0.1)'
      },
      ticks: {
        color: 'rgba(240, 240, 240,0.5)'
      }
    },
    y: {
      title: {
        display: true,
        text: 'Energy (eV)',
        color: 'rgba(240, 240, 240,0.5)'
      },
      grid: {
        color: 'rgba(240, 240, 240,0.1)'
      },
      gridLines: {
        color: 'rgba(240, 240, 240,0.1)'
      },
      ticks: { color: 'rgba(240, 240, 240,0.5)' }
    }
  }
}
