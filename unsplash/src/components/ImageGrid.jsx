import React from "react";
import useFetch from "../hooks/useFetch";
import { ImageList, ImageListItem, Skeleton } from "@mui/material";
import RedButton from "./RedButton";
import useWindowSize from "../hooks/useWindowSize";
import useApp from "../hooks/useApp";

const ImageGrid = () => {
  const { data, error } = useFetch();
  const { setOpenDeletePhoto, loading } = useApp();
  const { isSm, isMd, isLg } = useWindowSize();

  const array = [1, 2, 3];

  return (
    <ImageList
      variant="masonry"
      cols={isSm ? 1 : isMd ? 2 : isLg ? 3 : 3}
      gap={32}
      className="h-full overflow-hidden mt-16"
    >
      {data ? (
        data.map((image) => (
          <ImageListItem
            key={image.id}
            className="relative rounded-xl cursor-pointer"
          >
            <img
              src={image.img_link}
              alt={image.img_label}
              loading="lazy"
              className="rounded-xl"
            />

            <div className="absolute top-0 left-0 w-full h-full px-4 rounded-xl bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 ">
              <RedButton
                text="Delete"
                onClick={() => setOpenDeletePhoto(true)}
                styles="absolute top-4 right-4"
              />

              <p className="absolute bottom-4 w-full font-medium text-lg text-white">
                {image.img_label}
              </p>
            </div>
          </ImageListItem>
        ))
      ) : (
        <div>
          {array.map((idx) => {
            return (
              <ImageListItem key={idx}>
                <Skeleton
                  variant="rectangular"
                  height={800}
                  className="w-full h-48 rounded-xl"
                />
              </ImageListItem>
            );
          })}
        </div>
      )}
    </ImageList>
  );
};

export default ImageGrid;
