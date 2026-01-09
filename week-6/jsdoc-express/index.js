const express = require("express");

// ...

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns
 */
function getPeople(req, res) {
  // ...
  return res.status(200).json({});
}
