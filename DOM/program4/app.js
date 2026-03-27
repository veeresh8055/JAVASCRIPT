let body = document.body;
body.style.backgroundColor = "#161616";
body.style.color = "#fdfdfd"

let h1 = document.createElement('h1');
h1.textContent="Heading H!";
body.appendChild(h1);

let p = document.createElement('p');
p.textContent = "This is a paragraph "
body.appendChild(p);

let i = document.createElement('i');
i.textContent = "italic font";
i.style.color = '#bdfad1'
p.append(i);
