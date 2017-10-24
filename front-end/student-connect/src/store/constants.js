const constants = [
  // 'STUDENT_LOGIN',
  // 'ADMIN_LOGIN',
  'REGISTER_USER'
  'GET_HOMEPAGE',
  'POST_TO_NEWSFEED'
].reduce(
  function (acc, curr) {
    acc[curr] = curr
    return acc
  },
  {}
)
module.exports = constants
