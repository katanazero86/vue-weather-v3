<template>
  <section class="chart">
    <div class="row-wrap align-items-center justify-contents-between">
      <div class="chart__wind col-12 col-md-6">
        <apexchart
            width="100%"
            height="500"
            type="line"
            :options="windChartOptions"
            :series="renderWindChart"
        ></apexchart>
      </div>
      <div class="chart__temperature col-12 col-md-6">
        <apexchart
            width="100%"
            height="500"
            type="line"
            :options="temperatureChartOptions"
            :series="renderTemperatureChart"
        ></apexchart>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {convertUnixTimeStampIntoDate} from "@/utils/dateUtils";

const ForecastChart = defineComponent({
  name: 'ChartSection',
  props: {
    forecast5Days: {type: Object, default: {}},
  },
  computed: {
    renderWindChart() {
      if (this.forecast5Days && this.forecast5Days?.list) {
        console.log(this.forecast5Days);
        this.windSeries[0].data = this.forecast5Days.list.map(data => {
          return [
            `${data.dt_txt}`,
            `${data.wind.speed}`
          ]
        });
      }
      return this.windSeries;

    },
    renderTemperatureChart() {
      if (this.forecast5Days && this.forecast5Days?.list) {
        this.temperatureSeries[0].data = this.forecast5Days.list.map(data => {
          return [
            `${convertUnixTimeStampIntoDate(data.dt)}`,
            `${(data.main.temp - 273.15).toFixed(1)}`
          ]
        });
      }
      return this.temperatureSeries;
    },
  },
  data(): object {
    return {
      windChartOptions: {
        colors: ['var(--chart-line-color)'],
        markers: {
          colors: ['var(--chart-markers-color)'],
        },
        grid: {
          show: true,
          borderColor: '#90A4AE',
          strokeDashArray: 2
        },
        dataLabels: {
          style: {
            colors: ['#F44336']
          }
        },
        title: {
          text: 'forecasts(Wind)',
          align: 'left',
          style: {
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--chart-title-color)'
          },
        },
        chart: {
          id: 'wind',
          zoom: {
            enabled: false,
          },
        },
        yaxis: {
          min: 0.0,
          labels: {
            style: {
              colors: ['var(--chart-yaxis-color)'],
              fontSize: '12px',
            },
          },
          axisBorder: {
            show: false,
          },
        },
        xaxis: {
          type: 'datetime',
          labels: {
            style: {
              colors: 'var(--chart-xaxis-color)',
              fontSize: '12px',
            },
            format: 'MM-dd'
          },
          axisBorder: {
            show: false,
          },
        },
        stroke: {
          curve: 'smooth' // straight | smooth | stepline
        },
        tooltip: {
          x: {
            format: 'yyyy-MM-dd HH:mm:ss'
          },
          y: {
            formatter: function (val, {series, seriesIndex, dataPointIndex, w}) {
              if (val != undefined) {
                return `${val} m/s`;
              }
            },
            title: {
              formatter: (seriesName) => '풍속:'
            }
          }
        },
      },
      windSeries: [
        {
          name: 'Wind',
          data: [],
        },
      ],

      temperatureChartOptions: {
        colors: ['var(--chart-line-color)'],
        markers: {
          colors: ['var(--chart-markers-color)'],
        },
        grid: {
          show: true,
          borderColor: '#90A4AE',
          strokeDashArray: 2
        },
        title: {
          text: 'forecasts(Temperature)',
          align: 'left',
          style: {
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--chart-title-color)'
          },
        },
        chart: {
          id: 'temperature',
          zoom: {
            enabled: false,
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: ['var(--chart-yaxis-color)'],
              fontSize: '12px',
            },
          },
          axisBorder: {
            show: false,
          },
        },
        xaxis: {
          type: 'datetime',
          labels: {
            style: {
              colors: 'var(--chart-xaxis-color)',
              fontSize: '12px',
            },
            format: 'MM-dd'
          },
          axisBorder: {
            show: false,
          },
        },
        stroke: {
          curve: 'smooth' // straight | smooth | stepline
        },
        tooltip: {
          x: {
            format: 'yyyy-MM-dd HH:mm:ss'
          },
          y: {
            formatter: function (val, {series, seriesIndex, dataPointIndex, w}) {
              if (val != undefined) {
                return `${val} 도`;
              }
            },
            title: {
              formatter: (seriesName) => '온도:'
            }
          }
        },
      },
      temperatureSeries: [
        {
          name: 'Temperature',
          data: [],
        },
      ],
    };
  },

});

export default ForecastChart
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 18px;
}
</style>
