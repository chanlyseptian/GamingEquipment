import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000/members'

const getMembers = async (cb) => {
  try {
    let members = await axios({
      method: 'GET',
      url: URL
    })
    cb(members.data);
  }
  catch (err) {
    console.error(err);
  }
}

const addMember = async (member) => {
  try {
    let result = await axios({
      method: 'POST',
      url: URL + "/create",
      data: member
    })


    Swal.fire(
      'Add Member',
      'Member has been added',
      'success'
    )
  } catch (e) {
    console.log(e)
  }
}

const editMember = async (id, member) => {
  try {
    let result = await axios({
      method: 'PUT',
      url: URL + '/update/' + id,
      data: member
    })

    Swal.fire(
      'Edit member ' + id,
      'member ' + id + ' has been edited',
      'success'
    )
  } catch (e) {
    console.log(e)
  }
}

const removeMember = async (id) => {
  try {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        let result = await axios({
          method: "DELETE",
          url: URL + '/delete/' + id
        })

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  } catch (e) {
    console.log(e)
  }
}

const accountMember = async (id, cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: URL + '/' + id
    })

    cb(result.data)
  } catch (e) {
    console.log(e)
  }
}

export {
  getMembers,
  addMember,
  editMember,
  removeMember,
  accountMember
}