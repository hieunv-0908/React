import React, { Component } from 'react';
import '../css/JobList.css';

interface Job {
    nameJob: string;
    status: boolean;
}

interface StateType {
    jobs: Job[];
    jobsTemp: Job;
    deleteConfirmStatus: boolean;
    editIndex: number | null; // index đang sửa
}

export default class JobList extends Component<{}, StateType> {
    constructor(props: {}) {
        super(props);
        this.state = {
            jobs: [],
            jobsTemp: { nameJob: '', status: false },
            deleteConfirmStatus: false,
            editIndex: null,
        };
    }

    // handle input change
    handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            jobsTemp: { ...this.state.jobsTemp, nameJob: e.target.value }
        });
    }

    // handle submit form
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { jobs, jobsTemp, editIndex } = this.state;

        if (editIndex === null) {
            // Thêm mới
            this.setState({ jobs: [...jobs, jobsTemp], jobsTemp: { nameJob: '', status: false } });
        } else {
            // Sửa
            const newJobs = [...jobs];
            newJobs[editIndex] = { ...jobsTemp }; // cập nhật giá trị
            this.setState({ jobs: newJobs, editIndex: null, jobsTemp: { nameJob: '', status: false } });
        }
    }

    // bật chế độ sửa
    startEdit = (idx: number) => {
        const jobToEdit = this.state.jobs[idx];
        this.setState({
            jobsTemp: { ...jobToEdit },
            editIndex: idx
        });
    }

    // toggle trạng thái checkbox
    toggleStatus = (idx: number) => {
    const newJobs = [...this.state.jobs];
    newJobs[idx].status = !newJobs[idx].status; 
    this.setState({ jobs: newJobs });
}


    // Xoá công việc
    confirmDelete = () => {
        const { editIndex, jobs } = this.state;
        if (editIndex !== null) {
            const newJobs = [...jobs];
            newJobs.splice(editIndex, 1);
            this.setState({ jobs: newJobs, editIndex: null, deleteConfirmStatus: false });
        }
    }

    render() {
        const { jobs, jobsTemp, editIndex, deleteConfirmStatus } = this.state;
        const isEditing = editIndex !== null;

        return (
            <>
                <div className="job-list-container">
                    <h1>Danh sách công việc</h1>
                    <form className="job-form" onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={jobsTemp.nameJob} // hiển thị giá trị hiện tại khi sửa
                            onChange={this.handleInput}
                            placeholder="Thêm công việc mới..."
                        />
                        <button>{isEditing ? 'Sửa' : 'Thêm'}</button>
                    </form>
                    <div>
                        {jobs.map((j, idx) => (
                            <div key={idx} className={`job-item`}>
                                <div className="job-left">
                                    <input
                                        type="checkbox"
                                        checked={j.status} // true = hoàn thành, false = chưa hoàn thành
                                        onChange={() => this.toggleStatus(idx)}
                                    />
                                    <span style={{ textDecoration: j.status ? 'line-through' : 'none' }}>
                                        {j.nameJob}
                                    </span>
                                </div>
                                <div className="job-actions">
                                    <button className="edit-btn" type="button" onClick={() => this.startEdit(idx)}>
                                        Sửa
                                    </button>
                                    <button className="delete-btn" type="button" onClick={() => this.setState({ deleteConfirmStatus: true, editIndex: idx })}>
                                        Xoá
                                    </button>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                {/* Popup xác nhận xoá */}
                {deleteConfirmStatus && (
                    <div className="confirm-overlay" style={{ display: 'flex' }}>
                        <div className="confirm-box">
                            <h2>Xác nhận</h2>
                            <i className="fa-solid fa-xmark close-btn" onClick={() => this.setState({ deleteConfirmStatus: false })}></i>
                            <span>
                                <i className="fa-solid fa-exclamation"></i>
                                Bạn có xác nhận xoá công việc này không?
                            </span>
                            <hr />
                            <div className="actions">
                                <button className="cancel-btn" onClick={() => this.setState({ deleteConfirmStatus: false })}>
                                    Huỷ
                                </button>
                                <button className="confirm-btn" onClick={this.confirmDelete}>
                                    Xác nhận
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }
}
