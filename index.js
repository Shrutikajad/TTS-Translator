const voiceSelect= document.querySelector('#voiceSelect')
const playButton= document.querySelector('#playButton')
const textInput= document.querySelector('#textarea')
const languageSelect =document.querySelector('#languangeSelect')

const languages=[
    {code:'en' , name:'English' },
    {code:'mr' , name:'Marathi' },
    {code:'es' , name:'Spanish' },
    {code:'fr' , name:'French' },
    {code:'de' , name:'German' },
    {code:'it' , name:'Italian' },
    {code:'ja' , name:'Japanese' },
]

languages.forEach((code,name)=>{
    const option = document.createElement('option')
    option.value=code;
    option.text
})

let voices=[]

function loadVoices() {
  voices = speechSynthesis.getVoices();
 if(voiceSelect){
    voiceSelect.innerHTML = voices
      .map((voice, index) => `<option value="${index}">${voice.name} (${voice.lang})</option>`)
      .join('');
 }
}

speechSynthesis.onvoiceschanged=loadVoices;
loadVoices()

playButton.addEventListener('click',()=>{
    const utterance = new SpeechSynthesisUtterance(textInput.value)
    const selectedVoice = voices [voiceSelect.value]
    if(selectedVoice)utterance.voice=selectedVoice
    speechSynthesis.speak(utterance)
})

