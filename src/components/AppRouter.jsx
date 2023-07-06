import React from "react";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/*' element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
