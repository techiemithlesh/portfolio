import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../layout/AdminLayout';

function EditProject() {
  const [project, setProject] = useState({
    title: '',
    description: '',
    githubLink: '',
    demoLink: '',
    image: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/projects/${id}`)
      .then(response => {
        setProject(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    setProject({
      ...project,
      [event.target.name]: event.target.value
    });
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', project.title);
    formData.append('description', project.description);
    formData.append('githubLink', project.githubLink);
    formData.append('demoLink', project.demoLink);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    axios.patch(`http://localhost:5000/api/projects/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log(response.data);
        navigate('/admin/projects');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <AdminLayout>
      <div className="w-full max-w-4xl mx-auto my-4">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              name="title"
              type="text"
              placeholder="Enter project title"
              value={project.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              placeholder="Enter project description"
              value={project.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="githublink">
              Github Link
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="githublink"
              name="githubLink"
              placeholder="Enter project github link"
              value={project.githubLink}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="demolink">
              Demo Link
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="demolink"
              name="demoLink"
              placeholder="Enter project Demo link"
              value={project.demoLink}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
              Image
            </label>
            <input
              className="block"
              id="image"
              name="image"
              type="file"
              onChange={handleImageChange}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save Changes
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default EditProject;
