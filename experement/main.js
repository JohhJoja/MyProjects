
window.onload = function(){
  const teleport1 = document.querySelector('.teleport1');
  const teleport2 = document.querySelector('.teleport2');
  const teleport3 = document.querySelector('.teleport3');
  const teleport4 = document.querySelector('.teleport4');
  const teleport5 = document.querySelector('.teleport5');
  const teleport6 = document.querySelector('.teleport6');

  const parallax__images = document.querySelector('.parallax__images');
  if(parallax__images){


    const f1 = 14;
    const f2 = 7;
    const f3 = 4;
    const f4 = 2;
    const f5 = 1;
    const f6 = 0.5;
    const speed = 0.5;

    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;

    function setMouseParallaxStyle(){
      const disX = coordXprocent - positionX;
      const disY = coordYprocent - positionY;

      positionX = positionX + (disX * speed);
      positionY = positionY + (disY * speed);

      teleport1.style.cssText = `transform: translate(${positionX / f1}%,${positionY / f1}%);`;
      teleport2.style.cssText = `transform: translate(${positionX / f2}%,${positionY / f2}%);`;
      teleport3.style.cssText = `transform: translate(${positionX / f3}%,${positionY / f3}%);`;
      teleport4.style.cssText = `transform: translate(${positionX / f4}%,${positionY / f4}%);`;
      teleport5.style.cssText = `transform: translate(${positionX / f5}%,${positionY / f5}%);`;
      teleport6.style.cssText = `transform: translate(${positionX / f6}%,${positionY / f6}%);`;

      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    parallax__images.addEventListener("mousemove", function(event){

        const parallaxWidth = parallax__images.offsetWidth;
        const parallaxHeight = parallax__images.offsetHeight;

        const coordX = event.pageX - parallaxWidth / 2;
        const coordY = event.pageY - parallaxHeight / 2;

        coordXprocent = coordX / parallaxWidth * 100;
        coordYprocent = coordY / parallaxHeight * 100;
    });


    // let thresholdSets = [];
    // for(let i = 0; i<=1.0; i+=0.005){
    //   thresholdSets.push(i);
    // }
    // const callback = function(entries, observer){
    //   const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
    //   setParallaxItemsStyle(scrollTopProcent);
    // };
    // const observer = new IntersectionObserver(callback, {threshold: thresholdSets});
    // observer.observe(document.querySelector('.content'));
    //
    // function setParallaxItemsStyle(scrollTopProcent){
    //   content.style.cssText = `transform: translate(0%, -${scrollTopProcent / 9}%);`;
    //   image_parallax__mountains.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 6}%);`;
    //   image_parallax__human.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 3}%);`;
    // }
  }
}


// window.addEventListener("mousemove", function(e){
//   const parallaxWidth = parallax.offsetWidth;
//            const parallaxHeight = parallax.offsetHeight;
//
//            const coordX = event.pageX - parallaxWidth / 2;
//            const coordY = event.pageY - parallaxHeight / 2;
//
//            coordXprocent = coordX / parallaxWidth * 100;
//            coordYprocent = coordY / parallaxHeight * 100;
// });
// teleport1.clientX =

















//
