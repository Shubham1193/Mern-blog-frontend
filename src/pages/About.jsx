export default function About() {
  return (
    <div className='min-h-screen flex mt-6 justify-center'>
      <div className='max-w-2xl mx-auto p-2 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Shubham' Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to Shubham's Blog! This blog is created by me 
              as a personal project to share my thoughts and ideas with the
              world. I am a passoinate developer who loves to write about
              Statistics, technology, coding, and everything in between.
            </p>

            <p>
              On this blog, you'll find weekly articles and tutorials on topics
              such as web development, Statistics, Data-science, software engineering, and programming
              languages. I am always learning and exploring new
              technologies, so be sure to check back often for new content!
            </p>

            <p>
              I encourage you to leave comments on our posts and engage with
              other readers. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}