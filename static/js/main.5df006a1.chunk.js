(this["webpackJsonpreact-quiz-app-sweeft"]=this["webpackJsonpreact-quiz-app-sweeft"]||[]).push([[0],{60:function(e,n,t){"use strict";t.r(n);var r,o,c,i,a,s,l,d,u,b,j,m,p,f,g,h,x,O,y=t(0),v=t(26),w=t.n(v),k=t(27),S=t(5),z=t(13),C=t.n(z),q=t(33),Q=t(2),F=t(28),A=t.n(F),E=t(3),G=t(4),M=t.p+"static/media/background.b21a67f9.jpg",B=Object(G.a)(r||(r=Object(E.a)(["\n\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing:border-box;\n    }\n\n    body{\n        font-family: 'Poppins', sans-serif;\n        \n    }\n\n    .correct{\n        background-color: #23C552 !important;\n        color: #232323 !important;\n    }\n\n    .incorrect{\n        background-color: #F84F31 !important;\n        color: #232323 !important;\n    }\n\n    #root{\n        background: url(",");\n        background-blend-mode: lighten;\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-color: rgba(255,255,255,0.25);\n    }\n"])),M),V=G.b.div(o||(o=Object(E.a)(["\n  width: 80%;\n  margin: 0 auto;\n  padding: 0 0.5rem;\n"]))),_=[{category:"General Knowledge",value:9},{category:"Books",value:10},{category:"Films",value:11},{category:"Music",value:12},{category:"Musicals and Theaters",value:13},{category:"Television",value:14},{category:"Video Games",value:15},{category:"Board Games",value:16},{category:"Science and Nature",value:17},{category:"Science Computers",value:18},{category:"Mathematics",value:19},{category:"Mythology",value:20},{category:"Sports",value:21},{category:"Geography",value:22},{category:"History",value:23},{category:"Politics",value:24},{category:"Art",value:25},{category:"Celebrities",value:26},{category:"Animals",value:27},{category:"Vehicles",value:28},{category:"Comics",value:29},{category:"Gadgets",value:30},{category:"Japanese Anime",value:31},{category:"Cartoon and Animations",value:32}],J=["easy","medium","hard"],N=G.b.div(c||(c=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100vh;\n"]))),P=G.b.h1(i||(i=Object(E.a)(["\n  font-size: 3rem;\n  color: #232323;\n  margin: 1rem;\n  text-align: center;\n"]))),T=G.b.select(a||(a=Object(E.a)(["\n  padding: 0.5rem 1rem;\n  color: #fff;\n  background-color: #232323;\n  border-radius: 0.25rem;\n  outline: none;\n  margin: 1rem;\n  width: 50%;\n  font-size: 1.25rem;\n  cursor: pointer;\n\n  @media screen and (max-width: 600px) {\n    width: 75%;\n  }\n  @media screen and (max-width: 400px) {\n    width: 100%;\n  }\n\n  &::-webkit-scrollbar {\n    width: 10px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background: #232323;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: #888;\n  }\n\n  &::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n"]))),H=G.b.button(s||(s=Object(E.a)(["\n  min-width: 100px;\n  min-height: 50px;\n  margin-top: 1rem;\n  font-size: 1rem;\n  font-weight: bold;\n  background-color: #232323;\n  color: #fff;\n  outline: none;\n  border: none;\n  border-radius: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  transition: opacity 0.25s ease-in;\n\n  &:hover {\n    opacity: 0.95;\n    cursor: pointer;\n  }\n"]))),D=G.b.div(l||(l=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"]))),I=G.b.h1(d||(d=Object(E.a)(["\n  margin-top: 2rem;\n  font-size: 1rem;\n  color: #232323;\n  background-color: rgba(248, 79, 49, 0.8);\n  padding: 0.25rem 0.5rem;\n  border-radius: 5px;\n  text-align: center;\n"]))),K=t(1),R=function(e){var n=e.fetchQuestions,t=e.error,r=e.setError,o=Object(y.useState)(),c=Object(S.a)(o,2),i=c[0],a=c[1],s=Object(y.useState)(),l=Object(S.a)(s,2),d=l[0],u=l[1],b=Object(Q.f)();return Object(K.jsxs)(N,{children:[t&&Object(K.jsx)(I,{style:t?{display:"block"}:{display:"none"},children:t}),Object(K.jsx)(P,{children:"Quiz App"}),Object(K.jsxs)(D,{children:[Object(K.jsxs)(T,{required:!0,onChange:function(e){a(e.target.value)},children:[Object(K.jsx)("option",{defaultValue:"",disabled:i,hidden:i,children:"Select a Category"}),_.map((function(e,n){return Object(K.jsx)("option",{value:e.value,children:e.category},n)}))]}),Object(K.jsxs)(T,{required:!0,onChange:function(e){u(e.target.value)},children:[Object(K.jsx)("option",{defaultValue:"",disabled:d,hidden:d,children:"Select a Difficulty"}),J.map((function(e){return Object(K.jsx)("option",{value:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e)}))]})]}),Object(K.jsx)(H,{onClick:function(){i&&d?(n(i,d),b("/quiz"),u(""),a(""),r()):r("Please Select Both Fields.")},children:"Start Quiz"})]})},U=t(32),L=Object(G.c)(u||(u=Object(E.a)(["   \n    to{\n        transform: rotate(360deg);\n    }\n"]))),W=G.b.div(b||(b=Object(E.a)(["\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  border: 10px solid #fff;\n  border-color: #232323;\n  border-top-color: #fff;\n  position: absolute;\n\n  animation: "," 1s ease-in-out infinite;\n"])),L),X=function(){return Object(K.jsx)(W,{})},Y=G.b.div(j||(j=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  text-align: center;\n  flex-direction: column;\n"]))),Z=G.b.div(m||(m=Object(E.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  color: #232323;\n  font-size: 1.5rem;\n  padding: 1rem;\n\n  @media screen and (max-width: 500px) {\n    flex-direction: column-reverse;\n  }\n"]))),$=G.b.div(p||(p=Object(E.a)(["\n  display: flex;\n  min-width: 100%;\n  flex-direction: column;\n  gap: 1rem;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  border: 5px solid #232323;\n"]))),ee=G.b.div(f||(f=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  width: 100%;\n  padding: 1rem;\n\n  h1 {\n    font-size: 2rem;\n  }\n"]))),ne=G.b.div(g||(g=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 1rem;\n"]))),te=G.b.button(h||(h=Object(E.a)(["\n  width: 100%;\n  padding: 1rem;\n  font-weight: bold;\n  font-size: 1.5rem;\n  color: #fff;\n  outline: none;\n  border-radius: 0.25rem;\n  border: none;\n  background-color: #232323;\n  transition: all 0.25s ease-in;\n\n  &:hover {\n    cursor: pointer;\n    opacity: 0.9;\n  }\n"]))),re=G.b.button(x||(x=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 4px solid #232323;\n  border-radius: 0.25rem;\n  min-height: 40px;\n  min-width: 80px;\n  padding: 0.5rem 1rem;\n  color: #232323;\n  background-color: #fff;\n  font-weight: bold;\n  font-size: 1rem;\n  margin-top: 1rem;\n  transition: opacity 0.25s ease-in;\n\n  &:hover {\n    cursor: pointer;\n    opacity: 0.8;\n  }\n"]))),oe=function(e){var n=e.score,t=e.questions,r=e.setQuestions,o=e.setScore,c=(e.error,e.setError),i=Object(y.useState)(),a=Object(S.a)(i,2),s=a[0],l=a[1],d=Object(y.useState)(0),u=Object(S.a)(d,2),b=u[0],j=u[1],m=Object(y.useState)(""),p=Object(S.a)(m,2),f=p[0],g=p[1],h=Object(Q.f)(),x=function(){setTimeout((function(){b+1<10?(j(b+1),g()):(j(0),l(),g(),r(),h("/score"))}),1500)};return Object(y.useEffect)((function(){t&&(0!==t.length?l([t[b].correct_answer].concat(Object(U.a)(t[b].incorrect_answers)).sort((function(){return Math.random()-.5}))):(r(),c("No Questions Found"),h("/")))}),[t,b,h,r,c]),Object(K.jsxs)(Y,{children:[!t&&Object(K.jsx)(X,{}),t&&0!==t.length&&Object(K.jsxs)($,{children:[Object(K.jsxs)(Z,{children:[Object(K.jsxs)("h1",{children:["Score: ",n]}),Object(K.jsxs)("h1",{children:[b+1," / 10"]})]}),Object(K.jsxs)(ee,{children:[Object(K.jsx)("h1",{children:t[b].question}),Object(K.jsx)(ne,{children:s&&s.map((function(e){return Object(K.jsx)(te,{value:e,onClick:function(r){g(e),function(e){e===t[b].correct_answer?(o(n+1),x()):x()}(e)},className:f&&e===t[b].correct_answer?"correct":f&&"incorrect",disabled:f,children:e},e)}))})]})]}),t&&Object(K.jsx)(re,{onClick:function(){j(0),g(),l(),r(),o(0),h("/")},children:"Reset"})]})},ce=G.b.div(O||(O=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  text-align: center;\n\n  h1 {\n    color: #232323;\n    font-size: 5rem;\n  }\n\n  button {\n    display: flex;\n    border-radius: 0.25rem;\n    background-color: #232323;\n    color: #fff;\n    padding: 1rem 2rem;\n    border: none;\n    outline: none;\n    font-size: 3rem;\n    font-weight: bold;\n    transition: opacity 0.25s ease-in;\n\n    &:hover {\n      opacity: 0.9;\n      cursor: pointer;\n    }\n  }\n"]))),ie=function(e){var n=e.score,t=e.setScore,r=e.setQuestions,o=Object(Q.f)();return Object(K.jsxs)(ce,{children:[Object(K.jsxs)("h1",{children:["Final Score :"," ",Object(K.jsx)("span",{style:n>5?{color:"#23C552"}:{color:"#F84F31"},children:n})]}),Object(K.jsx)("button",{onClick:function(){t(0),r(),o("/")},children:"Home"})]})},ae=function(){var e=Object(y.useState)(),n=Object(S.a)(e,2),t=n[0],r=n[1],o=Object(y.useState)(0),c=Object(S.a)(o,2),i=c[0],a=c[1],s=Object(y.useState)(),l=Object(S.a)(s,2),d=l[0],u=l[1],b=function(){var e=Object(k.a)(C.a.mark((function e(n,t){var o,c,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="https://opentdb.com/api.php?amount=10&category=".concat(n,"&difficulty=").concat(t,"&type=multiple"),e.next=3,A.a.get(o);case 3:c=e.sent,i=c.data,r(i.results);case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return Object(K.jsxs)(q.a,{basename:"/react-opentdb-quiz-app",children:[Object(K.jsx)(B,{}),Object(K.jsx)(V,{children:Object(K.jsxs)(Q.c,{children:[Object(K.jsx)(Q.a,{path:"/",element:Object(K.jsx)(R,{fetchQuestions:b,error:d,setError:u})}),Object(K.jsx)(Q.a,{path:"/quiz",element:Object(K.jsx)(oe,{questions:t,setQuestions:r,score:i,setScore:a,error:d,setError:u})}),Object(K.jsx)(Q.a,{path:"/score",element:Object(K.jsx)(ie,{score:i,setScore:a,setQuestions:r})})]})})]})},se=document.getElementById("root");w.a.render(Object(K.jsx)(ae,{}),se)}},[[60,1,2]]]);
//# sourceMappingURL=main.5df006a1.chunk.js.map