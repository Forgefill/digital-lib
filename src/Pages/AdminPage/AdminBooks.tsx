import SeparateLine from "../../Components/SeparateLine/SeparateLine";
import {useState} from 'react'
import { books, deleteReport, reports } from "../../httpRequests/testData";
import { Link } from "react-router-dom";

function AdminBooks(){
    const [reportsData, setReports] = useState(reports);

    const handleReportRejectedChange = (id: number) => {
        setReports(reportsData.filter((report) => report.id !== id));
        deleteReport(id);
    };

    return  <div className=" is-vcentered is-centered mt-3">

                    {reportsData.map(report => (
                    <div> 
                        <div className=" mb-2 mt-1 is-vcentered ">
                            <div className="column has-text-centered pb-0">
                                <Link to='/book'>
                                        <span className="is-5 subtitle has-text-link">{books.filter(x=>x.id == report.bookId)[0].title}</span>
                                </Link> 
                            </div>
                            <div className="column pb-0">
                                <textarea className="textarea is-danger" readOnly>{report.text}</textarea>
                            </div>
                        </div>
                        <div className="pb-0 mt-4 is-one-quarter is-centered buttons">
                                <button className="button is-primary" onClick={()=>handleReportRejectedChange(report.id)}>Reject Report</button>
                                <button className="button is-danger">Block Book</button>
                        </div>
                        <SeparateLine/>
                    </div>
                    ))}
            </div>
}

export default AdminBooks;