import React, {useState, useEffect} from 'react';
import PageWrapper from '../components/PageWrapper';

import { base_url } from '../services/backend';

const ReportPage = () => {
    const [reports, setReport] = useState([]);

    useEffect(() => {
        getReports();
    }, [0]);

    let getReports = async () => {
        let response = await fetch(`${base_url}reports`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        let data = await response.json()
        setReport(data)
    }

    console.log("Report Data: ", reports)

  return (
    <PageWrapper>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Created</th>
              <th scope="col">Modified</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => {
              return (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.title}</td>
                  <td>{report.created}</td>
                  <td>{report.modified}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );
}

export default ReportPage