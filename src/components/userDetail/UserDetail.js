import React, { useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const UserDetail = ({ detailUser }) => {
  const [lang, setLang] = useState("tr-TR");

  return (
    <div>
      <ul className="bg-white shadow-xl rounded-md p-8">
        {detailUser &&
          detailUser.map((user, i) => (
            <li key={i}>
              <div className="flex flex-col 2xl:flex-row w-full border-b pb-6 justify-between">
                <div className="w-3/5">
                  <div className="mb-7">
                    <div className="text-4xl pb-2">{user.name} </div>
                    <div className="text-lg text-gray-600">
                      {user.address.city}{" "}
                    </div>
                  </div>
                  <div className="flex justify-between md:justify-start mb-2">
                    <div className="text-gray-400 w-28">Username</div>
                    <div className="text-gray-500 w-20 font-medium">
                      {user.username}
                    </div>
                  </div>
                  <div className="flex justify-between md:justify-start mb-2">
                    <div className="text-gray-400 w-28">Email</div>
                    <div className="text-gray-500 w-20 font-medium">
                      {user.email}
                    </div>
                  </div>
                  <div className="flex justify-between md:justify-start mb-2">
                    <div className="text-gray-400 w-28">Phone</div>
                    <div className="text-gray-500 w-20 md:w-32 font-medium">
                      {user.phone}
                    </div>
                  </div>
                  <div className="flex justify-between md:justify-start mb-2">
                    <div className="text-gray-400 w-28">Website</div>
                    <div className="text-gray-500 w-20 font-medium">
                      {user.website}
                    </div>
                  </div>
                  <div className="flex justify-between md:justify-start">
                    <div className="text-gray-400 w-28">Company</div>
                    <div className="text-gray-500 w-20 font-medium">
                      {user.company.name}
                    </div>
                  </div>
                </div>
                <div className="flex w-full 2xl:w-4/5 rounded-xl justify-center items-center mb-7 mt-7">
                <YMaps key={lang} query={{ lang }}>
                  <Map
                    defaultState={{
                      center: [user?.address?.geo?.lat, user?.address?.geo?.lng],
                      zoom: 3,
                      controls: ["zoomControl"],
                    }}
                    modules={[
                      "control.ZoomControl",
                      "control.FullscreenControl",
                    ]}
                    width="100%"
                    height="100%"
                  >
                    <Placemark defaultGeometry={[user?.address?.geo?.lat, user?.address?.geo?.lng]} />
                  </Map>
                </YMaps>
                </div>
             
              </div>
              <div className="mt-16 mx-10 md:mx-20 lg:mx-44 xl:mx-64 2xl:mx-96 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, ducimus! Saepe illo fugit mollitia cupiditate quas repellat doloribus dicta velit. Molestiae voluptatem harum vero nihil repudiandae aspernatur odio, illo facere!
              </div>
              <div className="pt-10 text-center text-blue-600 cursor-pointer">Show More</div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserDetail;
