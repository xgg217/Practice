console.log('content');

// 修改h1的颜色为红色
(() => {
  // const h1 = document.querySelector('h1');

  // if (h1)
  // {
  //   h1.style.color = 'red';
  // }

})();

// 鼠标悬停在图片上时 显示图片相关信息
(() => {

  const getByte = (url) => {
    return fetch(url).then(res => {

      return res.blob()
    }).then(blob => {
      return (blob.size / 1024).toFixed(2) + ' KB'
    });
  }


  document.addEventListener('mouseover', (e) => {
    // if (e.target.tagName !== 'IMG')
    // {
    //   // console.log(e.target.src);
    //   return
    // }

    const p = e.target.parentElement.querySelector('img');

    if (p)
    {
      getByte(p.src).then(byte => {
        console.log(byte);
      }).catch(err => {
        console.log(err);
      })
    }


  }, true)


})();
