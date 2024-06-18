
// This is SVG (scalable vector graphics) of patient icon 
// SVG's does not pixelate even the zoom is infinite
const PatientSVG = () => {
  return (
    <svg
          className="me-3"
          id="Layer_1"
          style={{
            width: "2em",
            borderRadius: "10%",
          }}
          version="1.1"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          {/* Background */}
          <rect width="100%" height="100%" fill="#6d5dd1" />

          {/* Icon */}
          <path
            d="M18,19v-2c0.45-0.223,1.737-1.755,1.872-2.952c0.354-0.027,0.91-0.352,1.074-1.635c0.088-0.689-0.262-1.076-0.474-1.198  c0,0,0.528-1.003,0.528-2.214c0-2.428-0.953-4.5-3-4.5c0,0-0.711-1.5-3-1.5c-4.242,0-6,2.721-6,6c0,1.104,0.528,2.214,0.528,2.214  c-0.212,0.122-0.562,0.51-0.474,1.198c0.164,1.283,0.72,1.608,1.074,1.635C10.263,15.245,11.55,16.777,12,17v2c-1,3-9,1-9,8h24  C27,20,19,22,18,19z"
            fill="#FFFFFF"
          />
        </svg>
  )
}

export default PatientSVG