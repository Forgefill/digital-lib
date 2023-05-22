export function ChapterTable() {
  const chapters = [
    { id: 1, name: "Chapter 231: Chapter name" },
    { id: 2, name: "Chapter 232: Chapter name" },
    { id: 3, name: "Chapter 233: Chapter name" },
    { id: 4, name: "Chapter 234: Chapter name" },
    { id: 5, name: "Chapter 235: Chapter name" },
    // Add more chapters as needed
  ];

  return (
    <div className="box">
      <div className="columns">
        <i className="column is-narrow fas fa-light fa-book"></i>
        <span className="column is-narrow title is-5 m-0">
          Table of content
        </span>
        <span className="column is-flex is-justify-content-end">
          430 chapters
        </span>
      </div>
      <hr className="m-0"></hr>

      <div className="mt-4">
        <input
          className="input is-small mb-4"
          type="text"
          placeholder="Search chapters"
        />

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
                  <a href={`/chapter/${chapter.id}`}>{chapter.name}</a>
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
          <a className="pagination-previous">Previous</a>
          <a className="pagination-next">Next</a>
          <ul className="pagination-list">
            <li>
              <a className="pagination-link" aria-label="Goto page 1">
                1
              </a>
            </li>
            <li>
              <span className="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <a className="pagination-link" aria-label="Goto page 45">
                45
              </a>
            </li>
            <li>
              <a
                className="pagination-link is-current"
                aria-label="Page 46"
                aria-current="page"
              >
                46
              </a>
            </li>
            <li>
              <a className="pagination-link" aria-label="Goto page 47">
                47
              </a>
            </li>
            <li>
              <span className="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <a className="pagination-link" aria-label="Goto page 86">
                86
              </a>
            </li>
          </ul>
        </nav>

        <div className="select is-small mt-4">
          <select>
            <option>5 chapters per page</option>
            <option>10 chapters per page</option>
            <option>20 chapters per page</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ChapterTable;
