import React from 'react';
import SeparateLine from '../SeparateLine/SeparateLine';
import { Chapter } from '../../httpRequests/testData';


interface ChapterTableProps {
  chapters: Chapter[];
  currentPage: number;
  totalPages: number;
  chaptersPerPage: number;
  bookId: number;
  onPageChange: (pageNum: number) => void;
  onChaptersPerPageChange: (chaptersPerPage: number) => void;
}

const ChapterTable: React.FC<ChapterTableProps> = ({
  chapters,
  currentPage,
  totalPages,
  chaptersPerPage,
  bookId,
  onPageChange,
  onChaptersPerPageChange,
}) => {

  // Generate an array of page numbers for the pagination
  let pageNumbers = [1];
  for (let i = currentPage - 3; i <= currentPage + 3; i++) {
    if (i > 1 && i < totalPages) {
      pageNumbers.push(i);
    }
  }
  pageNumbers.push(totalPages);

  // Remove duplicates and sort the array
  pageNumbers = Array.from(new Set(pageNumbers)).sort((a, b) => a - b);

  return (
    <div className="box">
      <div className="columns">
        <div className='column is-narrow'>
          <i className=" fas fa-light fa-book"></i>
        </div>
        <span className="column is-narrow title is-5 m-0">Table of content</span>
        <span className="column is-flex is-justify-content-end">
          {totalPages} pages
        </span>
      </div>
      <SeparateLine/>

      <div className="mt-4">
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Chapter name</th>
            </tr>
          </thead>
          <tbody>
            {chapters.map((chapter) => (
              <tr key={chapter.id}>
                <td>
                  <a href={`/book/${bookId}/chapter/${chapter.id}`}>{chapter.title}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <nav
          className="pagination is-centered mt-4"
          role="navigation"
          aria-label="pagination"
        >
          <a
            className="pagination-previous"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          >
            Previous
          </a>
          <a
            className="pagination-next"
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          >
            Next
          </a>
          <ul className="pagination-list">
            {pageNumbers.map((page, index) => (
              <React.Fragment key={page}>
                {index > 0 && pageNumbers[index - 1] < page - 1 && (
                  <li>
                    <span className="pagination-ellipsis">&hellip;</span>
                  </li>
                )}
                <li>
                  <a
                    className={`pagination-link ${currentPage === page ? 'is-current' : ''}`}
                    aria-label={`Goto page ${page}`}
                    onClick={() => onPageChange(page)}
                  >
                    {page}
                  </a>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </nav>

        <div className="select is-small mt-4">
          <select
            value={chaptersPerPage}
            onChange={(e) => onChaptersPerPageChange(Number(e.target.value))}
          >
            <option value={5}>5 chapters per page</option>
            <option value={10}>10 chapters per page</option>
            <option value={20}>20 chapters per page</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ChapterTable;
