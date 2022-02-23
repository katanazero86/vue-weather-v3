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
            forecast5Day: {type: Object, default: {}},
        },
        computed: {
            renderWindChart() {
                if (this.forecast5Day && this.forecast5Day?.list) {
                    this.windSeries[0].data = this.forecast5Day.list.map(data => {
                        return [
                            `${convertUnixTimeStampIntoDate(data.dt)}`,
                            `${data.wind.speed}`
                        ]
                    });
                }
                return this.windSeries;

            },
            renderTemperatureChart() {
                if (this.forecast5Day && this.forecast5Day?.list) {
                    this.temperatureSeries[0].data = this.forecast5Day.list.map(data => {
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
                    colors: ['#EC6E4C'], // 1: chart line
                    markers: {
                        colors: ['#d14c28'],
                    },
                    grid: {
                        row: {
                            colors: ['#f2e8e1']
                        },
                        column: {
                            colors: ['#f2e8e1']
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
                            fontSize: '14px',
                            fontWeight: 600,
                            color: '#474747'
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
                                color: '#474747', // forecolor
                                fontSize: '12px',
                                fontWeight: 600,
                            },
                        },
                        labels: {
                            style: {
                                colors: '#474747',
                                fontSize: '12px',
                                fontWeight: 500,
                            },
                        }
                    },
                    xaxis: {
                        type: 'datetime',
                        labels: {
                            style: {
                                colors: '#474747',
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
                    colors: ['#EC6E4C'], // 1: chart line
                    markers: {
                        colors: ['#d14c28'],
                    },
                    grid: {
                        row: {
                            colors: ['#f2e8e1']
                        },
                        column: {
                            colors: ['#f2e8e1']
                        },
                        strokeDashArray: 2
                    },
                    title: {
                        text: 'forecasts(Temperature)',
                        align: 'left',
                        style: {
                            fontSize: '14px',
                            fontWeight: 600,
                            color: '#474747'
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
                                color: '#474747', // forecolor
                                fontSize: '12px',
                                fontWeight: 600,
                            },
                        },
                        labels: {
                            style: {
                                colors: '#474747',
                                fontSize: '12px',
                                fontWeight: 500,
                            },
                        }
                    },
                    xaxis: {
                        type: 'datetime',
                        labels: {
                            style: {
                                colors: '#474747',
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
