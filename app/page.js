import * as React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";

export default function Landing(props) {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex bg-[#11182a] overflow-hidden relative flex-col items-center self-stretch px-16 pt-6 w-full font-bold fill-slate-50 min-h-[1010px] text-gray-300 max-md:px-5 max-md:max-w-full">
        <div className="flex relative flex-col items-center mt-px w-full max-w-[1441px] max-md:max-w-full">
          <div className="flex gap-5 justify-between items-start max-w-full w-[1193px] max-md:flex-wrap">
            <div className="flex gap-3.5 text-xl leading-6 whitespace-nowrap">
              <Image width={50} height={50} src={logo} />
              <div className="self-start mt-4 grow">StartupLanding</div>
            </div>
            <div className="flex self-stretch gap-3 my-auto text-base leading-8 text-center flex-2">
              <span className="text-gray-300 cursor-pointer hover:text-[#f59e0b]">
                Home Categories
              </span>{" "}
              <span className="text-gray-300 cursor-pointer hover:text-[#f59e0b]">
                Contact
              </span>{" "}
              <span className="text-gray-300 cursor-pointer hover:text-[#f59e0b]">
                About us
              </span>
            </div>
            <div className="justify-center px-5 py-4 mt-1.5 text-base tracking-normal leading-6 text-white whitespace-nowrap rounded-md bg-slate-900">
              Purchase Now
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc11ef5bd665bcd914c7761a47200193050324bb3db72ee6b0d44caa1fdcd0e0?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
            className="mt-14 max-w-full aspect-square w-[100px] max-md:mt-10"
          />
          <div className="flex overflow-hidden relative flex-col items-center self-stretch px-16 pt-12 w-full text-6xl tracking-tighter text-center leading-[80px] min-h-[780px] max-md:px-5 max-md:max-w-full max-md:text-4xl max-md:leading-[55px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/120fc94443e8a7f09904fd4c76fed4ecf05a02901a820f85f9d1ea6a502c8220?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
              className="absolute inset-0 object-cover size-full"
            />
            <div className="flex relative flex-col max-w-full w-[1000px] max-md:text-4xl max-md:leading-[55px]">
              <div className="self-center max-md:max-w-full max-md:text-4xl max-md:leading-[55px]">
                Create beautiful landing
                <br />
                page in few minutes
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dbfe1830df4cf6df58e2526cd354039c50f1c8b97f40fcc9f10f0a14e25859cc?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbfe1830df4cf6df58e2526cd354039c50f1c8b97f40fcc9f10f0a14e25859cc?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbfe1830df4cf6df58e2526cd354039c50f1c8b97f40fcc9f10f0a14e25859cc?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbfe1830df4cf6df58e2526cd354039c50f1c8b97f40fcc9f10f0a14e25859cc?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbfe1830df4cf6df58e2526cd354039c50f1c8b97f40fcc9f10f0a14e25859cc?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbfe1830df4cf6df58e2526cd354039c50f1c8b97f40fcc9f10f0a14e25859cc?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbfe1830df4cf6df58e2526cd354039c50f1c8b97f40fcc9f10f0a14e25859cc?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbfe1830df4cf6df58e2526cd354039c50f1c8b97f40fcc9f10f0a14e25859cc?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                className="mt-20 w-full aspect-[1.92] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 text-3xl font-bold tracking-tighter text-center whitespace-nowrap leading-[54.9px] text-grey-300 max-md:mt-10">
        What the features of product
      </div>
      <div className="mt-5 text-lg leading-6 text-center text-gray-500 whitespace-nowrap">
        Features are highlighted here
      </div>
      <div className="px-5 mt-28 max-w-full w-[1162px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
              <div className="flex items-start justify-between gap-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/98b6de859c8d85c1dbd97650426441020a467aaedc8f4e53d8d5ebd39c46b55c?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/98b6de859c8d85c1dbd97650426441020a467aaedc8f4e53d8d5ebd39c46b55c?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/98b6de859c8d85c1dbd97650426441020a467aaedc8f4e53d8d5ebd39c46b55c?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/98b6de859c8d85c1dbd97650426441020a467aaedc8f4e53d8d5ebd39c46b55c?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/98b6de859c8d85c1dbd97650426441020a467aaedc8f4e53d8d5ebd39c46b55c?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/98b6de859c8d85c1dbd97650426441020a467aaedc8f4e53d8d5ebd39c46b55c?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/98b6de859c8d85c1dbd97650426441020a467aaedc8f4e53d8d5ebd39c46b55c?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/98b6de859c8d85c1dbd97650426441020a467aaedc8f4e53d8d5ebd39c46b55c?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="aspect-square w-[88px]"
                />
                <div className="flex flex-col flex-1 mt-2">
                  <div className="text-lg font-bold leading-8 text-grey-300">
                    3D modeling & art
                  </div>
                  <div className="mt-6 text-base leading-8 text-gray-700">
                    Get your info tests delivered athome collect a sample from
                    theyour pogress tests.
                  </div>
                </div>
              </div>
              <div className="flex self-center gap-3 text-base font-medium leading-10 text-blue-500 mt-9">
                <div>Learn more</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9495836d863304ce9273e2ca2eda7f1871c144888a2736aade87ededd13d029?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="self-start w-1.5 aspect-[0.6] fill-blue-400"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
              <div className="flex items-start justify-between gap-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/98f8adf0049e91ee2a5be5326226f10d7378e9d62dab240f40b3301492a24a82?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/98f8adf0049e91ee2a5be5326226f10d7378e9d62dab240f40b3301492a24a82?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/98f8adf0049e91ee2a5be5326226f10d7378e9d62dab240f40b3301492a24a82?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/98f8adf0049e91ee2a5be5326226f10d7378e9d62dab240f40b3301492a24a82?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/98f8adf0049e91ee2a5be5326226f10d7378e9d62dab240f40b3301492a24a82?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/98f8adf0049e91ee2a5be5326226f10d7378e9d62dab240f40b3301492a24a82?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/98f8adf0049e91ee2a5be5326226f10d7378e9d62dab240f40b3301492a24a82?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/98f8adf0049e91ee2a5be5326226f10d7378e9d62dab240f40b3301492a24a82?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="aspect-square w-[88px]"
                />
                <div className="flex flex-col flex-1 mt-2">
                  <div className="text-lg font-bold leading-8 text-grey-300">
                    Digital promotion
                  </div>
                  <div className="mt-6 text-base leading-8 text-gray-700">
                    Get your info tests delivered athome collect a sample from
                    theyour pogress tests.
                  </div>
                </div>
              </div>
              <div className="flex self-center gap-3 text-base font-medium leading-10 text-blue-500 mt-9">
                <div>Learn more</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9495836d863304ce9273e2ca2eda7f1871c144888a2736aade87ededd13d029?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="self-start w-1.5 aspect-[0.6] fill-blue-400"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
              <div className="flex items-start justify-between gap-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/076e0ffe1caa5e076163ab065c714efb3e14343499923c6630e71cea87953dad?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/076e0ffe1caa5e076163ab065c714efb3e14343499923c6630e71cea87953dad?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/076e0ffe1caa5e076163ab065c714efb3e14343499923c6630e71cea87953dad?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/076e0ffe1caa5e076163ab065c714efb3e14343499923c6630e71cea87953dad?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/076e0ffe1caa5e076163ab065c714efb3e14343499923c6630e71cea87953dad?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/076e0ffe1caa5e076163ab065c714efb3e14343499923c6630e71cea87953dad?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/076e0ffe1caa5e076163ab065c714efb3e14343499923c6630e71cea87953dad?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/076e0ffe1caa5e076163ab065c714efb3e14343499923c6630e71cea87953dad?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="aspect-square w-[88px]"
                />
                <div className="flex flex-col flex-1 mt-2">
                  <div className="text-lg font-bold leading-8 text-grey-300">
                    Business Enterprise
                  </div>
                  <div className="mt-6 text-base leading-8 text-gray-700">
                    Get your info tests delivered athome collect a sample from
                    theyour pogress tests.
                  </div>
                </div>
              </div>
              <div className="flex self-center gap-3 text-base font-medium leading-10 text-blue-500 mt-9">
                <div>Learn more</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9495836d863304ce9273e2ca2eda7f1871c144888a2736aade87ededd13d029?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="self-start w-1.5 aspect-[0.6] fill-blue-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-24 max-w-full w-[1162px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
              <div className="flex items-start justify-between gap-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0388cebb010a0a0efdfbb0231c6701c518ab6437c38446432fcc83080a0a0c9e?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0388cebb010a0a0efdfbb0231c6701c518ab6437c38446432fcc83080a0a0c9e?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0388cebb010a0a0efdfbb0231c6701c518ab6437c38446432fcc83080a0a0c9e?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0388cebb010a0a0efdfbb0231c6701c518ab6437c38446432fcc83080a0a0c9e?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0388cebb010a0a0efdfbb0231c6701c518ab6437c38446432fcc83080a0a0c9e?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0388cebb010a0a0efdfbb0231c6701c518ab6437c38446432fcc83080a0a0c9e?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0388cebb010a0a0efdfbb0231c6701c518ab6437c38446432fcc83080a0a0c9e?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0388cebb010a0a0efdfbb0231c6701c518ab6437c38446432fcc83080a0a0c9e?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="aspect-square w-[88px]"
                />
                <div className="flex flex-col flex-1 mt-2">
                  <div className="text-lg font-bold leading-8 text-grey-300">
                    Marketing & advertising
                  </div>
                  <div className="mt-6 text-base leading-8 text-gray-700">
                    Get your info tests delivered athome collect a sample from
                    theyour pogress tests.
                  </div>
                </div>
              </div>
              <div className="flex self-center gap-3 text-base font-medium leading-10 text-blue-500 mt-9">
                <div>Learn more</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9495836d863304ce9273e2ca2eda7f1871c144888a2736aade87ededd13d029?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="self-start w-1.5 aspect-[0.6] fill-blue-400"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
              <div className="flex items-start justify-between gap-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/67cd8ea0526ee09840dd9358bc8eff11ad73124256b2231c4ab1326501f910c6?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/67cd8ea0526ee09840dd9358bc8eff11ad73124256b2231c4ab1326501f910c6?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/67cd8ea0526ee09840dd9358bc8eff11ad73124256b2231c4ab1326501f910c6?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/67cd8ea0526ee09840dd9358bc8eff11ad73124256b2231c4ab1326501f910c6?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/67cd8ea0526ee09840dd9358bc8eff11ad73124256b2231c4ab1326501f910c6?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/67cd8ea0526ee09840dd9358bc8eff11ad73124256b2231c4ab1326501f910c6?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/67cd8ea0526ee09840dd9358bc8eff11ad73124256b2231c4ab1326501f910c6?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/67cd8ea0526ee09840dd9358bc8eff11ad73124256b2231c4ab1326501f910c6?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="aspect-square w-[88px]"
                />
                <div className="flex flex-col flex-1 mt-2">
                  <div className="text-lg font-bold leading-8 text-grey-300">
                    Ultimate development
                  </div>
                  <div className="mt-6 text-base leading-8 text-gray-700">
                    Get your info tests delivered athome collect a sample from
                    theyour pogress tests.
                  </div>
                </div>
              </div>
              <div className="flex self-center gap-3 text-base font-medium leading-10 text-blue-500 mt-9">
                <div>Learn more</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9495836d863304ce9273e2ca2eda7f1871c144888a2736aade87ededd13d029?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="self-start w-1.5 aspect-[0.6] fill-blue-400"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
              <div className="flex items-start justify-between gap-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/892f7a2b6c838b4527c2db91325b6ab8e4057ded477d618e33a074bd6767ac60?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/892f7a2b6c838b4527c2db91325b6ab8e4057ded477d618e33a074bd6767ac60?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/892f7a2b6c838b4527c2db91325b6ab8e4057ded477d618e33a074bd6767ac60?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/892f7a2b6c838b4527c2db91325b6ab8e4057ded477d618e33a074bd6767ac60?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/892f7a2b6c838b4527c2db91325b6ab8e4057ded477d618e33a074bd6767ac60?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/892f7a2b6c838b4527c2db91325b6ab8e4057ded477d618e33a074bd6767ac60?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/892f7a2b6c838b4527c2db91325b6ab8e4057ded477d618e33a074bd6767ac60?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/892f7a2b6c838b4527c2db91325b6ab8e4057ded477d618e33a074bd6767ac60?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="aspect-square w-[88px]"
                />
                <div className="flex flex-col flex-1 mt-2">
                  <div className="text-lg font-bold leading-8 text-grey-300">
                    Online support
                  </div>
                  <div className="mt-6 text-base leading-8 text-gray-700">
                    Get your info tests delivered athome collect a sample from
                    theyour pogress tests.
                  </div>
                </div>
              </div>
              <div className="flex self-center gap-3 text-base font-medium leading-10 text-blue-500 mt-9">
                <div>Learn more</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9495836d863304ce9273e2ca2eda7f1871c144888a2736aade87ededd13d029?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="self-start w-1.5 aspect-[0.6] fill-blue-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-48 w-full max-w-[1376px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f94701305db0c39055e19e5af285ef49899c7da5f79825cca8ce60d4bbc2365c?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f94701305db0c39055e19e5af285ef49899c7da5f79825cca8ce60d4bbc2365c?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f94701305db0c39055e19e5af285ef49899c7da5f79825cca8ce60d4bbc2365c?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f94701305db0c39055e19e5af285ef49899c7da5f79825cca8ce60d4bbc2365c?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f94701305db0c39055e19e5af285ef49899c7da5f79825cca8ce60d4bbc2365c?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f94701305db0c39055e19e5af285ef49899c7da5f79825cca8ce60d4bbc2365c?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f94701305db0c39055e19e5af285ef49899c7da5f79825cca8ce60d4bbc2365c?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f94701305db0c39055e19e5af285ef49899c7da5f79825cca8ce60d4bbc2365c?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
              className="grow w-full aspect-[1.39] max-md:mt-2.5 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col pl-8 max-md:pl-5 max-md:max-w-full">
                <div className="text-lg font-bold leading-10 capitalize text-fuchsia-800">
                  Core features
                </div>
                <div className="mt-8 text-5xl font-bold tracking-tighter leading-[60px] text-grey-300">
                  Smart Jackpots that you may love this
                </div>
                <div className="flex self-center gap-5 mt-16 max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8dda235296228636ecbc349ab2b0d213dc955bf92522943afec28ccf4489c278?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dda235296228636ecbc349ab2b0d213dc955bf92522943afec28ccf4489c278?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dda235296228636ecbc349ab2b0d213dc955bf92522943afec28ccf4489c278?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dda235296228636ecbc349ab2b0d213dc955bf92522943afec28ccf4489c278?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dda235296228636ecbc349ab2b0d213dc955bf92522943afec28ccf4489c278?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dda235296228636ecbc349ab2b0d213dc955bf92522943afec28ccf4489c278?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dda235296228636ecbc349ab2b0d213dc955bf92522943afec28ccf4489c278?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dda235296228636ecbc349ab2b0d213dc955bf92522943afec28ccf4489c278?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                    className="self-start aspect-square w-[60px]"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="text-lg font-bold text-grey-300">
                      Smart Features
                    </div>
                    <div className="text-base leading-7 text-gray-700 mt-7">
                      Get your blood tests delivered at let home collect sample
                      from the victory of the managments your blood tests.
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden px-11 py-7 mt-11 fill-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e1f54f8755e4281f34a35efa0e5ae189611c3f11087b93401a80bb6ee2b91612?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f54f8755e4281f34a35efa0e5ae189611c3f11087b93401a80bb6ee2b91612?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f54f8755e4281f34a35efa0e5ae189611c3f11087b93401a80bb6ee2b91612?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f54f8755e4281f34a35efa0e5ae189611c3f11087b93401a80bb6ee2b91612?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f54f8755e4281f34a35efa0e5ae189611c3f11087b93401a80bb6ee2b91612?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f54f8755e4281f34a35efa0e5ae189611c3f11087b93401a80bb6ee2b91612?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f54f8755e4281f34a35efa0e5ae189611c3f11087b93401a80bb6ee2b91612?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f54f8755e4281f34a35efa0e5ae189611c3f11087b93401a80bb6ee2b91612?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                      className="aspect-square w-[60px] max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-10">
                      <div className="text-lg font-bold text-grey-300">
                        Secure Contents
                      </div>
                      <div className="text-base leading-7 text-gray-700 mt-7">
                        Get your blood tests delivered at let home collect
                        sample from the victory of the managments your blood
                        tests.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-36 max-w-full w-[1255px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto text-lg font-bold max-md:mt-10 max-md:max-w-full">
              <div className="text-fuchsia-800 leading-[222%] max-md:max-w-full">
                Behind the design
              </div>
              <div className="mt-7 text-5xl tracking-tighter leading-[60px] text-grey-300 max-md:max-w-full">
                Code that we used to built the website with integrating apps
              </div>
              <div className="mt-12 leading-10 text-grey-300 max-md:mt-10 max-md:max-w-full">
                Get your tests delivered at let home collect sample from the
                victory of the managments that supplies best design system
                guidelines ever. Get your tests delivered at let home collect
                sample.
              </div>
              <div className="self-start justify-center px-4 py-4 mt-12 text-base leading-6 tracking-normal text-white rounded-md whitespace-nowrap bg-slate-900 max-md:mt-10">
                Explore More
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/882e01b98724db2f46bb0fc1c6964e9320dab2b6020f8aa80343d2a707ea05ef?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/882e01b98724db2f46bb0fc1c6964e9320dab2b6020f8aa80343d2a707ea05ef?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/882e01b98724db2f46bb0fc1c6964e9320dab2b6020f8aa80343d2a707ea05ef?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/882e01b98724db2f46bb0fc1c6964e9320dab2b6020f8aa80343d2a707ea05ef?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/882e01b98724db2f46bb0fc1c6964e9320dab2b6020f8aa80343d2a707ea05ef?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/882e01b98724db2f46bb0fc1c6964e9320dab2b6020f8aa80343d2a707ea05ef?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/882e01b98724db2f46bb0fc1c6964e9320dab2b6020f8aa80343d2a707ea05ef?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/882e01b98724db2f46bb0fc1c6964e9320dab2b6020f8aa80343d2a707ea05ef?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
              className="grow w-full aspect-[1.45] max-md:mt-9 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-stretch w-full px-16 pt-12 mt-40 text-lg whitespace-nowrap bg-slate-50 text-grey-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex z-10 flex-col mt-5 mb-0 w-full max-w-[1308px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex flex-col items-center py-px ml-11 max-w-full w-[1150px]">
            <div className="text-3xl font-bold tracking-tighter text-center leading-[54.9px]">
              What the features of product
            </div>
            <div className="mt-5 text-center text-gray-500 leading-[144%]">
              Introducing all screen details
            </div>
            <div className="flex z-10 gap-5 justify-between items-start mt-28 max-w-full font-medium leading-[167%] w-[936px] max-md:flex-wrap max-md:mt-10">
              <div className="flex flex-col flex-1 font-bold">
                <div className="flex self-center gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bd25726a1803f8bbc6e302559c9e1549667cf4c7391c798eba839eb9cba1c32?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                    className="aspect-square fill-slate-900 w-[30px]"
                  />
                  <div className="grow self-start mt-2.5">Budget Overview</div>
                </div>
                <div className="shrink-0 mt-9 rounded-md bg-slate-900 h-[3px]" />
              </div>
              <div className="flex gap-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/276a295c898f3f93c98979ef2f2cfa50048e3a0464d1552634bbce47b85d7485?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="aspect-[0.97] fill-slate-300 w-[30px]"
                />
                <div className="grow self-start mt-2.5">Create & adjust</div>
              </div>
              <div className="flex gap-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee6d6353a86d5459646ca13ceb774a0f23c43fd3935b8846d4c82b28df7192e1?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="aspect-square fill-slate-300 w-[30px]"
                />
                <div className="grow self-start mt-2.5">View Reports</div>
              </div>
              <div className="flex gap-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce9c582f0af1eebdd87716952cb25099fd8f6e913832f4ac894fc4f2bef008d9?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="aspect-[1.15] fill-slate-300 w-[30px]"
                />
                <div className="grow">Create & adjust</div>
              </div>
            </div>
            <div className="self-stretch h-px rounded-md shrink-0 bg-gray-950 max-md:max-w-full" />
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d66d619224d914ab51db9cee3dba3e247a02be82a74f576b7ca409a59e0a2150?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d66d619224d914ab51db9cee3dba3e247a02be82a74f576b7ca409a59e0a2150?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d66d619224d914ab51db9cee3dba3e247a02be82a74f576b7ca409a59e0a2150?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d66d619224d914ab51db9cee3dba3e247a02be82a74f576b7ca409a59e0a2150?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d66d619224d914ab51db9cee3dba3e247a02be82a74f576b7ca409a59e0a2150?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d66d619224d914ab51db9cee3dba3e247a02be82a74f576b7ca409a59e0a2150?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d66d619224d914ab51db9cee3dba3e247a02be82a74f576b7ca409a59e0a2150?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d66d619224d914ab51db9cee3dba3e247a02be82a74f576b7ca409a59e0a2150?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
            className="mt-8 w-full aspect-[1.75] max-md:max-w-full"
          />
        </div>
      </div>
      <div className="mt-72 text-3xl font-bold tracking-tighter text-center whitespace-nowrap leading-[54.9px] text-grey-300 max-md:mt-10">
        What deal suit you perfect
      </div>
      <div className="mt-4 text-lg leading-6 text-center text-gray-500 whitespace-nowrap">
        Meet our pricing plan
      </div>
      <div className="flex overflow-hidden relative flex-col gap-5 justify-between px-5 py-2 mt-14 text-base font-medium tracking-tight leading-6 aspect-[4.95] fill-gray-50 stroke-[1px] stroke-gray-200 text-grey-300 max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c09da72d7178d0c3c3a12313154d98f9918f46e43df36adeb5b1320fc846442?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
          className="absolute inset-0 object-cover size-full"
        />
        <div className="overflow-hidden relative flex-col justify-center px-6 py-4 whitespace-nowrap aspect-[2.92] fill-white max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b19f1ef675a287ae87bfde0218927274dbfdaeeecdcc68c658b6a9b8fe6e2a95?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
            className="absolute inset-0 object-cover size-full"
          />
          Monthly Plan
        </div>
        <div className="relative flex-auto my-auto">Annual Plan</div>
      </div>
      <div className="mt-16 max-w-full w-[992px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full pt-12 pb-px bg-white border border-solid grow rounded-xl border-zinc-200 max-md:mt-7 max-md:max-w-full">
              <div className="flex flex-col mt-2 ml-10 max-w-full text-base leading-7 text-gray-700 w-[321px] max-md:ml-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/63c75a7e835da1408ae9f2d44589000734d2ba54ba48597b7427092ecde9b568?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="aspect-[1.14] w-[73px]"
                />
                <div className="mt-10 text-2xl font-bold tracking-tight text-grey-300">
                  For Team pack
                </div>
                <div className="flex gap-3.5 justify-between mt-12 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6440e6d859a89569d749b99464fcb19169ffd4fa5bebc232a7b9e2de7f7378f4?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                    className="self-start w-5 mt-1 aspect-square fill-teal-400"
                  />
                  <div className="flex-auto">
                    Ultimate access to all course, exercises and assessments
                  </div>
                </div>
                <div className="flex gap-3.5 justify-between mt-9">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c59c92e8d716ef0bda9626884686067bfe5ee2d185ecc7f15dbedfd2c5adf7f4?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                    className="self-start w-5 mt-1 aspect-square fill-teal-400"
                  />
                  <div className="flex-auto">
                    Free acess for all kind of exercise corrections with
                    downloads.
                  </div>
                </div>
                <div className="flex gap-3.5 justify-between mt-9">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7ee7c08fa1bea47af334d1d70ed446c2ed43c8a9a72ccbfbb0ff9443de31b40?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                    className="self-start w-5 mt-1 aspect-square fill-teal-400"
                  />
                  <div className="flex-auto">
                    Total assessment corrections with free download access
                    system
                  </div>
                </div>
                <div className="flex gap-3.5 justify-between mt-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed13b1257bdf2822c869a08bd76012267bbdbc832251081b1675e3c0bbcac6ff?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                    className="self-start w-5 mt-1 aspect-square"
                  />
                  <div className="flex-auto">
                    Unlimited download of courses on the mobile app contents
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-5 px-12 rounded-none py-11 mt-14 bg-gray-50 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col">
                  <div className="text-base leading-7 text-gray-700">
                    Starting from
                  </div>
                  <div className="mt-3 text-2xl font-bold tracking-tight text-fuchsia-800">
                    29.99/<span className="text-2xl text-fuchsia-800">mo</span>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/96016ef9967faa2f59545f6ababaf5be3f85014a48efe5eae45f9077f9fb5c4f?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="my-auto w-5 aspect-[1.18]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-6/12 ml-5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full py-px bg-white border border-solid grow rounded-xl border-zinc-200 max-md:mt-7 max-md:max-w-full">
              <div className="flex z-10 flex-col mt-0 ml-10 max-w-full text-base leading-7 text-gray-700 w-[321px] max-md:ml-2.5">
                <div className="self-start justify-center px-2 py-3 text-sm font-bold leading-7 tracking-normal text-white rounded whitespace-nowrap bg-fuchsia-800">
                  Recommended
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fe012cacdce4750689aaa5f790ba0db777383dedde9ca0d7f120f9a292ca262?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="mt-11 aspect-[1.32] w-[84px] max-md:mt-10"
                />
                <div className="mt-10 text-2xl font-bold tracking-tight text-grey-300">
                  For Organization pack
                </div>
                <div className="flex gap-3.5 justify-between mt-12 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6440e6d859a89569d749b99464fcb19169ffd4fa5bebc232a7b9e2de7f7378f4?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                    className="self-start w-5 mt-1 aspect-square fill-teal-400"
                  />
                  <div className="flex-auto">
                    Ultimate access to all course, exercises and assessments
                  </div>
                </div>
                <div className="flex gap-3.5 justify-between mt-9">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c59c92e8d716ef0bda9626884686067bfe5ee2d185ecc7f15dbedfd2c5adf7f4?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                    className="self-start w-5 mt-1 aspect-square fill-teal-400"
                  />
                  <div className="flex-auto">
                    Free acess for all kind of exercise corrections with
                    downloads.
                  </div>
                </div>
                <div className="flex gap-3.5 justify-between mt-9">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7ee7c08fa1bea47af334d1d70ed446c2ed43c8a9a72ccbfbb0ff9443de31b40?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                    className="self-start w-5 mt-1 aspect-square fill-teal-400"
                  />
                  <div className="flex-auto">
                    Total assessment corrections with free download access
                    system
                  </div>
                </div>
                <div className="flex gap-3.5 justify-between mt-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7ee7c08fa1bea47af334d1d70ed446c2ed43c8a9a72ccbfbb0ff9443de31b40?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                    className="self-start w-5 mt-1 aspect-square fill-teal-400"
                  />
                  <div className="flex-auto">
                    Unlimited download of courses on the mobile app contents
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-5 px-12 rounded-none py-11 mt-14 bg-gray-50 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col">
                  <div className="text-base leading-7 text-gray-700">
                    Starting from
                  </div>
                  <div className="mt-3 text-2xl font-bold tracking-tight text-fuchsia-800">
                    49.99/<span className="text-2xl text-fuchsia-800">mo</span>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/96016ef9967faa2f59545f6ababaf5be3f85014a48efe5eae45f9077f9fb5c4f?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="my-auto w-5 aspect-[1.18]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center self-stretch w-full gap-5 px-5 py-12 bg-gray-100 mt-36 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto basis-0">
          <div className="shrink-0 bg-white rounded-md h-[307px]" />
          <div className="shrink-0 mt-5 bg-white rounded-md h-[252px]" />
        </div>
        <div className="flex flex-col self-stretch my-auto basis-0 max-md:max-w-full">
          <div className="flex flex-col py-8 bg-white rounded-md shadow-2xl px-9 max-md:px-5 max-md:max-w-full">
            <div className="text-base leading-8 text-gray-700">
              I would like to take this oppertunity to thank SA Places for the
              great service rendered to us and in particular Estelle. You got me
              the best place ever in just a few moments after I spoke to you.
            </div>
            <div className="flex self-start gap-3 mt-8 font-medium whitespace-nowrap">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/44ee89ff423ba8b4b4d3cea2e34007b56c299349523368628e60985b29abea8f?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ee89ff423ba8b4b4d3cea2e34007b56c299349523368628e60985b29abea8f?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ee89ff423ba8b4b4d3cea2e34007b56c299349523368628e60985b29abea8f?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ee89ff423ba8b4b4d3cea2e34007b56c299349523368628e60985b29abea8f?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ee89ff423ba8b4b4d3cea2e34007b56c299349523368628e60985b29abea8f?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ee89ff423ba8b4b4d3cea2e34007b56c299349523368628e60985b29abea8f?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ee89ff423ba8b4b4d3cea2e34007b56c299349523368628e60985b29abea8f?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ee89ff423ba8b4b4d3cea2e34007b56c299349523368628e60985b29abea8f?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                className="rounded-full aspect-square w-[45px]"
              />
              <div className="flex flex-col flex-1 my-auto">
                <div className="text-lg leading-7 text-gray-700">
                  Minnie Horn
                </div>
                <div className="mt-3 text-sm leading-7 text-blue-400">
                  @hello.mimmie
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-5 bg-white rounded-md px-9 py-9 max-md:px-5 max-md:max-w-full">
            <div className="text-base leading-8 text-gray-700">
              Many thanks for you kind and efficient service. I have already and
              will definitely continue to recommend your services to others in
              the future.
            </div>
            <div className="flex self-start gap-3 mt-8 font-medium whitespace-nowrap">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fd189c72fa7fa02d3a008184afc5ac688c9b70a6f7bb3a96223611f94df6bbce?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd189c72fa7fa02d3a008184afc5ac688c9b70a6f7bb3a96223611f94df6bbce?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd189c72fa7fa02d3a008184afc5ac688c9b70a6f7bb3a96223611f94df6bbce?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd189c72fa7fa02d3a008184afc5ac688c9b70a6f7bb3a96223611f94df6bbce?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd189c72fa7fa02d3a008184afc5ac688c9b70a6f7bb3a96223611f94df6bbce?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd189c72fa7fa02d3a008184afc5ac688c9b70a6f7bb3a96223611f94df6bbce?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd189c72fa7fa02d3a008184afc5ac688c9b70a6f7bb3a96223611f94df6bbce?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd189c72fa7fa02d3a008184afc5ac688c9b70a6f7bb3a96223611f94df6bbce?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                className="rounded-full aspect-square w-[45px]"
              />
              <div className="flex flex-col flex-1 my-auto">
                <div className="text-lg leading-7 text-gray-700">
                  Merryn Manley
                </div>
                <div className="mt-2 text-sm leading-7 text-blue-400">
                  @merryn.manley
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col self-start flex-1 mt-5 max-md:max-w-full">
          <div className="flex flex-col self-start ml-28 text-center whitespace-nowrap max-md:ml-2.5">
            <div className="text-3xl font-bold tracking-tighter leading-[54.9px] text-grey-300">
              What client say about us
            </div>
            <div className="self-center mt-5 text-lg leading-6 text-gray-500">
              Customer testimonial
            </div>
          </div>
          <div className="mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
                  <div className="flex flex-col py-8 bg-white rounded-md px-9 max-md:px-5 max-md:max-w-full">
                    <div className="text-base leading-8 text-gray-700">
                      I would just like to compliment Estelle Pestana. She has
                      been most professional and gone to great lengths to assist
                      me. Her patience with me as I continuously changed my
                      plans is to be commended. Her service re-affirms why I
                      always choose to book through an agency instead of
                      directly. Thank you
                    </div>
                    <div className="flex self-start gap-3 mt-8 font-medium whitespace-nowrap">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3a9411669da0875dea03b7f2695f0950fa3df65fa4551626c84861a52336a820?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a9411669da0875dea03b7f2695f0950fa3df65fa4551626c84861a52336a820?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a9411669da0875dea03b7f2695f0950fa3df65fa4551626c84861a52336a820?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a9411669da0875dea03b7f2695f0950fa3df65fa4551626c84861a52336a820?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a9411669da0875dea03b7f2695f0950fa3df65fa4551626c84861a52336a820?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a9411669da0875dea03b7f2695f0950fa3df65fa4551626c84861a52336a820?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a9411669da0875dea03b7f2695f0950fa3df65fa4551626c84861a52336a820?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a9411669da0875dea03b7f2695f0950fa3df65fa4551626c84861a52336a820?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                        className="rounded-full aspect-square w-[45px]"
                      />
                      <div className="flex flex-col flex-1 my-auto">
                        <div className="text-lg leading-7 text-gray-700">
                          Veona Watson
                        </div>
                        <div className="mt-3 text-sm leading-7 text-blue-400">
                          @hi.veona
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-5 bg-white rounded-md px-9 py-9 max-md:px-5 max-md:max-w-full">
                    <div className="text-base leading-8 text-gray-700">
                      I have seldom experienced such an efficient help and
                      support like from you! Thank you so much. We will do all
                      the bookings during the next few days and I will revert to
                      you with the end result
                    </div>
                    <div className="flex self-start gap-3 font-medium mt-7 whitespace-nowrap">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9f073df52ddded8a450ba2f34adc13a285e6044b8bf3d9ceb10854ca0d505747?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f073df52ddded8a450ba2f34adc13a285e6044b8bf3d9ceb10854ca0d505747?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f073df52ddded8a450ba2f34adc13a285e6044b8bf3d9ceb10854ca0d505747?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f073df52ddded8a450ba2f34adc13a285e6044b8bf3d9ceb10854ca0d505747?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f073df52ddded8a450ba2f34adc13a285e6044b8bf3d9ceb10854ca0d505747?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f073df52ddded8a450ba2f34adc13a285e6044b8bf3d9ceb10854ca0d505747?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f073df52ddded8a450ba2f34adc13a285e6044b8bf3d9ceb10854ca0d505747?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f073df52ddded8a450ba2f34adc13a285e6044b8bf3d9ceb10854ca0d505747?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                        className="rounded-full aspect-square w-[45px]"
                      />
                      <div className="flex flex-col flex-1 my-auto">
                        <div className="text-lg leading-7 text-gray-700">
                          Paseka Nku
                        </div>
                        <div className="mt-3 text-sm leading-7 text-blue-400">
                          @hey.nku
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-2/5 ml-5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-5 max-md:max-w-full">
                  <div className="flex flex-col py-8 bg-white rounded-md px-9 max-md:px-5 max-md:max-w-full">
                    <div className="text-base leading-8 text-gray-700">
                      Thank you for all your help. Your service was excellent
                      and very FAST.
                    </div>
                    <div className="flex self-start gap-3 mt-8 font-medium whitespace-nowrap">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/021b0fce1c57b820c62f39f806df47b2ab45c6aaf4e3178f6cfd9684aafbd50f?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/021b0fce1c57b820c62f39f806df47b2ab45c6aaf4e3178f6cfd9684aafbd50f?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/021b0fce1c57b820c62f39f806df47b2ab45c6aaf4e3178f6cfd9684aafbd50f?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/021b0fce1c57b820c62f39f806df47b2ab45c6aaf4e3178f6cfd9684aafbd50f?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/021b0fce1c57b820c62f39f806df47b2ab45c6aaf4e3178f6cfd9684aafbd50f?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/021b0fce1c57b820c62f39f806df47b2ab45c6aaf4e3178f6cfd9684aafbd50f?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/021b0fce1c57b820c62f39f806df47b2ab45c6aaf4e3178f6cfd9684aafbd50f?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/021b0fce1c57b820c62f39f806df47b2ab45c6aaf4e3178f6cfd9684aafbd50f?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                        className="rounded-full aspect-square w-[45px]"
                      />
                      <div className="flex flex-col flex-1 my-auto">
                        <div className="text-lg leading-7 text-gray-700">
                          Cherice Justin
                        </div>
                        <div className="mt-3 text-sm leading-7 text-blue-400">
                          @cherice.me
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-5 bg-white rounded-md px-9 py-9 max-md:px-5 max-md:max-w-full">
                    <div className="text-base leading-8 text-gray-700">
                      For our recent trip to S.A. I booked several accommodation
                      thru SA Places. I just wanted to tell you that everything
                      worked out perfectly with all the bookings and also your
                      booking was very quick and professional. I hope I have the
                      opportunity to re-visit South Africa soon, I will then
                      make my bookings with your company again. I will also
                      recommend
                    </div>
                    <div className="flex self-start gap-3 mt-8 font-medium whitespace-nowrap">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f5ac3ea8e9546b4f76d71696e8574b97d9dc467457a5a87356b5440bd4785c09?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5ac3ea8e9546b4f76d71696e8574b97d9dc467457a5a87356b5440bd4785c09?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5ac3ea8e9546b4f76d71696e8574b97d9dc467457a5a87356b5440bd4785c09?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5ac3ea8e9546b4f76d71696e8574b97d9dc467457a5a87356b5440bd4785c09?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5ac3ea8e9546b4f76d71696e8574b97d9dc467457a5a87356b5440bd4785c09?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5ac3ea8e9546b4f76d71696e8574b97d9dc467457a5a87356b5440bd4785c09?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5ac3ea8e9546b4f76d71696e8574b97d9dc467457a5a87356b5440bd4785c09?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5ac3ea8e9546b4f76d71696e8574b97d9dc467457a5a87356b5440bd4785c09?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                        className="rounded-full aspect-square w-[45px]"
                      />
                      <div className="flex flex-col flex-1 my-auto">
                        <div className="text-lg leading-7 text-gray-700">
                          Thais Carballal
                        </div>
                        <div className="mt-3 text-sm leading-7 text-blue-400">
                          @myself.thais
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-5">
                  <div className="flex flex-col w-full bg-white rounded-md py-9 pl-9 max-md:pl-5">
                    <div className="text-base leading-8 text-gray-700">
                      Many thanks for you kind and efficient service. I have
                      already and will definitely continue to recommend your
                      services to others in the future. Wishing you all a
                    </div>
                    <div className="flex justify-between gap-3 mt-8 font-medium">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/623a2ae53a0022d7ec9b8fc102b2682dea950842e0c193898ab4c70ae309ec36?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/623a2ae53a0022d7ec9b8fc102b2682dea950842e0c193898ab4c70ae309ec36?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/623a2ae53a0022d7ec9b8fc102b2682dea950842e0c193898ab4c70ae309ec36?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/623a2ae53a0022d7ec9b8fc102b2682dea950842e0c193898ab4c70ae309ec36?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/623a2ae53a0022d7ec9b8fc102b2682dea950842e0c193898ab4c70ae309ec36?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/623a2ae53a0022d7ec9b8fc102b2682dea950842e0c193898ab4c70ae309ec36?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/623a2ae53a0022d7ec9b8fc102b2682dea950842e0c193898ab4c70ae309ec36?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/623a2ae53a0022d7ec9b8fc102b2682dea950842e0c193898ab4c70ae309ec36?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                        className="rounded-full aspect-square w-[45px]"
                      />
                      <div className="flex flex-col flex-1 my-auto">
                        <div className="text-lg leading-7 text-gray-700">
                          Minnie Horn
                        </div>
                        <div className="mt-3 text-sm leading-7 text-blue-400">
                          @hello.mimmie
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full pr-px mt-5 bg-white rounded-md py-9 pl-9 max-md:pl-5">
                    <div className="text-base leading-8 text-gray-700">
                      Baie dankie en weereens dankie vir jou moeite. Ek moet net
                      se - as ons iewers moet slaap en ek kan nie deur SA Places
                      boek nie - dan los ek dit liewer!
                    </div>
                    <div className="flex justify-between gap-3 font-medium mt-9 whitespace-nowrap">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b7c254bb94978046e7a24b8716ec70f3a24fc54b6ff5db62a2791df2a96bca2b?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7c254bb94978046e7a24b8716ec70f3a24fc54b6ff5db62a2791df2a96bca2b?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7c254bb94978046e7a24b8716ec70f3a24fc54b6ff5db62a2791df2a96bca2b?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7c254bb94978046e7a24b8716ec70f3a24fc54b6ff5db62a2791df2a96bca2b?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7c254bb94978046e7a24b8716ec70f3a24fc54b6ff5db62a2791df2a96bca2b?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7c254bb94978046e7a24b8716ec70f3a24fc54b6ff5db62a2791df2a96bca2b?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7c254bb94978046e7a24b8716ec70f3a24fc54b6ff5db62a2791df2a96bca2b?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7c254bb94978046e7a24b8716ec70f3a24fc54b6ff5db62a2791df2a96bca2b?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                        className="rounded-full aspect-square w-[45px]"
                      />
                      <div className="flex flex-col flex-1 my-auto">
                        <div className="text-lg leading-7 text-gray-700">
                          Veona Watson
                        </div>
                        <div className="mt-3.5 text-sm leading-7 text-blue-400">
                          @me.veona
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 text-3xl font-bold tracking-tighter text-center whitespace-nowrap leading-[54.9px] text-grey-300 max-md:mt-10">
        Popular blog post we updated
      </div>
      <div className="mt-5 text-lg leading-6 text-center text-gray-500 whitespace-nowrap">
        Updete newsfeed blog
      </div>
      <div className="px-5 mt-20 max-w-full w-[1199px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-base leading-8 text-grey-300 max-md:mt-9">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/46f5be4df82b51153b086beb7a84917ca199f530c96382420b4b2b2605c206a1?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f5be4df82b51153b086beb7a84917ca199f530c96382420b4b2b2605c206a1?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f5be4df82b51153b086beb7a84917ca199f530c96382420b4b2b2605c206a1?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f5be4df82b51153b086beb7a84917ca199f530c96382420b4b2b2605c206a1?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f5be4df82b51153b086beb7a84917ca199f530c96382420b4b2b2605c206a1?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f5be4df82b51153b086beb7a84917ca199f530c96382420b4b2b2605c206a1?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f5be4df82b51153b086beb7a84917ca199f530c96382420b4b2b2605c206a1?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f5be4df82b51153b086beb7a84917ca199f530c96382420b4b2b2605c206a1?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                className="w-full aspect-[1.39]"
              />
              <div className="text-lg font-bold tracking-normal mt-7">
                How to work with prototype design with adobe xd featuring tools
              </div>
              <div className="mt-7">
                The 2019 Innovation by Design Awards honor the designers and
                businesses solving the problems of today and tomorrow. It is one
                of the most sought-after design
              </div>
              <div className="flex gap-3 self-start mt-6 font-medium text-blue-500 leading-[262.5%]">
                <div>Learn more</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9495836d863304ce9273e2ca2eda7f1871c144888a2736aade87ededd13d029?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="self-start w-1.5 aspect-[0.6] fill-blue-400"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-base font-medium grow text-grey-300 max-md:mt-9">
              <div className="justify-center text-xl leading-9 tracking-normal bg-gray-100 rounded-md px-7 py-9 max-md:px-5">
                Antibias receives honorable gift mention at Fast Company’s most
                Innovation by Design Awards
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fba033bdea000b6ac20604ecb881e58c9536dd570c76840325e816c8de64b950?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fba033bdea000b6ac20604ecb881e58c9536dd570c76840325e816c8de64b950?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fba033bdea000b6ac20604ecb881e58c9536dd570c76840325e816c8de64b950?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fba033bdea000b6ac20604ecb881e58c9536dd570c76840325e816c8de64b950?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fba033bdea000b6ac20604ecb881e58c9536dd570c76840325e816c8de64b950?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fba033bdea000b6ac20604ecb881e58c9536dd570c76840325e816c8de64b950?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fba033bdea000b6ac20604ecb881e58c9536dd570c76840325e816c8de64b950?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fba033bdea000b6ac20604ecb881e58c9536dd570c76840325e816c8de64b950?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                className="mt-8 w-full aspect-[2.22]"
              />
              <div className="mt-8 text-lg font-bold leading-9 tracking-normal">
                Multiple arbard prototype with Figma
              </div>
              <div className="mt-8 leading-8">
                Beyond launched antibias, a Chrome extension that replaces
                LinkedIn profile photos
              </div>
              <div className="flex gap-3 self-start mt-6 text-blue-500 leading-[262.5%]">
                <div>Learn more</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9495836d863304ce9273e2ca2eda7f1871c144888a2736aade87ededd13d029?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="self-start w-1.5 aspect-[0.6] fill-blue-400"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-lg font-bold leading-8 tracking-normal text-white max-md:mt-9">
              <div className="overflow-hidden relative flex-col pt-40 pr-12 pb-6 pl-5 w-full aspect-[1.63] max-md:pt-10 max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e455c09a98f24aa51feae347c42b329f56c01b91650e197a2d0696ab8fc8b9db?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e455c09a98f24aa51feae347c42b329f56c01b91650e197a2d0696ab8fc8b9db?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e455c09a98f24aa51feae347c42b329f56c01b91650e197a2d0696ab8fc8b9db?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e455c09a98f24aa51feae347c42b329f56c01b91650e197a2d0696ab8fc8b9db?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e455c09a98f24aa51feae347c42b329f56c01b91650e197a2d0696ab8fc8b9db?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e455c09a98f24aa51feae347c42b329f56c01b91650e197a2d0696ab8fc8b9db?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e455c09a98f24aa51feae347c42b329f56c01b91650e197a2d0696ab8fc8b9db?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e455c09a98f24aa51feae347c42b329f56c01b91650e197a2d0696ab8fc8b9db?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="absolute inset-0 object-cover size-full"
                />
                Multiple task wireframing with team management perform better
              </div>
              <div className="overflow-hidden relative flex-col pt-40 pr-14 pb-6 pl-5 mt-8 w-full aspect-[1.63] max-md:pt-10 max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a898c9873d004951647659b73f47c68407572cc852c1e65c15b404638bc7bc34?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a898c9873d004951647659b73f47c68407572cc852c1e65c15b404638bc7bc34?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a898c9873d004951647659b73f47c68407572cc852c1e65c15b404638bc7bc34?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a898c9873d004951647659b73f47c68407572cc852c1e65c15b404638bc7bc34?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a898c9873d004951647659b73f47c68407572cc852c1e65c15b404638bc7bc34?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a898c9873d004951647659b73f47c68407572cc852c1e65c15b404638bc7bc34?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a898c9873d004951647659b73f47c68407572cc852c1e65c15b404638bc7bc34?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a898c9873d004951647659b73f47c68407572cc852c1e65c15b404638bc7bc34?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="absolute inset-0 object-cover size-full"
                />
                Team presentation with latest user interface & experience reach
                more
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-44 text-3xl font-bold tracking-tighter text-center whitespace-nowrap leading-[54.9px] text-grey-300 max-md:mt-10">
        Frequently Ask Question
      </div>
      <div className="mt-5 text-lg leading-6 text-center text-gray-500 whitespace-nowrap">
        Ask your question and meet
      </div>
      <div className="mt-20 max-w-full w-[1194px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-5 mt-5 text-base font-bold max-md:mt-10">
              <div className="text-2xl leading-10 tracking-tighter text-grey-300">
                Do you have any quesiton? Please
                <br />
                ask here we ready to support
              </div>
              <div className="mt-6 leading-8 text-gray-700">
                If your question is not list here, please feel free to make a
                manual support.
              </div>
              <div className="justify-center px-5 py-4 mt-10 tracking-normal text-white rounded-md bg-slate-900 leading-[150%]">
                Ask your Question
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="flex justify-between gap-5 px-8 text-lg font-medium leading-9 tracking-normal bg-white border border-gray-100 border-solid rounded-md py-7 text-grey-300 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <div className="flex-auto">
                  How much does it cost to be a credit card merchant?
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/640d78dd11d8f7d0e9589858b06ed80e2d212c49564bc10e45e9857f9f6c4a1a?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="aspect-[0.6] fill-slate-900 w-[9px]"
                />
              </div>
              <div className="flex flex-col px-8 mt-2 bg-white border border-gray-100 border-solid rounded-md py-9 max-md:px-5 max-md:max-w-full">
                <div className="flex justify-between gap-5 text-lg font-medium leading-9 tracking-normal text-grey-300 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-auto">
                    How can I open a merchant account?
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4997836c5d5eebb9e293c0f2df4d2f4f866fe4dc5377a433b21f32012e60873c?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                    className="self-start aspect-[1.67] fill-slate-900 w-[15px]"
                  />
                </div>
                <div className="text-base leading-8 text-gray-700 mt-9 max-md:max-w-full">
                  For our recent trip to S.A. I booked several accommodation
                  thru SA Places. I just wanted to tell you that everything
                  worked out perfectly with all the bookings and also your
                  booking was very quick and professional. I hope I have the
                  opportunity to re-visit South Africa soon, I will then make my
                  bookings with your company again. I will also recommend
                </div>
              </div>
              <div className="flex justify-between gap-5 px-8 mt-2 text-lg font-medium leading-9 tracking-normal bg-white border border-gray-100 border-solid rounded-md py-7 text-grey-300 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <div className="flex-auto">
                  How long does the application take?
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/640d78dd11d8f7d0e9589858b06ed80e2d212c49564bc10e45e9857f9f6c4a1a?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                  className="self-start aspect-[0.6] fill-slate-900 w-[9px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between px-8 py-7 mt-2 ml-52 max-w-full text-lg font-medium tracking-normal leading-9 bg-white rounded-md border border-gray-100 border-solid text-grey-300 w-[792px] max-md:flex-wrap max-md:px-5">
        <div className="flex-auto">
          Can I make payment outside of Hong Kong?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/640d78dd11d8f7d0e9589858b06ed80e2d212c49564bc10e45e9857f9f6c4a1a?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
          className="self-start aspect-[0.6] fill-slate-900 w-[9px]"
        />
      </div>
      <div className="flex gap-5 justify-between px-8 py-7 mt-2 ml-52 max-w-full text-lg font-medium tracking-normal leading-9 bg-white rounded-md border border-gray-100 border-solid text-grey-300 w-[792px] max-md:flex-wrap max-md:px-5">
        <div className="flex-auto">How do I get the payment complete?</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/640d78dd11d8f7d0e9589858b06ed80e2d212c49564bc10e45e9857f9f6c4a1a?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
          className="self-start aspect-[0.6] fill-slate-900 w-[9px]"
        />
      </div>
      <div className="flex flex-col items-center self-stretch w-full px-16 pt-12 pb-8 mt-36 bg-slate-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center mt-20 max-w-full w-[1290px] max-md:mt-10">
          <div className="text-4xl tracking-tight text-center text-white leading-[50.04px] max-md:max-w-full">
            Subscribe to get notified about update
          </div>
          <div className="mt-7 text-base tracking-tight text-center text-white leading-[50px] max-md:max-w-full">
            By subscribing with your mail, you will accept our privacy policy
          </div>
          <div className="flex gap-4 mt-16 max-w-full whitespace-nowrap w-[555px] max-md:flex-wrap max-md:mt-10">
            <div className="grow justify-center items-start py-6 pr-16 pl-8 text-base text-white bg-white rounded-md leading-[50px] max-md:px-5">
              Enter your email
            </div>
            <div className="justify-center px-7 py-6 text-lg font-medium tracking-tight bg-white rounded leading-[50.04px] text-slate-950 max-md:px-5">
              Subscribe us
            </div>
          </div>
          <div className="flex self-stretch justify-between w-full gap-5 mt-40 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-3.5 justify-between whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0affcd774f76496a6790d095c10dced8c0d8fcf2ce4fd5d9a035608e1aeaa99?apiKey=7d6cd1057cee4359a8b6e7232c5184c9&"
                className="aspect-[0.73] w-[27px]"
              />
              <div className="self-start flex-auto mt-4 text-xl font-bold leading-6">
                StartupLanding
              </div>
              <div className="my-auto text-sm grow">
                Copyright by 2019 Redq, Inc
              </div>
            </div>
            <div className="self-start flex-auto mt-4 text-base leading-8 text-right">
              Home Adversite Supports Marketing FAQ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
