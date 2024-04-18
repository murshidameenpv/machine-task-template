    import { FaEye } from "react-icons/fa";
    const Table = () => {
    return (
      <div className="bg-white px-2 py-3 mx-8 my-4">
        <label className="input input-bordered flex items-center w-1/4 rounded-full">
          <input type="text" className="grow" placeholder="Search" />
          <div className="bg-purple-100 rounded-full px-5 py-4 mr-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </label>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Template Name :</th>
                <th>Template Type :</th>
                <th>Created By :</th>
                <th>Status :</th>
                <th>Actions :</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>Installation Template</th>
                <td>Installation</td>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="avatar">
                      <div className="mask mask-squircle w-10 h-10">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH4c6IsrcwHxgCljuzAemAeu2Ra4pTu0HUIBeVKEjUcg&s"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="indicator-item badge badge-success">
                    Active
                  </span>
                </td>
                <td>
                  <FaEye />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
    };

    export default Table;
