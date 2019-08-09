import React from 'react';

interface IPaginationComponentProps {
    pagination: {
        totalPages: number | undefined,
        number: number,
        first: boolean | undefined,
        last: boolean | undefined,
        size: number,
    },
    loadData: (pageNumber: number, pageSize: number) => void;
}

export default class PaginationComponent extends React.Component<IPaginationComponentProps, any> {

    constructor(props: IPaginationComponentProps) {
        super(props);
        this.state = {
            inputPage: ''
        }
    }

    updateValue(e: any) {
        this.setState({
            ...this.state,
            inputPage: e.target.value
        });
    }

    handleKeyPress(e: any) {
        if (e.key === 'Enter') {
            this.props.loadData(this.state.inputPage - 1, this.props.pagination.size);
        }
    }

    render() {
        const onFirst = this.props.pagination.first;
        const onLast = this.props.pagination.last;
        const firstPage = 0;
        const lastPage = (this.props.pagination.totalPages || 1) - 1;
        const previousPage = this.props.pagination.number - 1;
        const nextPage = this.props.pagination.number + 1;
        const pageSize = this.props.pagination.size;
        return (
            <div>
                <div id="pagination-controls">
                    <div
                        className={this.props.pagination.first ? 'disabled-control' : ''}
                        onClick={() => {
                            if (!onFirst) this.props.loadData(firstPage, pageSize);
                        }}
                    >{'<<'}</div>

                    <div
                        className={this.props.pagination.first ? 'disabled-control' : ''}
                        onClick={() => {
                            if (!onFirst) this.props.loadData(previousPage, pageSize);
                        }}
                    >{'<'}</div>

                    <input
                        name="page" type="text" placeholder={'' + (this.props.pagination.number + 1)}
                        onChange={(e: any) => this.updateValue(e)}
                        onKeyPress={(e: any) => this.handleKeyPress(e)}
                    ></input>

                    <div
                        className={this.props.pagination.last ? 'disabled-control' : ''}
                        onClick={() => {
                            if (!onLast) this.props.loadData(nextPage, pageSize);
                        }}
                    >{'>'}</div>

                    <div
                        className={this.props.pagination.last ? 'disabled-control' : ''}
                        onClick={() => {
                            if (!onLast) this.props.loadData(lastPage, pageSize);
                        }}
                    >{'>>'}</div>
                </div>
                <p id="pagination-detail">
                    Page {this.props.pagination.number + 1} of {this.props.pagination.totalPages}</p>
            </div>
        )
    }
}