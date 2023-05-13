import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '../layout/AdminLayout';

function ViewContact() {
    const [contacts, setContacts] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:5000/api/contact')
        .then(response => {
          setContacts(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
    const handleDelete = (id) => {
      axios.delete(`http://localhost:5000/api/contact/${id}`)
        .then(response => {
          setContacts(contacts.filter(contact => contact._id !== id));
        })
        .catch(error => {
          console.log(error);
        });
    };
  
    return (
      <AdminLayout title="Admin Contact-List">
        <div className="w-full max-w-4xl mx-auto my-4 bg-white shadow flex justify-center items-center">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Message</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(contact => (
                <tr key={contact._id}>
                  <td className="border px-4 py-2">{contact.name}</td>
                  <td className="border px-4 py-2">{contact.email}</td>
                  <td className="border px-4 py-2">{contact.message}</td>
                  <td className="border px-4 py-2">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(contact._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminLayout>
    );
  }
  

export default ViewContact;
