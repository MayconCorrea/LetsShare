$(document).ready(function () {

	$('.star').on('click', function () {
      $(this).toggleClass('star-checked');
    });

    $('.ckbox label').on('click', function () {
      $(this).parents('tr').toggleClass('selected');
    });

    $('.btn-filter').on('click', function () {
      var $target = $(this).data('target');
      if ($target != 'all') {
        $('.table tr').css('display', 'none');
        $('.table tr[data-status="' + $target + '"]').fadeIn('slow');
      } else {
        $('.table tr').css('display', 'none').fadeIn('slow');
      }
    });

});
const tbody = document.querySelector('#tbody');

let livros = '';
window.onload = async () => {
  tbody.innerHTML = '';
  // livros = await fetch('http://localhost:3000/livros')
  livros = await fetch('https://api-letshare.herokuapp.com/livros')
    .then(resp => resp.json())

  // buscar livros dos usuários
  // fetch('http://localhost:3000/livros?email=mdctuning@gmail.com').then(resp => resp.json())

  createItens();
}

const createItens = () => {
  livros.map( value => {
    const tr = document.createElement('tr');
    tr.setAttribute('data-status', value.status ? value.status : "sem nada")
    
    const tdCheckbox = document.createElement('td');

    const indisponivel = document.createElement('a')
    indisponivel.setAttribute('href', 'javascript:;')
    indisponivel.setAttribute('class', 'star')

    const iconInd = document.createElement('i')
    iconInd.setAttribute('class', 'glyphicon glyphicon-time')

    const tdStar = document.createElement('td');
    
    const star = document.createElement('a')
    star.setAttribute('href', 'javascript:;')
    star.setAttribute('class', 'star')

    const icon = document.createElement('i')
    icon.setAttribute('class', 'glyphicon glyphicon-star')

    const tdBook = document.createElement('td');
    
    const divMedia = document.createElement('div')
    divMedia.setAttribute('class', 'media')

    const divMediaBody = document.createElement('div')
    divMediaBody.setAttribute('class', 'media-body')

    const title = document.createElement('h4')
    title.setAttribute('class', 'title')
    title.innerHTML = value.title
    
    const span = document.createElement('span')
    span.setAttribute('class', value.status ? `pull-right ${value.status}` : "")
    span.innerHTML = value.status ? `(${value.status})` : ""  
    
    const paragAuthor = document.createElement('p')
    paragAuthor.setAttribute('class', 'summary')
    paragAuthor.innerHTML = value.authors;
    
    if(value.status == 'Quero ler'){
      const spanWhats = document.createElement('span')
      spanWhats.setAttribute('class', 'media-meta pull-right')

      const linkWhats = document.createElement('a')
      linkWhats.setAttribute('href', `https://api.whatsapp.com/send?phone=${value.celular}`)
      linkWhats.setAttribute('target', '_blank')

      // const svgWhats = document.createElement('svg')
      // svgWhats.setAttribute('class', 'whatsapp')
      // svgWhats.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
      // svgWhats.setAttribute('width', '30')
      // svgWhats.setAttribute('height', '30')
      // svgWhats.setAttribute('viewBox', '0 0 39 39')

      // const pathWhats1 = document.createElement('path')
      // pathWhats1.setAttribute('fill', '#00E676')
      // pathWhats1.setAttribute('d', 'M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z')
      
      // const pathWhats2 = document.createElement('path')
      // pathWhats2.setAttribute('fill', '#FFF')
      // pathWhats2.setAttribute('d', 'M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z')

      // svgWhats.appendChild(pathWhats1)
      // svgWhats.appendChild(pathWhats2)
      const iconWhats = document.createElement('i')
      iconWhats.setAttribute('class', 'glyphicon glyphicon-earphone')
      iconWhats.style.fontSize = '17px'
      iconWhats.style.color = '#059705'

      span.style.color = '#f0ad4e'

      linkWhats.appendChild(iconWhats)
      // linkWhats.innerHTML = 'link'
      spanWhats.appendChild(linkWhats)

      console.log(spanWhats);
      divMediaBody.appendChild(spanWhats) 
      
    }

    title.appendChild(span)

    divMediaBody.appendChild(title)
    divMediaBody.appendChild(paragAuthor)

    divMedia.appendChild(divMediaBody)
    tdBook.appendChild(divMedia)

    indisponivel.appendChild(iconInd)
    tdCheckbox.appendChild(indisponivel)    

    star.appendChild(icon)
    tdStar.appendChild(star)

    tr.appendChild(tdCheckbox)
    tr.appendChild(tdStar)
    tr.appendChild(tdBook)

    tbody.appendChild(tr)

    iconInd.addEventListener('click', () => {
      alert('Livro alterado para indisponível');
    })
  })
}
