"use client";

const ProfileDetails = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Complete Your Profile
        </h1>
        <form>
          {/* Name Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          {/* Username Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="userName"
            >
              Username
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="Enter your username"
              required
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          {/* Bio Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="bio"
            >
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              placeholder="Tell us about yourself"
              className="border border-gray-300 rounded-md p-2 w-full h-24"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          {/* Profile Image URL Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="image"
            >
              Profile Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              placeholder="Enter profile image URL"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          {/* Save Profile Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileDetails;
