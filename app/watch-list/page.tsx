import { watch } from "fs";
import WatchForm from "../components/WatchForm";
import EditWatch from "../components/EditWatch";

interface pageProps {}

const watches: any[] = [];

export default function page({}) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto p-6 sm:p-12">
        <div className="flex justify-between items-start">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            My Watch List
          </h1>
          <form action="/auth/signout" method="post">
            <button
              type="submit"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Sign out
            </button>
          </form>
        </div>
        <WatchForm />
        <div className="mt-6">
          {watches.map((watch) => (
            <div
              key={watch.id}
              className="mb-4 p-4 bg-gray-800 rounded-lg shadow">
              <h2 className="text-xl text-white mb-2">
                {watch.brand} - {watch.model}
              </h2>
              <div className="flex space-x-2">
                <form action={"deleteWatch"}>
                  <input type="hidden" name="id" value={watch.id} />
                  <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Delete
                  </button>
                </form>
                <EditWatch watch={watch} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
