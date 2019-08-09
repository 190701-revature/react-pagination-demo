import React from 'react';
import ListComponent from './list.component';
import PaginationComponent from './pagination.component';
import Axios from 'axios';
import PongGameRecord from '../models/PongGameRecord';

interface IMainComponentState {
    records: PongGameRecord[];
    pagination: {
        totalPages: number | undefined,
        number: number,
        first: boolean | undefined,
        last: boolean | undefined,
        size: number,
    }
}

export default class MainComponent extends React.Component<any, IMainComponentState> {

    constructor(props: any) {
        super(props);

        this.state = {
            records: [],
            pagination: {
                totalPages: undefined,
                number: 100,
                first: undefined,
                last: undefined,
                size: 10
            }
        }
    }

    componentDidMount() {
        this.initializeData();
    }

    initializeData() {
        this.loadData(this.state.pagination.number, this.state.pagination.size);
    }

    loadData(pageNumber: number, pageSize: number) {
        Axios.get(`http://localhost:8080/pong-game-record\
?size=${pageSize}\
&page=${pageNumber}`)
            .then(payload => {
                const records = payload.data.content;
                const pagination = {
                    totalPages: payload.data.totalPages,
                    number: payload.data.number,
                    first: payload.data.first,
                    last: payload.data.last,
                    size: payload.data.size
                }
                this.setState({
                    ...this.state,
                    records,
                    pagination
                });
            });
    }

    render() {
        return (
            <div>
                <ListComponent records={this.state.records} />
                <PaginationComponent
                    pagination={this.state.pagination}
                    loadData={(x, y) => this.loadData(x, y)} />
            </div>
        )
    }
}