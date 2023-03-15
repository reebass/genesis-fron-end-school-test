import axios from 'axios';


axios.defaults.baseURL = 'http://api.wisey.app/api/v1/';

// const setToken = () => {
//   const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
//   const body = 'eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0'
//   const signature = 'Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM'
//   const token = [header, body, signature].join('.')
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };
const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};




const getToken = async () => {
  try {
    const res = await axios.get('auth/anonymous?platform=subscriptions')
    setToken(res.data.token)
  } catch (error) {
    console.log(error.message)
  }
} 

export const fetchAllCourses = async (object) => {
  await getToken()
  try {
    const res = await axios.get(`core/preview-courses`, {
      signal: object,
    })
    return res.data
  } catch(error) {
    console.log(error.message)
  }
}

export const fetchCourseById = async (id, object) => {
  await getToken()
  try {
    const res = await axios.get(`core/preview-courses/${id}`, {
      signal: object,
    })
    return res.data
  } catch(error) {
    console.log(error.message)
  }
}
