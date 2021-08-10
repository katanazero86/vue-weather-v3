<template>
  <section class="chart">
    <div class="row-wrap align-items-center justify-contents-between">
      <div class="chart__wind col-12 col-sm-6">
        <apexchart
            width="100%"
            height="500"
            type="line"
            :options="windChartOptions"
            :series="renderWindChart"
        ></apexchart>
      </div>
      <div class="chart__temperature col-12 col-sm-6">
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

    const ForecastChart = defineComponent({
        name: 'ChartSection',
        props: {
            forecast5Day: {type: Object, default: {}},
        },
        computed: {
            renderWindChart() {
                const windDataArray = [];
                if (this.forecast5Day && this.forecast5Day?.list) {
                    this.forecast5Day.list.forEach(data => {
                        windDataArray.push([
                            `${data.dt_txt}`,
                            `${data.wind.speed}`
                        ]);
                    });
                }
                this.windSeries[0].data = [...windDataArray];
                return this.windSeries;

            },
            renderTemperatureChart() {
                const temperatureDataArray = [];
                if (this.forecast5Day && this.forecast5Day?.list) {
                    this.forecast5Day.list.forEach(data => {
                        temperatureDataArray.push([
                            `${data.dt_txt}`,
                            `${Math.round((data.main.temp - 273.15).toFixed(1))}`
                        ]);
                    });
                }
                this.temperatureSeries[0].data = [...temperatureDataArray];
                return this.temperatureSeries;
            },
        },
        data(): object {
            return {
                windChartOptions: {
                    colors:['#fa3e6d'], // 1: chart line
                    markers: {
                        colors: ['#9C27B0'],
                    },
                    grid: {
                        row: {
                            colors: ['#9c9db0']
                        },
                        column: {
                            colors: ['#9c9db0']
                        },
                        strokeDashArray: 2
                    },
                    dataLabels: {
                        style: {
                            colors: ['#F44336', '#E91E63', '#9C27B0']
                        }
                    },
                    title: {
                        text: 'forecasts(Wind)',
                        align: 'left',
                        style: {
                            fontSize:  '14px',
                            fontWeight:  600,
                            color:  '#9c9db0'
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
                        title: {
                            text: 'Wind',
                            style: {
                                color: '#fff', // forecolor
                                fontSize: '12px',
                                fontWeight: 600,
                            },
                        },
                        labels: {
                            style: {
                                colors: '#fafafa',
                                fontSize: '12px',
                                fontWeight: 500,
                            },
                        }
                    },
                    xaxis: {
                        type: 'datetime',
                        labels: {
                            style: {
                                colors: '#fafafa',
                                fontSize: '12px',
                                fontWeight: 500,
                            },
                        }
                    },
                    stroke: {
                        curve: 'smooth' // straight | smooth | stepline
                    },
                    tooltip: {
                        x: {
                            format: 'yyyy-MM-dd HH:mm'
                        },
                        y: {
                            formatter: function(val, {series, seriesIndex, dataPointIndex, w}) {
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
                    colors:['#fa3e6d'], // 1: chart line
                    markers: {
                        colors: ['#9C27B0'],
                    },
                    grid: {
                        row: {
                            colors: ['#9c9db0']
                        },
                        column: {
                            colors: ['#9c9db0']
                        },
                        strokeDashArray: 2
                    },
                    title: {
                        text: 'forecasts(Temperature)',
                        align: 'left',
                        style: {
                            fontSize:  '14px',
                            fontWeight:  600,
                            color:  '#9c9db0'
                        },
                    },
                    chart: {
                        id: 'temperature',
                        zoom: {
                            enabled: false,
                        },
                    },
                    yaxis: {
                        title: {
                            text: 'Temperature',
                            style: {
                                color: '#fff', // forecolor
                                fontSize: '12px',
                                fontWeight: 600,
                            },
                        },
                        labels: {
                            style: {
                                colors: '#fafafa',
                                fontSize: '12px',
                                fontWeight: 500,
                            },
                        }
                    },
                    xaxis: {
                        type: 'datetime',
                        labels: {
                            style: {
                                colors: '#fafafa',
                                fontSize: '12px',
                                fontWeight: 500,
                            },
                        }
                    },
                    stroke: {
                        curve: 'smooth' // straight | smooth | stepline
                    },
                    tooltip: {
                        x: {
                            format: 'yyyy-MM-dd HH:mm'
                        },
                        y: {
                            formatter: function(val, {series, seriesIndex, dataPointIndex, w}) {
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

        mounted() {
            console.log(this.forecast5Day);
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
