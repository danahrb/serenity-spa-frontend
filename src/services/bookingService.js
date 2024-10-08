// src/services/bookingService.js
const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/bookings`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return res.json();
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
};

const show = async (bookingId) => {
  try {
    const res = await fetch(`${BASE_URL}/${bookingId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return res.json();
  } catch (error) {
    console.error("Error fetching booking:", error);
    throw error;
  }
};

const remove = async (bookingId) => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
  
      const res = await fetch(`${BASE_URL}/${bookingId}`, options);
  
      return res.json();
    } catch (error) {
      console.error("Error deleting booking:", error);
      throw error;
    }
  };
  
export { index, show, remove};
