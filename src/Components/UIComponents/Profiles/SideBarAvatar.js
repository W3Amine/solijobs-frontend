import React from "react";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import AxiosClient from "../../../API/AxiosClient";
import { useAuthContext } from "../../../Contexts/AuthContext";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import "filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
// import "filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// import FilePondPluginImageCrop from "filepond-plugin-image-crop";
// import FilePondPluginImageEdit from "filepond-plugin-image-edit";
// import FilePondPluginImageResize from "filepond-plugin-image-resize";
// import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFilePoster from "filepond-plugin-file-poster";
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType,
  FilePondPluginFileValidateSize,
  FilePondPluginFilePoster
  //   FilePondPluginImageCrop,
  //   FilePondPluginImageEdit,
  //   FilePondPluginImageResize,
  //   FilePondPluginImageTransform,
);

export default function SideBarAvatar() {
  const { token } = useAuthContext();
  var files = [
    {
      options: {
        type: "input",
        file: {
          name: "profile",
        },
        // pass poster property
        metadata: {
          poster: "https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg",
        },
      },
    },
  ];
  return (
    // <div className="candidate-profile-pic">
    //   <img src="https://i.ibb.co/748qDqm/company.jpg" alt="avatar" />
    //   <div className="upload-btn-wrapper">
    //     <div id="upload-image-grid" />
    //     <button className="site-button button-sm">Upload Photo</button>
    //     <input type="file" name="myfile" id="file-uploader" accept=".jpg, .jpeg, .png" />
    //   </div>
    // </div>

    <FilePond
      files={files}
      name="ProfileAvatar"
      //   server={AxiosClient.defaults.baseURL + "/profileImage"}
      server={{
        process: {
          url: AxiosClient.defaults.baseURL + "/profileImage",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      }}
      instantUpload={false}
      stylePanelLayout="compact"
      imagePreviewHeight={170}
      allowMultiple={false}
      acceptedFileTypes={["image/*"]}
      maxFileSize="2MB"
      styleButtonRemoveItemPosition="left bottom"
      styleButtonProcessItemPosition="right bottom"
      credits={false}
      allowFilePoster={true}
      //   imageCropAspectRatio="1:1"
      //   imageResizeTargetWidth={200}
      //   imageResizeTargetHeight={200}
      //   styleLoadIndicatorPosition="center bottom"
      //   styleProgressIndicatorPosition="right bottom"
      //   allowImageEdit={true}
      //   imageCropAspectRatio={null}
      //   allowImageCrop={true}
      //   labelIedle='Drag & Drop lol xd your files or <span class="filepond--label-action">Browse</span>'
    />
  );
}
