import axios from 'axios';

export async function predictImage(imageFile: File) {
  const formData = new FormData();
  formData.append('image', imageFile);

  try {
    const response = await axios.post('http://192.168.1.7:5000/predict', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}