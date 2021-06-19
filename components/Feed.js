import Stories from "./Stories";

function Feed() {
  return (
    <div className="h-screen flex-grow justify-start pb-44 py-6 mr-4 overflow-y-auto scrollbar-hide">
      <div className="max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        {/* InputBox */}
        {/* Posts */}
      </div>
    </div>
  );
}

export default Feed;
