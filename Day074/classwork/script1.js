//ელემენტებისთვის კლასის დამატება  სკრიპტიდან
const div = document.getElementById('div')
const p = document.getElementById('p1')

console.log(p)
p.classList.add('pColor') //კლასის დამატება htmlის ელემენტზე

p.classNmae = 'pColor' //ანიჭებს ერთ კლასს მხოლოდ(რაც ადრე ჰქონდა კლასი,ის შეიცვლება ამ კლასით)

p.addEventListener('click',function(){
    p.classList.add('pColor')
}) 