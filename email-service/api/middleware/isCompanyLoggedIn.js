const axios = require("axios");

const isLoggedIn = async (req, res, next) => {
  try {
    const authToken = req.cookies.authToken;
    const response = await axios.get(
      `http://localhost:3002/auth/company/isLoggedIn`,
      {
        headers: {
          Cookie: `authToken=${authToken};`,
        },
      }
    );
    console.log(response.data);
    const authStatus = response.data.Authenticated;
    const isCompany = response.data.isCompany;
    if (authStatus === true && isCompany === true) {
      //fetching the userData object from auth service
      req.userData = response.data;
      next();
    } else {
      return res.json({
        message: "Unauthorized Access",
      });
    }
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Unauthorized Access",
    });
  }
};

module.exports = isLoggedIn;
