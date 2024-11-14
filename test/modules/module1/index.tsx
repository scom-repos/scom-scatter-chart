import { Module, customModule, Container } from '@ijstech/components';
import { ModeType } from '@scom/scom-chart-data-source-setup';
import ScomScatterChart from '@scom/scom-scatter-chart';

@customModule
export default class Module1 extends Module {
    constructor(parent?: Container, options?: any) {
        super(parent, options);
    }

    async init() {
        super.init();
    }

    render() {
        return <i-panel>
            <i-scom-scatter-chart
                margin={{ left: 'auto', right: 'auto' }}
                data={{
                    dataSource: 'Dune',
                    mode: ModeType.LIVE,
                    queryId: '3865244',
                    title: 'MEV Blocks Trend by Builders',
                    options: {
                        xColumn: {
                            key: 'block_date',
                            type: 'time'
                        },
                        yColumns: [
                            'mev_block_count',
                        ],
                        seriesOptions: [
                            {
                                key: 'mev_block_count',
                                title: 'Blocks',
                                color: '#000'
                            }
                        ],
                        xAxis: {
                            title: 'Date',
                            tickFormat: 'MMM DD'
                        },
                        yAxis: {
                            labelFormat: '0,000.00',
                            position: 'left'
                        }
                    }
                }}
            />
        </i-panel>
    }
}