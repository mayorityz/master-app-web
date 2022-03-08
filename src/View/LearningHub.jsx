import React, { useState, useEffect } from 'react'
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'
import BreadCrumb from '../Component/BreadCrumb'
import APIQUERY from '../Utils/api'

export default function LearningHub({ title, crumb }) {
  const [title_, setTitle] = useState('')
  const [type, setType] = useState('')
  const [link, setLink] = useState('')
  const [description, setDesc] = useState('')

  const [allData, setAllData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [showUploaded, setShowUpload] = useState(false)
  const [uploadOption, setUploadOption] = useState('')

  const [notification, setNotification] = useState('')

  let uploadViaFileSystem = async (e) => {
    e.preventDefault()
    setNotification('Uploading Resource!!!')
    let data = { title: title_, type, link, description }
    await APIQUERY('/learninghub/new-entry', 'POST', data)
    setNotification('Uploaded Successfully!!!')
  }

  let uploadViaCloudinary = async (image_path) => {
    setNotification('Uploading Resource!!!')
    // if (title_ === '' || type === '' || link === '' || description === '') {
    //   // show error message
    //   setNotification('All Fields Must Be Filled To Submit Resource!')
    //   return
    // }
    let data = { title: title_, type, link: image_path, description }
    await APIQUERY('/learninghub/new-entry', 'POST', data)
    setNotification('Uploaded Successfully!!!')
    window.location = '/learning'
  }

  const allResources = async () => {
    let resources = await APIQUERY('/learninghub/resources', 'GET')
    if (resources.status === 200) setAllData(resources.data)

    setLoading(false)
  }

  const deleteResource = async (id) => {
    setLoading(true)
    let resources = await APIQUERY('/learninghub/delete-resource', 'POST', {
      id,
    })
    console.log(resources)
    if (resources.status === 200) window.location = '/learning'
    setLoading(false)
    window.location = '/learning'
  }

  useEffect(() => {
    allResources()
  }, [])

  const selectCategory = ({ target: { value } }) => {
    setUploadOption(value)
    if (value === 'pdf') setShowUpload(true)
    else {
      setShowUpload(true)
    }
    setType(value)
  }

  return (
    <div>
      <BreadCrumb title={title} crumb={crumb} />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            {isLoading && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 400,
                  width: '100%',
                  backgroundColor: '#fff',
                }}
              >
                <p>Fetching Records</p>
              </div>
            )}
            <div class="card">
              <div class="card-header">Learning Materials</div>
              <div class="card-body">
                {/* <h5 class="card-title">Special title treatment</h5> */}
                <table class="table table-hover table-responsive">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Type</th>
                      <th>Downloads</th>
                      <th>Date Uploaded</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allData.map((da) => (
                      <tr>
                        <td>{da.title}</td>
                        <td>{da.type}</td>
                        <td>0</td>
                        <td>{da.createdAt}</td>
                        <td>
                          <button
                            class="btn btn-sm btn-danger"
                            onClick={() => deleteResource(da._id)}
                          >
                            delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <div class="card-header">Create New Resource</div>
              <div class="card-body">
                <form action="" onSubmit={uploadViaFileSystem}>
                  <div class="form-group">
                    <label for="">Enter Resource Title</label>
                    <input
                      type="text"
                      placeholder="Title"
                      class="form-control"
                      value={title_}
                      required
                      onChange={({ target: { value } }) => setTitle(value)}
                    />
                  </div>

                  <div class="form-group">
                    <label for="">Select Resource Category</label>

                    <select
                      name=""
                      id=""
                      class="form-control"
                      required
                      value={type}
                      onChange={selectCategory}
                    >
                      <option value="">-- Select --</option>
                      <option value="youtube">Youtube</option>
                      <option value="pdf">PDF</option>
                      <option value="video">Video</option>
                      <option value="audio">Audio</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="">Type Resource Description</label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="6"
                      class="form-control"
                      placeholder="Start Typing Here!"
                      onChange={({ target: { value } }) => setDesc(value)}
                      value={description}
                      required
                    ></textarea>
                  </div>
                  {/* conditional upload!!! */}
                  <div style={{ display: showUploaded ? 'block' : 'none' }}>
                    {uploadOption !== 'youtube' && (
                      <div class="form-group">
                        <label for="">Upload Resource</label>
                        <>
                          <WidgetLoader />
                          <Widget
                            sources={['local']}
                            resourceType={'auto'}
                            cloudName={'ifarms-app'}
                            uploadPreset={'hvolystx'}
                            buttonText={'Click To Upload!'}
                            style={{
                              color: 'white',
                              border: 'none',
                              width: '220px',
                              backgroundColor: 'green',
                              borderRadius: '4px',
                              height: '45px',
                              display: 'block',
                            }}
                            cropping={false}
                            autoClose={false}
                            onSuccess={(result) =>
                              uploadViaCloudinary(result.info.secure_url)
                            }
                            onFailure={(e) => console.log('failed', e)}
                            logging={false}
                            customPublicId={'sample'}
                            use_filename={false}
                            widgetStyles={{
                              palette: {
                                window: '#737373',
                                windowBorder: '#FFFFFF',
                                tabIcon: '#FF9600',
                                menuIcons: '#D7D7D8',
                                textDark: '#DEDEDE',
                                textLight: '#FFFFFF',
                                link: '#0078FF',
                                action: '#FF620C',
                                inactiveTabIcon: '#B3B3B3',
                                error: '#F44235',
                                inProgress: '#0078FF',
                                complete: '#20B832',
                                sourceBg: '#909090',
                              },
                              fonts: {
                                default: null,
                                "'Fira Sans', sans-serif": {
                                  url:
                                    'https://fonts.googleapis.com/css?family=Fira+Sans',
                                  active: true,
                                },
                              },
                            }} // ability to customise the style of the widget uploader
                            destroy={true} // will destroy the widget on completion
                          />
                        </>
                      </div>
                    )}

                    {uploadOption === 'youtube' && (
                      <div class="form-group">
                        <label for="">Enter URL Link</label>
                        <input
                          type="text"
                          placeholder="Enter Youtube Link"
                          class="form-control"
                          required
                          value={link}
                          onChange={({ target: { value } }) => setLink(value)}
                        />
                      </div>
                    )}
                  </div>
                  {notification && (
                    <div className="alert alert-primary text-center">
                      {notification}
                    </div>
                  )}
                  {uploadOption === 'youtube' && (
                    <button class="btn btn-lg btn-success">Submit Now</button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
