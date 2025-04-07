import axios from "axios";

export const bookRepair = async (formData) => {
  try {
    const response = await axios.post("http://localhost:7001/api/repair/book", formData);
    return response.data;
  } catch (error) {
    console.error("Error booking repair:", error);
    throw error;
  }
};
