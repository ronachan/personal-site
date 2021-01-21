// // import logo from './logo.svg';
// import React, { Component } from "react";
// import './App.css';
// import Home from './pages/Home';
// import { BrowserRouter, Route, Redirect } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Route exact path="/" component={Home}/>
//         <Redirect to="/"/>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


(function () {
  'use strict';
  
   $('a.page-scroll').click(function() {
       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html,body').animate({
             scrollTop: target.offset().top
           }, 900);
           return false;
         }
       }
     });

 
   // Portfolio isotope filter
   $(window).load(function() {
       var $container = $('.portfolio-items');
       $container.isotope({
           filter: '*',
           animationOptions: {
               duration: 750,
               easing: 'linear',
               queue: false
           }
       });
       $('.cat a').click(function() {
           $('.cat .active').removeClass('active');
           $(this).addClass('active');
           var selector = $(this).attr('data-filter');
           $container.isotope({
               filter: selector,
               animationOptions: {
                   duration: 750,
                   easing: 'linear',
                   queue: false
               }
           });
           return false;
       });

   });
 
 
   // Nivo Lightbox 
   $('.portfolio-item a').nivoLightbox({
           effect: 'slideDown',  
           keyboardNav: true,                            
       });

}());

