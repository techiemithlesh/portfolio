import { useEffect, useState } from 'react';
import AdminLayout from '../layout/AdminLayout';
import axios from 'axios';

function ViewProject() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/projects/${id}`)
      .then(response => {
        setProjects(projects.filter(project => project._id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <AdminLayout title="Admin-All Projects">
      
      <div className='w-full max-w-4xl mx-auto my-4 bg-white shadow flex justify-center items-center'>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2"> Description</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Technologies</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project._id}>
              <td className="border px-4 py-2">{project.title}</td>
              <td className="border px-4 py-2">{project.description}</td>
              <td className="border px-4 py-2">
                <img src={`http://localhost:5000/images/${project.image}`} width="45px"  />
              </td>
              <td className="border px-4 py-2">{project.technologies}</td>
              <td className="border px-4 py-2 flex justify-between mx-auto">
                <button className="bg-blue-500 hover:bg-blue-700 mx-1  text-white font-bold py-2 px-4 rounded" 
                onClick={(event) => {
                  event.preventDefault();
                  window.location.href = `/admin/projects/edit/${project._id}`;
                }}>Edit</button>
                <button className="bg-red-500  hover:bg-red-700  mx-1 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(project._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </AdminLayout>
  );
}

export default ViewProject;
