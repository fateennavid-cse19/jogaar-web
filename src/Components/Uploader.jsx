import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Uploader({ token, handleData }) {
  const [selectedFile, setSelectedFile] = useState(null)
  const [uploadedFile, setUploadedFile] = useState(null)

  const navigate = useNavigate()

  const handleChange = event => {
    setSelectedFile(event.target.files[0])
  }

  const handleSubmit = async event => {
    event.preventDefault()

    // <PSA>
    const formData = new FormData()
    // *** snippet from backend ***
    // async def upload_image(
    //     file: UploadFile = File(),
    //     ^^^^--------------------------------------------- note the parameter name from this handler
    // ...
    formData.append("file", selectedFile, selectedFile.name)
    //               ^^^^----------------------------------- upload will fail if these two don't match
    // </PSA>

    const requestOptions = {
      // https://muffinman.io/blog/uploading-files-using-fetch-multipart-form-data/
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }

    let resp = await fetch("http://127.0.0.1:8000/images", requestOptions)
    if (!resp.ok) {
      alert("Something went wrong. Try logging in again.")
      navigate("/login")
    }

    let data = await resp.json()
    setUploadedFile(data)
    handleData(data)
  }

  const show_image = () => {
    // console.log(uploadedFile)
    return uploadedFile?.location ? (
      <img
        style={{ maxHeight: 420, maxWidth: "100%" }}
        src={`http://127.0.0.1:8000/${uploadedFile?.location}`}
        alt="uploaded file"
      />
    ) : (
      <></>
    )
  }

  return (
    <>
      <form>
        {show_image()}

        <fieldset>
          <input onChange={handleChange} type="file" accept=".jpeg,.png,.jpg" />
        </fieldset>
        <button onClick={handleSubmit}>upload</button>
      </form>
    </>
  )
}
