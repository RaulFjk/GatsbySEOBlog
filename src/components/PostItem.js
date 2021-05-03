import React from "react"

const PostItem = props => {
  return (
    <section>
      <div className="mb-4 md:mb-0 w-full mt-24">
        <h1 className="text-3xl font-semibold text-gray-800 leading-tight">
          Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales,
          massa et auctor.
        </h1>

        <div class="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
              alt="avatar"
              className="mx-2 my-5 w-8 h-8 object-cover rounded-full hidden sm:block"
            />
            <span className="text-sm text-yellow-600">Mike Ohearn</span>
            <span className="mx-2">|</span>
            <span className="text-sm text-gray-400">April 23, 2021</span>
          </div>
        </div>
        <div className="mx-auto max-h-80 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            className="w-full h-full object-contain"
          />
        </div>
        <p className="mt-16 whitespace-pre-wrap">
        Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is
          justice. Six draw
          you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages
          resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was
          outlived peculiar rendered led six.Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is
          justice. Six draw
            <br /> <br />
          you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages
          resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was
          outlived peculiar rendered led six.
          Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is
          justice. Six draw
          you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages
          resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was
          outlived peculiar rendered led six.
          Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is
          justice. Six draw
          you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages
          resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was
          outlived peculiar rendered led six.  
        </p>
      </div>
    </section>
  )
}

export default PostItem
