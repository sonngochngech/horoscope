import PDFMerger from 'pdf-merger-js';

var merger = new PDFMerger();

(async () => {
  await merger.add('./data/1.pdf');  
  await merger.add('./data/2.pdf');  
  await merger.add('./data/3.pdf');  
  await merger.add('./data/4.pdf');  
  await merger.add('./data/5.pdf');  
  await merger.add('./data/6.pdf');  
  await merger.add('./data/7.pdf');  
  await merger.add('./data/8.pdf');  
  await merger.add('./data/9.pdf');  
  await merger.add('./data/10.pdf');  
  await merger.add('./data/11.pdf');  
  await merger.add('./data/12.pdf');  
  await merger.add('./data/13.pdf');  
  
  // Set metadata
//   await merger.setMetadata({
//     producer: "pdf-merger-js based script",
//     author: "John Doe",
//     creator: "John Doe",
//     title: "My live as John Doe"
//   });
  await merger.save('./data/merged.pdf'); 
})();