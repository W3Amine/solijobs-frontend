import React from "react";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import AxiosClient from "../../../../API/AxiosClient";
import { useAuthContext } from "../../../../Contexts/AuthContext";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";

import FilePondPluginPdfPreview from "filepond-plugin-pdf-preview";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginFileValidateType, FilePondPluginFileValidateSize, FilePondPluginPdfPreview);

export default function CVManager() {
  const { token, user, setUser } = useAuthContext();

  return (
    <div className="panel panel-default">
      <div className="panel-heading wt-panel-heading p-a20">
        <h4 className="panel-tittle m-a0">Upload Your CV</h4>
      </div>
      <div className="col-md-6 my-2">
        <FilePond
          name="CandidateCV"
          allowPdfPreview={true}
          pdfPreviewHeight={540}
          server={{
            process: {
              url: AxiosClient.defaults.baseURL + "/Candidate/UploadCv",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          }}
          labelIedle='Drag & Drop  your CV or <span class="filepond--label-action">Browse</span>'
          instantUpload={false}
          stylePanelLayout="compact"
          imagePreviewHeight={400}
          allowMultiple={false}
          acceptedFileTypes={["application/pdf"]}
          maxFileSize="10MB"
          styleButtonRemoveItemPosition="left bottom"
          styleButtonProcessItemPosition="right bottom"
          credits={false}
        />
      </div>
    </div>
  );
}
