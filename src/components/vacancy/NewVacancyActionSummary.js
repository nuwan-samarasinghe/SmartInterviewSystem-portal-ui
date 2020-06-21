import React from 'react';
import {ElementStore, ReactFormGenerator} from 'react-form-builder2';

export default class NewVacancyActionSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            previewVisible: false,
            shortPreviewVisible: false,
            roPreviewVisible: false,
        };

        const update = this._onChange.bind(this);
        ElementStore.subscribe(state => update(state.data));
    }

    showPreview() {
        this.setState({
            previewVisible: true,
        });
    }

    showShortPreview() {
        this.setState({
            shortPreviewVisible: true,
        });
    }

    showRoPreview() {
        this.setState({
            roPreviewVisible: true,
        });
    }

    closePreview() {
        this.setState({
            previewVisible: false,
            shortPreviewVisible: false,
            roPreviewVisible: false,
        });
    }

    _onChange(data) {
        this.setState({
            data,
        });
    }

    render() {
        let modalClass = 'modal';
        if (this.state.previewVisible) {
            modalClass += ' show d-block ';
        }

        let shortModalClass = 'modal short-modal';
        if (this.state.shortPreviewVisible) {
            shortModalClass += ' show d-block';
        }

        let roModalClass = 'modal ro-modal';
        if (this.state.roPreviewVisible) {
            roModalClass += ' show d-block';
        }

        return (
            <div className="clearfix" style={{margin: '10px', width: '70%'}}>
                <h4 className="float-left">Preview</h4>
                <button className="btn btn-primary float-right" style={{marginRight: '10px'}}
                        onClick={this.showPreview.bind(this)}>
                    Preview
                </button>

                {this.state.previewVisible &&
                <div className={modalClass} style={{marginTop: '70px'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactFormGenerator
                                download_path=""
                                answer_data={{}}
                                action_name="Publish Vacancy"
                                form_action="/"
                                form_method="POST"
                                variables={this.props.variables}
                                data={this.state.data}/>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal"
                                        onClick={this.closePreview.bind(this)}>Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}