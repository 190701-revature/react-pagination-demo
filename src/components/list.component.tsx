import React from 'react';
import PongGameRecord from '../models/PongGameRecord';
import RecordComponent from './record.component';

interface IListComponentProps {
    records: PongGameRecord[]
}

export default class ListComponent extends React.Component<IListComponentProps, any> {
    render() {
        const items = this.props.records.map(record => (<RecordComponent key={record.id} record={record} />))
        return (
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Winner</th>
                        <th>Winner Score</th>
                        <th>Loser Score</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        )
    }
}