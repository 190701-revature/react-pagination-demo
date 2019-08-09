import React from 'react';
import PongGameRecord from '../models/PongGameRecord';

interface IRecordComponentProps {
    record: PongGameRecord;
}
export default class RecordComponent extends React.Component<IRecordComponentProps, any> {

    render() {
        return (
            <tr key={this.props.record.id}>
                <td>{this.props.record.id}</td>
                <td>{this.props.record.winner}</td>
                <td>{this.props.record.scoreWinner}</td>
                <td>{this.props.record.scoreLoser}</td>
                <td>{this.props.record.duration}</td>
            </tr>
        );
    }
}