import axios from 'axios';

const unsplashBaseURL = 'https://source.unsplash.com/featured/200x200/?face';

export async function fetchRandomImage() {
  try {
    const response = await axios.get(unsplashBaseURL);
    return response.request.responseURL;
  } catch (error) {
    console.error(error);
    return ''; // Fallback image URL or handle error as needed
  }
}
