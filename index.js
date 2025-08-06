

async function getNasaData() {
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key='APIキー名'`)
  const data = await response.json()
  //console 上で data を表示する
  console.log(data)

  console.log(data.date)
  var date=data.date;
  var image_url=data.url
  var explanation=data.explanation
  const object=document.getElementById('date')
  object.innerText=date
  const image_object=document.getElementById('image')
  image_object.setAttribute('src', image_url);
  const text_object=document.getElementById('text')
  text_object.innerText=explanation;
}
getNasaData();